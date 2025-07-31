import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  "Will I get a replacement account if my account is banned?",
  "When an issue occurs, how long does the resolution process take?",
  "If an account is locked, will the funds already deposited be lost?",
  "Are accounts limited to running on certain product types?",
  "Can I get a refund if I stop working with you?",
];

export function FAQSection() {
  return (
    <section className="bg-[#000000] py-20" id="faq">
      <div className="container mx-auto">
        <h6 className="text-center text-[30px] text-[#FFFFFF] mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h6>
        <div className="flex gap-12 mt-16 items-center">
          <svg
            width="480"
            height="351"
            viewBox="0 0 480 351"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M435 350.766H45C20.1469 350.766 0 331.136 0 306.92V43.8457C0 19.6301 20.1469 0 45 0H435C459.853 0 480 19.6301 480 43.8457V306.92C480 331.136 459.853 350.766 435 350.766ZM105 51.1533C76.005 51.1533 52.5 74.0554 52.5 102.307C52.5 130.558 76.005 153.46 105 153.46C133.995 153.46 157.5 130.558 157.5 102.307C157.5 74.0554 133.995 51.1533 105 51.1533ZM60 292.305H420V189.998L337.955 110.057C333.562 105.777 326.438 105.777 322.044 110.057L195 233.844L142.955 183.134C138.562 178.853 131.438 178.853 127.044 183.134L60 248.459V292.305Z"
              fill="white"
            />
          </svg>

          <Accordion type="single" collapsible className="flex-1 space-y-6">
            {faqs.map((q, i) => (
              <AccordionItem key={i} value={q} className="border-0">
                <AccordionTrigger className="bg-[#D9D9D9] rounded-[13px] pl-4 pr-2 py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent>
                  Placeholder answer for &ldquo;{q}&rdquo;. Detailed info to be
                  added.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
