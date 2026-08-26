import { createFileRoute } from "@tanstack/react-router";
import coastImage from "@/assets/coast-development.jpg";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/site/primitives";

const CASES = [
  {
    title: "Si usted quiere comprar para volver",
    body: "Le acompañamos desde la verificación del título hasta el cierre, con informes por escrito antes de que comprometa un dólar.",
  },
  {
    title: "Si usted quiere comprar para rentar",
    body: "Revisamos la estructura legal de la operación y del contrato de administración antes de firmar, no después de que algo salga mal.",
  },
  {
    title: "Si usted heredó un bien en el país",
    body: "Saneamos títulos, abrimos sucesiones y resolvemos ocupaciones de terceros o de familiares — el escenario de mayor urgencia y mayor carga emocional, y el que exige más experiencia.",
  },
];

export const Route = createFileRoute("/mercados/diaspora-dominicana")({
  head: () => ({
    meta: [
      { title: "Diáspora Dominicana: patrimonio y herencias en RD | J. Mallén & Associates" },
      {
        name: "description",
        content:
          "Asesoría legal para dominicanos en el exterior: comprar, heredar o poner en orden una propiedad en República Dominicana sin estar presente, con rendición de cuentas por escrito.",
      },
      { property: "og:title", content: "Diáspora Dominicana | J. Mallén & Associates" },
      {
        property: "og:description",
        content:
          "Su vida está allá. Su patrimonio está aquí. Alguien tiene que responder por los dos lados.",
      },
      { property: "og:url", content: "/mercados/diaspora-dominicana" },
    ],
    links: [{ rel: "canonical", href: "/mercados/diaspora-dominicana" }],
  }),
  component: DiasporaPage,
});

function DiasporaPage() {
  return (
    <>
      <PageHero
        eyebrow="Mercados · Diáspora dominicana"
        title="Su vida está allá. Su patrimonio está aquí. Alguien tiene que responder por los dos lados."
        lede="Comprar, heredar o poner en orden una propiedad en República Dominicana sin poder estar presente exige algo más que un abogado: exige alguien que le rinda cuentas con la misma disciplina con la que usted rinde cuentas en su trabajo en el exterior. Trabajamos con la diáspora dominicana en Estados Unidos, España y el resto del mundo bajo esa premisa."
        image={coastImage}
        imageAlt="Costa dominicana con desarrollo residencial"
      />

      <Section>
        <Eyebrow>Tres situaciones, tres formas de acompañarlas</Eyebrow>
        <ul className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {CASES.map((item) => (
            <li key={item.title} className="bg-background p-8 md:p-10">
              <h2 className="display-md text-xl">{item.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Independencia</Eyebrow>
            <h2 className="display-lg mt-5 text-balance">
              Alguien que no le está vendiendo nada, de su lado, en su idioma.
            </h2>
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              No vendemos inmuebles ni recibimos comisión de terceros. Cuando el mismo agente o
              desarrollador que vende la propiedad también recomienda a quien debe revisar el
              contrato, la revisión deja de ser independiente. La nuestra responde únicamente ante
              usted.
            </p>
            <p>
              Comunicación escrita y documentada en cada etapa, no llamadas informales que después
              nadie puede verificar. Honorarios por etapas contra entregables verificables, nunca un
              pago único por adelantado.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Escríbanos desde donde esté — respondemos por escrito."
        body="Cuéntenos su situación y en qué país se encuentra. La primera conversación es confidencial."
        label="Escríbanos"
      />
    </>
  );
}
