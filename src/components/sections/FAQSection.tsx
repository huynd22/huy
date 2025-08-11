import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import img1 from "@/public/images/faq/img-1.png";
import Image from "next/image";

const faqs = [
  {
    question: "Will I get a replacement account if my account is banned?",
    answer:
      "After your advertising account is disabled, we would immediately work with Facebook to appeal the suspension. The results will be notified after a few days. For permanently disabled cases, we would quickly transfer your money to another account so you could continue advertising without wasting time waiting",
  },
  {
    question:
      "When an issue occurs, how long does the resolution process take?",
    answer:
      "Our skilled staff is on call around-the-clock, even on weekends and holidays, to help our clients whenever they need it. In order to minimize any inconvenience to your business, we work hard to resolve all difficulties as soon as possible.",
  },
  {
    question:
      "If an account is locked, will the funds already deposited be lost?",
    answer:
      "No. Iron Agency will transfer the remaining balance from the old account and offer a new replacement account at no cost if an account is locked. There won't be any extra charges.",
  },
  {
    question: "Are accounts limited to running on certain product types?",
    answer:
      "All product kinds, including limited ones, can have advertisements running on the accounts we offer.",
  },
  {
    question: "Can I get a refund if I stop working with you?",
    answer:
      "Yes. If the customer decides to stop using the account rental service for any reason, Iron Agency will provide them a complete refund of the remaining amount and we will refund within 3 days.",
  },
];

export function FAQSection() {
  return (
    <section className="section-gradient py-20" id="faq">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h6>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        <div className="flex gap-12 mt-16 items-center">
          <div className="w-2/5 overflow-hidden">
            <Image src={img1} alt="faq" className="w-full h-auto scale-300" />
          </div>

          <Accordion type="single" collapsible className="flex-1 space-y-4">
            {faqs.map((q, i) => (
              <AccordionItem key={i} value={q.question} className="border-0">
                <AccordionTrigger className="card-gradient rounded-xl font-lao-man pl-6 pr-4 py-6 text-left font-bold text-foreground hover:bg-primary/5 transition-colors duration-200 shadow-md">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-lao-man font-medium pt-4 px-2 leading-relaxed">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
