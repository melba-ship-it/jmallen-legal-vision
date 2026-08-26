import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { Eyebrow, PageHero, Section } from "@/components/site/primitives";
import { FIRM } from "@/content/site";

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
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />

          <aside className="space-y-10">
            <div>
              <Eyebrow>Sedes</Eyebrow>
              <ul className="mt-5 space-y-2 text-sm md:text-base">
                {FIRM.offices.map((office) => (
                  <li key={office}>{office}, República Dominicana</li>
                ))}
              </ul>
              <p className="mt-3 text-xs italic text-muted-foreground">
                [Confirmar sedes y direcciones vigentes con JMALLEN.]
              </p>
            </div>

            <div>
              <Eyebrow>Escríbanos directamente</Eyebrow>
              <p className="mt-5 text-sm text-muted-foreground">{FIRM.emailPlaceholder}</p>
              <p className="mt-1 text-sm text-muted-foreground">{FIRM.phonePlaceholder}</p>
            </div>

            <div className="border-l border-border pl-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
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
