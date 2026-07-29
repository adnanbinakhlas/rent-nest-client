import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>How do I rent a property?</AccordionTrigger>

          <AccordionContent>
            Browse listings and submit a booking request.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
