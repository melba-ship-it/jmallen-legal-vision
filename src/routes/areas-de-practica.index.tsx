import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, Section } from "@/components/site/primitives";
import { PRACTICE_AREAS } from "@/content/site";
import meetingImage from "@/assets/santo-domingo-reuniones.jpg.asset.json";

export const Route = createFileRoute("/areas-de-practica/")({
  head: () => ({
    meta: [
      { title: "Áreas de práctica | J. Mallén & Associates Law Consultant" },
      {
        name: "description",
        content:
          "Derecho inmobiliario, corporativo, migratorio, laboral y desarrollo de negocios en República Dominicana, coordinados bajo un mismo criterio.",
      },
      { property: "og:title", content: "Áreas de práctica | J. Mallén & Associates" },
      {
        property: "og:description",
        content:
          "Cinco áreas con el mismo peso: inmobiliario, corporativo, migratorio, laboral y desarrollo de negocios.",
      },
      { property: "og:url", content: "/areas-de-practica" },
    ],
    links: [{ rel: "canonical", href: "/areas-de-practica" }],
  }),
  component: AreasIndex,
});

function AreasIndex() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de práctica"
        title="Cinco áreas con el mismo peso, coordinadas bajo un mismo criterio."
        lede="Ninguna decisión relevante en República Dominicana se resuelve dentro de una sola área. Estas son las cinco que la firma trabaja, y la lógica con la que se articulan entre sí."
        image={meetingImage.url}
        imageAlt="Sala de reuniones de J. Mallén & Associates en Santo Domingo"
      />

      <Section>
        <ul className="divide-y divide-border border-y border-border">
          {PRACTICE_AREAS.map((area) => (
            <li key={area.slug}>
              <Link
                to="/areas-de-practica/$area"
                params={{ area: area.slug }}
                className="grid gap-5 py-9 transition-opacity hover:opacity-60 md:grid-cols-[0.8fr_1.2fr] md:items-baseline"
              >
                <h2 className="display-md text-2xl">{area.name}</h2>
                <div>
                   <p className="text-base leading-relaxed">{area.hero}</p>
                  <span className="link-underline mt-5">Ver área</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Conversemos sobre su próximo paso."
        body="Si no está seguro de qué área le corresponde, empiece por describir su situación."
      />
    </>
  );
}
