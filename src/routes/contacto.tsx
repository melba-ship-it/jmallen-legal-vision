import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { Eyebrow, PageHero, Section } from "@/components/site/primitives";
import { FIRM } from "@/content/site";
import puntaImage from "@/assets/punta-cana-entrada.jpg.asset.json";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | J. Mallén & Associates Law Consultant" },
      {
        name: "description",
        content:
          "Agende una conversación inicial confidencial con J. Mallén & Associates. Santo Domingo y Punta Cana, República Dominicana.",
      },
      { property: "og:title", content: "Contacto | J. Mallén & Associates" },
      {
        property: "og:description",
        content: "Antes de decidir, converse con quien va a acompañar la decisión.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Antes de decidir, converse con quien va a acompañar la decisión."
        lede="Descríbanos su situación en sus propias palabras. No necesita traducirla a lenguaje jurídico: de eso nos ocupamos nosotros."
        image={puntaImage.url}
        imageAlt="Entrada a la oficina de J. Mallén & Associates en Punta Cana"
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />

          <aside className="space-y-10">
            <div>
              <Eyebrow>Sedes</Eyebrow>
              <ul className="mt-5 space-y-4 text-base">
                {FIRM.addresses.map((office) => (
                  <li key={office.city}><strong className="font-medium">{office.city}</strong><span className="block text-muted-foreground">{office.street}</span></li>
                ))}
              </ul>
            </div>

            <div>
              <Eyebrow>Escríbanos directamente</Eyebrow>
              <a className="mt-5 block text-base text-foreground underline underline-offset-4" href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
              <a className="mt-2 block text-base text-foreground underline underline-offset-4" href={`tel:${FIRM.phone.replace(/\s/g, "")}`}>{FIRM.phone}</a>
            </div>

            <div className="border-l border-border pl-6">
               <p className="text-base leading-relaxed text-muted-foreground">
                La firma responde por escrito y documenta cada etapa. La primera conversación es
                confidencial y no compromete la contratación.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
