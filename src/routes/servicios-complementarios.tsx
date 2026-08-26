import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/servicios-complementarios")({
  head: () => ({
    meta: [
      { title: "Servicios complementarios | J. Mallén & Associates" },
      {
        name: "description",
        content:
          "Derecho de Familia y Gestión y Cobranza de Cartera: servicios complementarios vigentes de J. Mallén & Associates en República Dominicana.",
      },
      { property: "og:title", content: "Servicios complementarios | J. Mallén & Associates" },
      {
        property: "og:description",
        content: "Derecho de Familia y Gestión y Cobranza de Cartera.",
      },
      { property: "og:url", content: "/servicios-complementarios" },
    ],
    links: [{ rel: "canonical", href: "/servicios-complementarios" }],
  }),
  component: ComplementariosPage,
});

function ComplementariosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios complementarios"
        title="Dos servicios vigentes, fuera del núcleo de la firma."
        lede="Además de sus cinco áreas núcleo, la firma presta dos servicios complementarios, de menor peso dentro de su posicionamiento pero plenamente vigentes."
      />

      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2">
          <div className="bg-background p-8 md:p-12">
            <h2 className="display-md text-2xl">Derecho de Familia</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              Asesoría y representación en asuntos de familia: divorcios, pensión alimenticia,
              régimen de custodia y sucesiones.
            </p>
          </div>
          <div className="bg-background p-8 md:p-12">
            <h2 className="display-md text-2xl">Gestión y Cobranza de Cartera</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              Administración y cobro de cartera pre-jurídica y jurídica para instituciones
              bancarias y comerciales, con infraestructura de call center y seguimiento del proceso
              de recuperación.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand title="Conversemos sobre su próximo paso." />
    </>
  );
}
