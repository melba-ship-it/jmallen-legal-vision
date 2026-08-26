import { useState, type FormEvent } from "react";
import { SITUATIONS } from "@/content/site";

const fieldClass =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-sm text-foreground outline-hidden transition-colors placeholder:text-muted-foreground/60 focus:border-foreground";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-border bg-background p-10">
        <h3 className="display-md">Gracias. Su mensaje quedó registrado.</h3>
        <p className="lede mt-4 text-sm">
          La firma responde por escrito. [Pendiente: conectar el formulario al correo o CRM
          oficial de JMALLEN antes del lanzamiento.]
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="eyebrow">
            Nombre
          </label>
          <input id="nombre" name="nombre" required className={fieldClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="pais" className="eyebrow">
            País desde el que escribe
          </label>
          <input id="pais" name="pais" className={fieldClass} autoComplete="country-name" />
        </div>
        <div>
          <label htmlFor="situacion" className="eyebrow">
            Su situación hoy
          </label>
          <select id="situacion" name="situacion" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Seleccione
            </option>
            {SITUATIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="eyebrow">
          Cuéntenos brevemente qué necesita decidir
        </label>
        <textarea id="mensaje" name="mensaje" rows={4} required className={fieldClass} />
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Su consulta es confidencial. Respondemos por escrito.
      </p>

      <button
        type="submit"
        className="justify-self-start bg-foreground px-9 py-4 text-[0.72rem] uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85"
      >
        Escríbanos
      </button>
    </form>
  );
}
