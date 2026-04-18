import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

interface FAQProps {
  /**
   * Whether this FAQ block should also inject FAQPage JSON-LD.
   * Defaults to true. Set to false on pages that already render
   * their own FAQPage schema to avoid duplication.
   */
  injectSchema?: boolean;
  schemaId?: string;
}

const FAQ = ({ injectSchema = true, schemaId = "faq-component-jsonld" }: FAQProps) => {
  useEffect(() => {
    if (!injectSchema) return;
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    document.getElementById(schemaId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [injectSchema, schemaId]);

  return (
    <section className="container py-20 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="font-script text-2xl text-accent">Got questions?</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">
          Here's the answers
        </h2>
        <p className="text-foreground/75 mt-4">
          The most common things Niagara homeowners and businesses ask us.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto stamp-card px-6 md:px-8">
        {FAQS.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`} className="border-foreground/10 last:border-0">
            <AccordionTrigger className="text-left font-display text-lg text-primary hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 text-base leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
