import img1 from "@/public/images/about/img-1.png";
import img2 from "@/public/images/about/img-2.png";
import img3 from "@/public/images/about/img-3.png";
import Image from "next/image";
export function AboutSection() {
  return (
    <section className="py-30 container mx-auto" id="about">
      <div className="flex gap-6 items-stretch">
        <div className="flex justify-center w-[45%] gap-7">
          <Image src={img1} alt="About" className="flex-1 h-auto" />
          <div className="flex flex-col gap-6 flex-1">
            <Image src={img2} alt="About" className="w-full h-auto" />
            <Image src={img3} alt="About" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 flex-1">
          <div>
            <h4 className="text-[30px] mb-6">ABOUT US</h4>
            <p className="font-lao-man border-l-4 pl-4 border-primary text-[16px]">
              GOLDEN AGENCY was born in the context of the advertising industry
              growing strongly with thousands of competitions, with the desire
              to provide customers with an optimal solution for Facebook ads
              accounts at a reasonable price.{" "}
            </p>
          </div>
          <div>
            <div className="flex gap-3 mb-2 justify-between">
              <div className="flex gap-6 items-center">
                <div className="size-20 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    width="35"
                    height="37"
                    viewBox="0 0 35 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M0 0H21.7245L31.5 9.39464V16.8182H28V13.4545H17.5V3.36364H3.5V33.6364H31.5V37H0V0ZM21 4.05991V10.0909H27.2755L21 4.05991ZM8.75 18.5V31.9545H5.25V18.5H8.75ZM9.625 21.8636C9.625 20.9715 9.99375 20.116 10.6501 19.4852C11.3065 18.8544 12.1967 18.5 13.125 18.5H15.75V21.8636H13.125V28.5909H15.75V31.9545H13.125C12.1967 31.9545 11.3065 31.6002 10.6501 30.9694C9.99375 30.3386 9.625 29.483 9.625 28.5909V21.8636ZM16.625 21.8636C16.625 20.9715 16.9937 20.116 17.6501 19.4852C18.3065 18.8544 19.1967 18.5 20.125 18.5H21.875C22.8033 18.5 23.6935 18.8544 24.3499 19.4852C25.0062 20.116 25.375 20.9715 25.375 21.8636V28.5909C25.375 29.483 25.0062 30.3386 24.3499 30.9694C23.6935 31.6002 22.8033 31.9545 21.875 31.9545H20.125C19.1967 31.9545 18.3065 31.6002 17.6501 30.9694C16.9937 30.3386 16.625 29.483 16.625 28.5909V21.8636ZM26.25 18.5H31.5C32.4283 18.5 33.3185 18.8544 33.9749 19.4852C34.6313 20.116 35 20.9715 35 21.8636V31.9545H31.5V21.8636H29.75V31.9545H26.25V18.5ZM20.125 21.8636V28.5909H21.875V21.8636H20.125Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-[18px]">Service Quality</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="size-20 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    width="35"
                    height="37"
                    viewBox="0 0 35 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M0 0H21.7245L31.5 9.39464V16.8182H28V13.4545H17.5V3.36364H3.5V33.6364H31.5V37H0V0ZM21 4.05991V10.0909H27.2755L21 4.05991ZM8.75 18.5V31.9545H5.25V18.5H8.75ZM9.625 21.8636C9.625 20.9715 9.99375 20.116 10.6501 19.4852C11.3065 18.8544 12.1967 18.5 13.125 18.5H15.75V21.8636H13.125V28.5909H15.75V31.9545H13.125C12.1967 31.9545 11.3065 31.6002 10.6501 30.9694C9.99375 30.3386 9.625 29.483 9.625 28.5909V21.8636ZM16.625 21.8636C16.625 20.9715 16.9937 20.116 17.6501 19.4852C18.3065 18.8544 19.1967 18.5 20.125 18.5H21.875C22.8033 18.5 23.6935 18.8544 24.3499 19.4852C25.0062 20.116 25.375 20.9715 25.375 21.8636V28.5909C25.375 29.483 25.0062 30.3386 24.3499 30.9694C23.6935 31.6002 22.8033 31.9545 21.875 31.9545H20.125C19.1967 31.9545 18.3065 31.6002 17.6501 30.9694C16.9937 30.3386 16.625 29.483 16.625 28.5909V21.8636ZM26.25 18.5H31.5C32.4283 18.5 33.3185 18.8544 33.9749 19.4852C34.6313 20.116 35 20.9715 35 21.8636V31.9545H31.5V21.8636H29.75V31.9545H26.25V18.5ZM20.125 21.8636V28.5909H21.875V21.8636H20.125Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-[18px]">Customer Benefit</p>
              </div>
            </div>
            <p className="text-base font-lao-man border-2 mt-8 border-primary p-6 rounded-[9px]">
              The above two factors are always put first at GOLDEN AGENCY.
              Account services are always guaranteed and processed promptly so
              that customers can use them with peace of mind.
              <br />
              Beside provide Facebook Ads account rental service, customer also
              receive advice, support from GOLDEN team to optimize their
              advertising results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
