import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/site/primitives";
import workImage from "@/assets/santo-domingo-equipo.jpg.asset.json";

const CHANGES = [
  "Jornada de trabajo",
  "Teletrabajo",
  "Licencias",
  "Acoso laboral",
  "Digitalización de contratos",
];

export const Route = createFileRoute("/recursos/reforma-codigo-trabajo")({
  head: () => ({
    meta: [
      { title: "Reforma del Código de Trabajo: guía de cumplimiento | J. Mallén" },
      {
        name: "description",
        content:
          "Qué debe revisar una empresa con personal en República Dominicana ante la reforma del Código de Trabajo: contratos, políticas internas y protocolos.",
      },
      { property: "og:title", content: "Guía de cumplimiento: reforma del Código de Trabajo" },
      {
        property: "og:description",
        content:
          "Cambios previstos en jornada, teletrabajo, licencias, acoso laboral y digitalización de contratos.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/recursos/reforma-codigo-trabajo" },
    ],
    links: [{ rel: "canonical", href: "/recursos/reforma-codigo-trabajo" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Guía de cumplimiento ante la reforma del Código de Trabajo",
          author: { "@type": "Organization", name: "J. Mallén & Associates Law Consultant" },
          inLanguage: "es",
        }),
      },
    ],
  }),
  component: ReformaPage,
});

function ReformaPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos · Derecho Laboral"
        title="Guía de cumplimiento ante la reforma del Código de Trabajo"
        lede="Toda empresa con personal en República Dominicana deberá revisar contratos, políticas internas y protocolos. Esta guía ordena qué revisar y en qué orden."
        image={workImage.url}
        imageAlt="Espacio de trabajo de J. Mallén & Associates en Santo Domingo"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Eyebrow>Estado del trámite</Eyebrow>
          </div>
          <div className="space-y-8">
            <p className="lede">
              El proyecto de reforma del Código de Trabajo (Ley 16-92) fue aprobado en segunda
              lectura por el Senado en octubre de 2025 y en primera discusión por la Cámara de
              Diputados en mayo de 2026.
            </p>

            <div>
              <Eyebrow>Materias que introduce cambios</Eyebrow>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {CHANGES.map((c) => (
                  <li key={c} className="py-5 text-base">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Eyebrow>Qué debe revisar su empresa</Eyebrow>
              <ol className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <li>
                  <span className="text-foreground">01 · Contratos vigentes.</span> Cláusulas de
                  jornada, modalidad de trabajo y causales, contrastadas con el texto que resulte
                  aprobado.
                </li>
                <li>
                  <span className="text-foreground">02 · Políticas internas.</span> Reglamento
                  interno, política de teletrabajo y protocolo de prevención del acoso laboral.
                </li>
                <li>
                  <span className="text-foreground">03 · Registro y digitalización.</span> Soporte
                  documental de la relación laboral y validez de la firma electrónica.
                </li>
                <li>
                  <span className="text-foreground">04 · Plan de adecuación.</span> Prioridades,
                  responsables y plazos, antes de que la vigencia obligue a corregir con prisa.
                </li>
              </ol>
            </div>

            <Link
              to="/areas-de-practica/$area"
              params={{ area: "derecho-laboral" }}
              className="link-underline"
            >
              Ver el área de Derecho Laboral
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Revise si sus contratos y políticas ya cumplen con la reforma."
        body="Le indicamos qué ajustar y en qué orden, con un plan de adecuación por escrito."
      />
    </>
  );
}
