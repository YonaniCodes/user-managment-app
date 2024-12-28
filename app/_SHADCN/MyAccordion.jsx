import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MyAccordion() {
  return (
    <div className="w-[200px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Coded Design</AccordionTrigger>
          <AccordionContent>Thank you for subscibing</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Coded Design</AccordionTrigger>
          <AccordionContent>Thank you for subscibing</AccordionContent>
        </AccordionItem>{" "}
        <AccordionItem value="item-1">
          <AccordionTrigger>Coded Ui</AccordionTrigger>
          <AccordionContent>Thank you for subscibing</AccordionContent>
        </AccordionItem>{" "}
        <AccordionItem value="item-1">
          <AccordionTrigger>Coded Design</AccordionTrigger>
          <AccordionContent>Thank you for subscibing</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
