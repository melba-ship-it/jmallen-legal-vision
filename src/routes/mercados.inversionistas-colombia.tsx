import { createFileRoute } from "@tanstack/react-router";
import coastImage from "@/assets/punta-cana-entrada.jpg.asset.json";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/site/primitives";

const CHECKS = [
  "Quién es realmente el desarrollador y qué garantías respaldan la preventa.",
  "Qué dice el contrato de reserva en el lenguaje que usted entiende, no en el que el proyecto prefiere.",
  "Qué implica el régimen CONFOTUR para su caso y cómo se compara con lo que ya conoce del régimen tributario colombiano.",
  "Cómo se administra y se renta la propiedad cuando usted no está en el país.",
];

export const Route = createFileRoute("/mercados/inversionistas-colombia")({
  head: () => ({
    meta: [
      { title: "Abogados para colombianos que invierten en República Dominicana | J. Mallén" },
      {
        name: "description",
        content:
          "Asesoría legal independiente para inversionistas colombianos en Punta Cana y República Dominicana: revisión de contrato de reserva, garantías del desarrollador y régimen CONFOTUR.",
      },
      { property: "og:title", content: "Inversionistas de Colombia | J. Mallén & Associates" },
      {
        property: "og:description",
        content:
          "Antes de firmar la reserva en Punta Cana, deje que alguien que no le está vendiendo nada lea ese contrato.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/mercados/inversionistas-colombia" },
    ],
    links: [{ rel: "canonical", href: "/mercados/inversionistas-colombia" }],
  }),
  component: ColombiaPage,
});

function ColombiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Mercados · Colombia"
        title="Antes de firmar la reserva en Punta Cana, deje que alguien que no le está vendiendo nada lea ese contrato."
        lede="Cada año, más colombianos deciden invertir en República Dominicana que en casi cualquier otro país del Caribe. La mayoría lo hace confiando en el mismo desarrollador que le vende el inmueble para que también le explique el contrato. JMallén existe, para el comprador colombiano, como la alternativa a eso: un asesor que solo responde ante usted."
        image={coastImage.url}
        imageAlt="Entrada a la oficina de J. Mallén & Associates en Punta Cana"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Lo que revisamos antes de que usted reserve</Eyebrow>
            <h2 className="display-lg mt-5 text-balance">
              La revisión ocurre antes de la firma. No después.
            </h2>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {CHECKS.map((item) => (
               <li key={item} className="py-6 text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="lede mt-12 max-w-3xl">
          Atendemos en español, en su horario, y explicamos cada paso antes de que usted firme — no
          después.
        </p>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Presencia en Punta Cana</Eyebrow>
            <h2 className="display-md mt-5">
              Donde se concentra la mayoría de las operaciones colombianas.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            La firma cuenta con presencia en Santo Domingo y Punta Cana, el destino donde se
            concentra la mayor parte de la llegada colombiana al país.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Antes de firmar, converse con nosotros."
        body="Una conversación inicial confidencial, en español y en su horario, antes de comprometer capital."
        label="Antes de firmar, converse con nosotros"
      />
    </>
  );
}
