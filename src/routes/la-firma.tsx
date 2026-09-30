import { createFileRoute } from "@tanstack/react-router";
import officeImage from "@/assets/santo-domingo-recepcion.jpg.asset.json";
import juliaImage from "@/assets/julia-mallen.jpg.asset.json";
import { CtaBand, Eyebrow, PageHero, Section } from "@/components/site/primitives";
import { FIRM, PILLARS } from "@/content/site";

export const Route = createFileRoute("/la-firma")({
  head: () => ({
    meta: [
      { title: "La Firma y Julia Mallén | J. Mallén & Associates Law Consultant" },
      {
        name: "description",
        content:
          "Firma boutique de asesoría legal estratégica en República Dominicana liderada por Julia Alexandra Mallén Suárez: criterio jurídico, independencia y atención directa.",
      },
      { property: "og:title", content: "La Firma | J. Mallén & Associates" },
      {
        property: "og:description",
        content:
          "Rigor jurídico y visión empresarial para acompañar decisiones relevantes en República Dominicana.",
      },
      { property: "og:url", content: "/la-firma" },
    ],
    links: [{ rel: "canonical", href: "/la-firma" }],
  }),
  component: FirmaPage,
});

function FirmaPage() {
  return (
    <>
      <PageHero
        eyebrow="La Firma"
        title="Una firma boutique donde el criterio no se delega."
        lede={`${FIRM.name} es una firma boutique de asesoría legal estratégica en República Dominicana, liderada por su fundadora ${FIRM.founder}. Su enfoque combina rigor jurídico y visión empresarial para acompañar cada decisión con seguridad legal y resultados concretos.`}
        image={officeImage.url}
        imageAlt="Recepción de la oficina de J. Mallén & Associates en Santo Domingo"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Julia Mallén</Eyebrow>
            <h2 className="display-lg mt-5 text-balance">{FIRM.founder}</h2>
            <img src={juliaImage.url} alt="Julia Alexandra Mallén Suárez" loading="lazy" className="mt-8 aspect-3/4 w-full max-w-sm object-cover object-top" />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Fundadora y responsable directa de los mandatos de la firma. Atiende a empresarios,
              propietarios, constructores, desarrolladores inmobiliarios e inversionistas
              —dominicanos y extranjeros— así como a personas naturales con necesidades legales de
              inversión inmobiliaria o migración.
            </p>
            <p>
              La acompaña un equipo de abogados, notarios, agrimensores y asociados externos que aportan su especialidad según las necesidades de cada mandato.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Filosofía boutique</Eyebrow>
            <h2 className="display-lg mt-5 text-balance">
              Menos mandatos, más criterio en cada uno.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Un modelo boutique no significa una firma pequeña: significa que quien conoce el caso
              es quien lo decide, que el interlocutor no cambia a mitad de camino y que el criterio
              jurídico se pone al servicio de una decisión empresarial o patrimonial concreta.
            </p>
            <p>
              La firma trabaja de forma preventiva. La mayoría de los conflictos que llegan a
              litigio se podían haber evitado en la etapa contractual, y ese es el momento en el
              que preferimos intervenir.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Confianza</Eyebrow>
        <h2 className="display-lg mt-5 max-w-3xl text-balance">
          Pilares verificables, no adjetivos.
        </h2>
        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <li key={pillar.title} className="bg-background p-8 md:p-10">
              <h3 className="display-md text-xl">{pillar.title}</h3>
               <p className="mt-4 text-base leading-relaxed text-muted-foreground">{pillar.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Conversemos sobre su próximo paso."
        body="Una primera conversación confidencial, sin compromiso de contratación."
      />
    </>
  );
}
