import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  {
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    question: 'Is it styled?',
    answer:
      'Yes. It comes with default styles that matches the other components aesthetic.',
  },
  {
    question: 'Is it animated?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    question: 'Is it responsive?',
    answer:
      'Yes. It works on mobile, tablet, desktop, and anything in between.',
  },
];

const Page = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map(({ question, answer }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Page;
