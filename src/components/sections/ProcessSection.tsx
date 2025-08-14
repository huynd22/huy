import { cn } from "@/lib/utils";
import img1 from "@/public/images/process/1.png";
import img2 from "@/public/images/process/2.png";
import img3 from "@/public/images/process/3.png";
import img4 from "@/public/images/process/4.png";
import Image from "next/image";
const steps = [
  {
    title: "Obtain customer information",
    desc: "Our staff will ask about your account requirements, including the products you want to promote, the currency and time zone, and more.",
    image: img1,
  },
  {
    title: "Provide account",
    desc: "Provide for customer some innitial materials such as vps/adspower/gologin (clean proxy), strong profile, strong fanpage, strong account.",
    image: img2,
  },
  {
    title: "Run free test",
    desc: "Customer have time for free testing account.",
    image: img3,
  },
  {
    title: "Payment",
    desc: "After the test is successful and the customer wants to spend more, they top up their account with us. ",
    image: img4,
  },
];
export function ProcessSection() {
  return (
    <section className="py-30 hero-gradient" id="process">
      <div className="container mx-auto">
        <h5 className="text-center w-fit mx-auto px-6 py-3 text-base text-white flex items-center gap-3.5 bg-accent rounded-full font-semibold mb-6 uppercase tracking-wide shadow-lg">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 30C17.0696 30 18.7483 28.3213 18.7483 26.25H11.2518C11.2518 28.3213 12.9305 30 15 30ZM27.6205 21.2279C26.4885 20.0115 24.3704 18.1816 24.3704 12.1875C24.3704 7.63477 21.1782 3.99023 16.8739 3.09609V1.875C16.8739 0.839648 16.0348 0 15 0C13.9653 0 13.1262 0.839648 13.1262 1.875V3.09609C8.82192 3.99023 5.62973 7.63477 5.62973 12.1875C5.62973 18.1816 3.51156 20.0115 2.37953 21.2279C2.02797 21.6059 1.87211 22.0576 1.87504 22.5C1.88149 23.4609 2.63559 24.375 3.7559 24.375H26.2442C27.3645 24.375 28.1192 23.4609 28.125 22.5C28.128 22.0576 27.9721 21.6053 27.6205 21.2279Z"
              fill="currentColor"
            />
          </svg>
          Working Process
        </h5>
        <p className="text-2xl md:text-3xl text-white text-center mb-12 font-bold">
          WE COMPLETE OUR WORK TO FOLLOW SOME EASY WAY
        </p>
        <div className="flex flex-col gap-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={cn(
                "flex gap-10 items-end",
                i % 2 === 0 ? "" : "self-end flex-row-reverse"
              )}
            >
              <div
                className={cn(
                  "flex-1 max-w-4xl flex flex-col mb-12 md:flex-row items-center gap-8 card-gradient p-8 px-12 rounded-2xl shadow-xl"
                )}
              >
                <div className="flex-1 text-left">
                  <div className="font-semibold rounded-xl border-2 border-primary bg-primary/10 w-fit px-4 py-2 mb-3 text-primary">
                    Step {i + 1}
                  </div>
                  <div className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </div>
                  <div className="text-base font-lao-man text-muted-foreground leading-relaxed">
                    {step.desc}
                  </div>
                </div>
                <Image
                  src={step.image}
                  alt={step.title}
                  className="w-48 h-auto"
                />
              </div>
              {i === 3 ? null : i % 2 === 1 ? (
                <svg
                  width="204"
                  height="204"
                  viewBox="0 0 204 204"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="opacity-30"
                >
                  <rect
                    y="100.221"
                    width="143.808"
                    height="143.808"
                    transform="rotate(-44.1795 0 100.221)"
                    fill="url(#pattern0_2030_77)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_2030_77"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_2030_77"
                        transform="scale(0.00555556)"
                      />
                    </pattern>
                    <image
                      id="image0_2030_77"
                      width="180"
                      height="180"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              ) : (
                <svg
                  width="143"
                  height="143"
                  viewBox="0 0 143 143"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="opacity-30"
                >
                  <rect
                    width="115.656"
                    height="115.656"
                    transform="matrix(-0.259435 -0.96576 -0.96576 0.259435 142.395 112.53)"
                    fill="url(#pattern0_2030_78)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_2030_78"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_2030_78"
                        transform="scale(0.00555556)"
                      />
                    </pattern>
                    <image
                      id="image0_2030_78"
                      width="180"
                      height="180"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
