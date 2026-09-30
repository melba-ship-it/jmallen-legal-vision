import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/logo-jmallen-light.png.asset.json";
import { FIRM, PRACTICE_AREAS } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-[color:var(--paper)]">
      <div className="container-editorial grid gap-14 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:py-20">
        <div>
          <img
            src={logoLight.url}
            alt={FIRM.name}
            loading="lazy"
            width={1920}
            height={549}
            className="h-14 w-auto max-w-full object-contain object-left"
          />
          <p className="mt-6 max-w-sm text-base leading-relaxed text-[color:var(--paper)]">
            Firma boutique de asesoría legal estratégica en República Dominicana, liderada por{" "}
            {FIRM.founder}.
          </p>
          <p className="mt-6 text-base text-[color:var(--paper)]">
            {FIRM.offices.join(" · ")}
          </p>
        </div>

        <nav aria-label="Áreas de práctica">
          <p className="eyebrow text-[color:var(--sand)]">Áreas de Práctica</p>
          <ul className="mt-5 space-y-3 text-sm">
            {PRACTICE_AREAS.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/areas-de-practica/$area"
                  params={{ area: a.slug }}
                  className="text-[color:var(--paper)]/80 transition-opacity hover:opacity-60"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 text-base italic text-[color:var(--paper)]">
            <li>
              <Link
                to="/servicios-complementarios"
                className="transition-opacity hover:opacity-60"
              >
                Derecho de Familia
              </Link>
            </li>
            <li>
              <Link
                to="/servicios-complementarios"
                className="transition-opacity hover:opacity-60"
              >
                Gestión y Cobranza de Cartera
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Firma">
          <p className="eyebrow text-[color:var(--sand)]">Firma</p>
          <ul className="mt-5 space-y-3 text-sm text-[color:var(--paper)]/80">
            <li>
              <Link to="/ruta-de-inversion" className="hover:opacity-60">
                Ruta de Inversión JMallén
              </Link>
            </li>
            <li>
              <Link to="/mercados/diaspora-dominicana" className="hover:opacity-60">
                Diáspora Dominicana
              </Link>
            </li>
            <li>
              <Link to="/mercados/inversionistas-colombia" className="hover:opacity-60">
                Inversionistas de Colombia
              </Link>
            </li>
            <li>
              <Link to="/recursos" className="hover:opacity-60">
                Recursos
              </Link>
            </li>
            <li>
              <Link to="/la-firma" className="hover:opacity-60">
                La Firma
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:opacity-60">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-[color:var(--paper)]/15">
        <div className="container-editorial flex flex-col gap-2 py-6 text-sm text-[color:var(--paper)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {FIRM.name}
          </p>
          <p>Santo Domingo · Punta Cana · República Dominicana</p>
        </div>
      </div>
    </footer>
  );
}
