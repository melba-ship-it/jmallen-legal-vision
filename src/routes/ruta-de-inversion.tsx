import { createFileRoute, Link } from "@tanstack/react-router";
import officeImage from "@/assets/santo-domingo-reuniones.jpg.asset.json";
import { CtaBand, Eyebrow, NumberedList, PageHero, Section } from "@/components/site/primitives";
import { PRACTICE_AREAS, ROUTE_PHASES, ROUTE_PROFILES } from "@/content/site";

export const Route = createFileRoute("/ruta-de-inversion")({
  head: () => ({
    meta: [
      { title: "Ruta de Inversión JMallén | Invertir en República Dominicana" },
      {
        name: "description",
        content:
          "Una solución integrada que coordina lo inmobiliario, corporativo, migratorio, laboral y la estructuración de negocio para invertir o instalar una operación en República Dominicana.",
      },
      { property: "og:title", content: "Ruta de Inversión JMallén" },
      {
        property: "og:description",
        content:
          "Un solo camino, cinco áreas de derecho, tres formas de necesitarlo. Estructure su entrada a República Dominicana con un solo criterio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/ruta-de-inversion" },
    ],
    links: [{ rel: "canonical", href: "/ruta-de-inversion" }],
  }),
  component: RutaPage,
});

function RutaPage() {
  return (
    <>
      <PageHero
        eyebrow="Producto insignia"
        title="Un solo camino, cinco áreas de derecho, tres formas de necesitarlo."
        lede="Invertir, comprar o establecerse en República Dominicana rara vez implica un solo problema legal: implica varios, en distintas áreas, que además dependen entre sí. La Ruta de Inversión JMallén los coordina bajo un mismo criterio, para que usted no tenga que coordinar, por su cuenta, a cuatro o cinco proveedores que no se conocen entre ellos."
        image={officeImage.url}
        imageAlt="Sala de reuniones de J. Mallén & Associates en Santo Domingo"
      />

      <Section id="tres-perfiles">
        <Eyebrow>Los tres perfiles que la utilizan</Eyebrow>
        <h2 className="display-lg mt-5 max-w-3xl text-balance">
          La Ruta sirve a tres tipos de decisión.
        </h2>
        <NumberedList items={ROUTE_PROFILES} />
      </Section>

      <Section tone="muted" id="como-funciona">
        <Eyebrow>Cómo funciona</Eyebrow>
        <h2 className="display-lg mt-5 max-w-3xl text-balance">
          Una jornada en cinco fases, con el perfil identificado desde el primer día.
        </h2>
        <p className="lede mt-6 max-w-2xl">
          El diagnóstico inicial identifica explícitamente cuál de los tres perfiles corresponde a
          su caso, porque cambia el orden en que se activan las áreas.
        </p>

        <ol className="mt-14 border-t border-border">
          {ROUTE_PHASES.map((phase) => (
            <li
              key={phase.number}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-10"
            >
              <span className="font-display text-3xl text-[color:var(--sand)]">
                {phase.number}
              </span>
              <h3 className="display-md text-xl">{phase.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{phase.body}</p>
            </li>
          ))}
        </ol>

      </Section>

      <Section>
        <Eyebrow>Áreas que coordina</Eyebrow>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {PRACTICE_AREAS.map((area) => (
            <li key={area.slug}>
              <Link
                to="/areas-de-practica/$area"
                params={{ area: area.slug }}
                className="flex items-baseline justify-between gap-6 py-6 transition-opacity hover:opacity-60"
              >
                <span className="display-md text-xl md:text-2xl">{area.name}</span>
                <span className="eyebrow shrink-0">Ver área</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Agende una conversación inicial confidencial."
        body="Una primera conversación para identificar el objetivo real, el perfil que aplica y los plazos que su decisión exige."
      />
    </>
  );
}
