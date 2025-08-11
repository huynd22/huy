import img2 from "@/public/images/about/img-2.png";
import img3 from "@/public/images/about/img-3.png";
import img4 from "@/public/images/about/img-4.png";
import img5 from "@/public/images/about/img-5.png";
import Image from "next/image";
export function AboutSection() {
  return (
    <section className="py-30 bg-white" id="about">
      <div className="container mx-auto">
        <div className="flex gap-6 items-stretch">
          <div className="flex relative justify-center w-[45%] gap-7">
            <div className="about-img1">
              <video
                src="/images/about/video-1.mp4"
                autoPlay
                muted
                loop
                className="h-full w-full object-cover"
              />
            </div>

            <div className="about-img2">
              <Image
                src={img2}
                alt="About"
                className="w-full h-[70%] object-cover"
              />
              <Image
                src={img3}
                alt="About"
                className="w-full h-1/4 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-16 flex-1">
            <div>
              <h4 className="text-[30px] mb-6 text-foreground font-bold">
                ABOUT US
              </h4>
              <p className="font-lao-man border-l-4 pl-4 border-primary text-[16px] text-muted-foreground">
                GOLDEN AGENCY was born in the context of the advertising
                industry growing strongly with thousands of competitions, with
                the desire to provide customers with an optimal solution for
                Facebook ads accounts at a reasonable price.{" "}
              </p>
            </div>
            <div>
              <div className="flex gap-3 mb-2 justify-between">
                <div className="flex gap-6 items-center">
                  <Image src={img4} alt="About" className="w-24 h-auto" />
                  <p className="text-[18px] text-foreground font-medium">
                    Service Quality
                  </p>
                </div>
                <div className="flex gap-6 items-center">
                  <Image src={img5} alt="About" className="w-24 h-auto" />
                  <p className="text-[18px] text-foreground font-medium">
                    Customer Benefit
                  </p>
                </div>
              </div>
              <p className="text-base font-lao-man border-2 mt-8 border-primary p-6 rounded-[9px] text-muted-foreground bg-primary/5">
                The above two factors are always put first at GOLDEN AGENCY.
                Account services are always guaranteed and processed promptly so
                that customers can use them with peace of mind.
                <br />
                <br />
                Beside provide Facebook Ads account rental service, customer
                also receive advice, support from GOLDEN team to optimize their
                advertising results.
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
