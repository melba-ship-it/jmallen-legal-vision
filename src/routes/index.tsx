import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/santo-domingo-recepcion.jpg.asset.json";
import coastImage from "@/assets/punta-cana-entrada.jpg.asset.json";
import { CtaBand, Eyebrow, Section } from "@/components/site/primitives";
import { FIRM, GATES, PILLARS, PRACTICE_AREAS } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Asesoría legal estratégica en República Dominicana | J. Mallén & Associates",
      },
      {
        name: "description",
        content:
          "Firma boutique de asesoría legal en República Dominicana: derecho inmobiliario, corporativo, migratorio, laboral y desarrollo de negocios para inversionistas y empresarios.",
      },
      {
        property: "og:title",
        content: "Asesoría legal estratégica en República Dominicana | J. Mallén & Associates",
      },
      {
        property: "og:description",
        content:
          "Firma boutique liderada por Julia Alexandra Mallén Suárez. Un solo interlocutor, en su idioma, para decidir con independencia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-[color:var(--paper)]">
        <img
          src={heroImage.url}
          alt="Recepción de la oficina de J. Mallén & Associates en Santo Domingo"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="container-editorial flex min-h-[78vh] flex-col justify-end py-24 md:min-h-[86vh] md:py-32">
          <div className="fade-up max-w-4xl">
            <Eyebrow>República Dominicana · Firma boutique</Eyebrow>
            <h1 className="display-xl mt-7 text-balance">{FIRM.tagline}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--paper)]">
              Firma boutique liderada por {FIRM.founder}. Un solo interlocutor, en su idioma, para
              decidir con independencia — esté donde esté.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contacto"
                className="bg-[color:var(--paper)] px-8 py-4 text-center text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-85"
              >
                Conversemos sobre su próximo paso
              </Link>
              <Link
                to="/ruta-de-inversion"
                className="border border-[color:var(--paper)]/60 px-8 py-4 text-center text-[0.72rem] uppercase tracking-[0.18em] transition-colors hover:bg-[color:var(--paper)] hover:text-ink"
              >
                Conozca la Ruta de Inversión JMallén
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cuatro puertas de entrada */}
      <Section>
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <Eyebrow>Empiece por su situación</Eyebrow>
            <h2 className="display-lg mt-5 text-balance">
              Cada decisión relevante activa varias áreas de derecho a la vez.
            </h2>
          </div>
          <p className="lede">
            Por eso el sitio no empieza por el área jurídica, sino por lo que usted tiene delante.
            Reconózcase en una de estas cuatro situaciones y le mostramos exactamente qué le
            corresponde.
          </p>
        </div>

        <ul className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {GATES.map((gate, i) => (
            <li key={gate.slug} className="bg-background">
              <Link
                to={gate.to}
                params={gate.params as never}
                className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-secondary md:p-12"
              >
                <div>
                  <span className="font-display text-2xl text-[color:var(--sand)]">
                    0{i + 1}
                  </span>
                  <h3 className="display-md mt-6 max-w-md text-balance">{gate.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                    {gate.description}
                  </p>
                </div>
                <span className="link-underline w-fit">Ver el camino</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Producto insignia */}
      <section className="bg-secondary">
        <div className="container-editorial grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Producto insignia</Eyebrow>
            <h2 className="display-lg mt-5 text-balance">
              Un solo camino, cinco áreas de derecho, un objetivo.
            </h2>
            <p className="lede mt-7">
              Que su inversión en República Dominicana avance sin fricciones. Ya sea que esté
              estructurando la entrada de una empresa, comprando su primera propiedad con vista a
              residencia, o invirtiendo en el país que dejó hace años, la Ruta de Inversión JMallén
              coordina lo inmobiliario, lo corporativo, lo migratorio, lo laboral y la
              estructuración de negocio bajo un mismo criterio.
            </p>
            <Link to="/ruta-de-inversion" className="link-underline mt-9">
              Conozca cómo funciona la Ruta
            </Link>
          </div>
          <img
            src={coastImage.url}
            alt="Entrada a la oficina de J. Mallén & Associates en Punta Cana"
            loading="lazy"
            width={1600}
            height={1000}
            className="aspect-4/3 w-full object-cover"
          />
        </div>
      </section>

      {/* Por qué JMallén */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Por qué JMallén</Eyebrow>
            <h2 className="display-lg mt-5 text-balance">
              Criterio jurídico, independencia y un interlocutor que no cambia.
            </h2>
          </div>
          <ul className="grid gap-px bg-border sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <li key={pillar.title} className="bg-background p-8">
                <h3 className="display-md text-xl">{pillar.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Áreas de práctica */}
      <Section tone="muted">
        <Eyebrow>Áreas de práctica</Eyebrow>
        <h2 className="display-lg mt-5 max-w-3xl text-balance">
          Cinco áreas con el mismo peso, coordinadas bajo un mismo criterio.
        </h2>
        <ul className="mt-14 divide-y divide-border border-y border-border">
          {PRACTICE_AREAS.map((area) => (
            <li key={area.slug}>
              <Link
                to="/areas-de-practica/$area"
                params={{ area: area.slug }}
                className="group grid gap-4 py-7 transition-opacity hover:opacity-60 md:grid-cols-[0.9fr_1.1fr] md:items-baseline"
              >
                <h3 className="display-md text-2xl">{area.name}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{area.hero}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Antes de decidir, converse con quien va a acompañar la decisión."
        body="Escríbanos y agende una primera conversación confidencial."
        label="Agende una conversación inicial"
      />
    </>
  );
}
