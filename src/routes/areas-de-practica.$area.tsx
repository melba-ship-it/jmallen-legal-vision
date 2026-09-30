import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/site/primitives";
import { PRACTICE_AREAS } from "@/content/site";
import meetingImage from "@/assets/santo-domingo-reuniones.jpg.asset.json";
import workImage from "@/assets/santo-domingo-equipo.jpg.asset.json";
import puntaImage from "@/assets/punta-cana-reuniones.jpg.asset.json";

const areaImages: Record<string, { url: string; alt: string }> = {
  "derecho-inmobiliario": { url: puntaImage.url, alt: "Sala de reuniones de la oficina de J. Mallén & Associates en Punta Cana" },
  "derecho-corporativo": { url: meetingImage.url, alt: "Sala de reuniones de la oficina de J. Mallén & Associates en Santo Domingo" },
  "derecho-migratorio": { url: puntaImage.url, alt: "Espacio de atención en la oficina de J. Mallén & Associates en Punta Cana" },
  "derecho-laboral": { url: workImage.url, alt: "Equipo de trabajo en la oficina de J. Mallén & Associates en Santo Domingo" },
  "desarrollo-de-negocios": { url: meetingImage.url, alt: "Espacio de reuniones de J. Mallén & Associates en Santo Domingo" },
};

export const Route = createFileRoute("/areas-de-practica/$area")({
  loader: ({ params }) => {
    const area = PRACTICE_AREAS.find((a) => a.slug === params.area);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Área no disponible" }, { name: "robots", content: "noindex" }],
      };
    }
    const { area } = loaderData;
    return {
      meta: [
        { title: area.seoTitle },
        { name: "description", content: area.seoDescription },
        { property: "og:title", content: area.seoTitle },
        { property: "og:description", content: area.seoDescription },
        { property: "og:url", content: `/areas-de-practica/${params.area}` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/areas-de-practica/${params.area}` }],
    };
  },
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();
  const others = PRACTICE_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero eyebrow={`Áreas de práctica · ${area.name}`} title={area.hero} lede={area.lede} image={areaImages[area.slug]?.url ?? meetingImage.url} imageAlt={areaImages[area.slug]?.alt ?? "Espacio de reuniones de J. Mallén & Associates"} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Qué hacemos</Eyebrow>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {area.services.map((service) => (
              <li key={service} className="py-6 text-base leading-relaxed">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {(area.buyerBlock || area.secondBlock) && (
        <Section tone="muted">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {[area.buyerBlock, area.secondBlock].filter(Boolean).map((block) => (
              <div key={block?.title} className="bg-secondary p-8 md:p-10">
                <h2 className="display-md text-xl">{block?.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{block?.body}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <Eyebrow>Otras áreas</Eyebrow>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                to="/areas-de-practica/$area"
                params={{ area: other.slug }}
                className="flex items-baseline justify-between gap-6 py-5 transition-opacity hover:opacity-60"
              >
                <span className="display-md text-xl">{other.name}</span>
                <span className="eyebrow shrink-0">Ver</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title={area.cta.label} to={area.cta.to} label={area.cta.label} />
    </>
  );
}
