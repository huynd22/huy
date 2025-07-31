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
    <section className="bg-[#000000] py-20" id="faq">
      <div className="container mx-auto">
        <h6 className="text-center text-[30px] text-[#FFFFFF] mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h6>
        <div className="flex gap-12 mt-16 items-center">
          <Image src={img1} alt="faq" className="w-2/5 h-auto scale-300" />

          <Accordion type="single" collapsible className="flex-1 space-y-6">
            {faqs.map((q, i) => (
              <AccordionItem key={i} value={q.question} className="border-0">
                <AccordionTrigger className="bg-[#D9D9D9] rounded-[13px] pl-4 pr-2 py-5">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="text-white pt-4">
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
