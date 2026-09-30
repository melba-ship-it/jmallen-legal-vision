import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/site/primitives";
import workImage from "@/assets/santo-domingo-equipo.jpg.asset.json";

export const Route = createFileRoute("/recursos/")({
  head: () => ({
    meta: [
      { title: "Recursos legales para empresas en República Dominicana | J. Mallén" },
      {
        name: "description",
        content:
          "Contenido de autoridad para empresas que operan en República Dominicana. Primera pieza: guía de cumplimiento ante la reforma del Código de Trabajo.",
      },
      { property: "og:title", content: "Recursos | J. Mallén & Associates" },
      {
        property: "og:description",
        content:
          "Análisis y guías de cumplimiento para empresas que deciden de forma preventiva en República Dominicana.",
      },
      { property: "og:url", content: "/recursos" },
    ],
    links: [{ rel: "canonical", href: "/recursos" }],
  }),
  component: RecursosPage,
});

function RecursosPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Contenido de autoridad para decidir antes, no después."
        lede="Material dirigido a empresas y responsables que prefieren revisar su exposición legal de forma preventiva."
        image={workImage.url}
        imageAlt="Equipo trabajando en la oficina de J. Mallén & Associates en Santo Domingo"
      />

      <Section>
        <ul className="divide-y divide-border border-y border-border">
          <li>
            <Link
              to="/recursos/reforma-codigo-trabajo"
              className="grid gap-5 py-9 transition-opacity hover:opacity-60 md:grid-cols-[0.8fr_1.2fr] md:items-baseline"
            >
              <div>
                <Eyebrow>Derecho Laboral</Eyebrow>
                <h2 className="display-md mt-4 text-2xl">
                  Guía de cumplimiento ante la reforma del Código de Trabajo
                </h2>
              </div>
              <div>
                 <p className="text-base leading-relaxed">
                  Qué debe revisar toda empresa con personal en contratos, políticas internas y
                  protocolos ante los cambios previstos en jornada, teletrabajo, licencias, acoso
                  laboral y digitalización de contratos.
                </p>
                <span className="link-underline mt-5">Leer la guía</span>
              </div>
            </Link>
          </li>
        </ul>
        <p className="mt-10 text-base italic text-muted-foreground">
          Próximos contenidos: calificación CONFOTUR, régimen de zona franca y guía de compra para
          el inversionista colombiano.
        </p>
      </Section>

      <CtaBand
        title="Revise si sus contratos y políticas ya cumplen."
        body="Una revisión preventiva cuesta una fracción de lo que cuesta corregir después."
      />
    </>
  );
}
