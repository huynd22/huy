"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/images/hero-image.png";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-[100px] text-white py-12 flex flex-col items-center justify-around text-center"
    >
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="flex items-end relative justify-between w-full max-w-[1100px]">
        <div className="pb-24">
          <h1 className="text-2xl text-left md:text-[55px] mb-3 leading-[100px]">
            FACEBOOK ADS
            <br />
            ACCOUNT RENTAL
            <br />
            SERVICE PROVIDER
          </h1>
          <p className="mb-5 text-lg text-left font-lao-man">
            We provide high-quality accounts – the key to pushing your <br />
            campaign beyond limits and delivering top performance
            <br />
          </p>
        </div>

        <div />

        {/* <Image src={heroImage} alt="Hero Image" className="w-[418px] h-auto" /> */}
      </div>
      <div className="w-full relative max-w-[1100px] gap-8 flex justify-start items-center">
        <Button
          variant="default"
          onClick={() => {
            const contactSection = document.getElementById("about");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-[212px] text-lg h-[57px]"
        >
          Get Start
          <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.37764 0.602817L7.12086 0.145294C7.43555 -0.0484314 7.94443 -0.0484314 8.25578 0.145294L14.764 4.14965C15.0787 4.34337 15.0787 4.65663 14.764 4.84829L8.25578 8.85471C7.94108 9.04843 7.43221 9.04843 7.12086 8.85471L6.37764 8.39718C6.05959 8.2014 6.06629 7.88196 6.39103 7.69029L10.4252 5.32436H0.803482C0.358219 5.32436 0 5.10385 0 4.82975V4.17025C0 3.89615 0.358219 3.67564 0.803482 3.67564H10.4252L6.39103 1.30971C6.06294 1.11804 6.05624 0.798603 6.37764 0.602817Z"
              fill="currentColor"
            />
          </svg>
        </Button>
        {/* Social proof row -- use placeholder icons */}
        <div className="flex gap-3 items-center">
          {new Array(3).fill(null).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-[56px] h-[56px] border border-[#000000] bg-[#D9D9D9] rounded-full flex justify-center items-center",
                index !== 0 && "-ml-6"
              )}
            >
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6562 18.875H2.34375C1.04932 18.875 0 17.8257 0 16.5312V2.46875C0 1.17432 1.04932 0.125 2.34375 0.125H22.6562C23.9507 0.125 25 1.17432 25 2.46875V16.5312C25 17.8257 23.9507 18.875 22.6562 18.875ZM5.46875 2.85938C3.95859 2.85938 2.73438 4.08359 2.73438 5.59375C2.73438 7.10391 3.95859 8.32812 5.46875 8.32812C6.97891 8.32812 8.20312 7.10391 8.20312 5.59375C8.20312 4.08359 6.97891 2.85938 5.46875 2.85938ZM3.125 15.75H21.875V10.2812L17.6018 6.00806C17.373 5.77925 17.002 5.77925 16.7731 6.00806L10.1562 12.625L7.44556 9.91431C7.21675 9.6855 6.84575 9.6855 6.61689 9.91431L3.125 13.4062V15.75Z"
                  fill="black"
                />
              </svg>
            </div>
          ))}
        </div>

        <span className="text-lg">20k+ worldwide customers</span>
      </div>
    </section>
  );
}
