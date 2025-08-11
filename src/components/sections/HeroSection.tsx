"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import img1 from "@/public/images/hero/4.png";
import img2 from "@/public/images/hero/5.png";
import img3 from "@/public/images/hero/6.png";
import Image from "next/image";

const images = [img1, img2, img3];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-[100px] text-white py-12 flex flex-col items-center justify-around text-center hero-gradient"
    >
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="flex items-end pt-48 relative justify-between w-full max-w-[1100px] z-10">
        <div className="pb-24">
          <h1 className="text-2xl text-left md:text-[55px] mb-6 leading-[1.1] font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            FACEBOOK <br />
            <span className="text-accent">ADS ACCOUNT</span>
            <br />
            RENTAL SERVICE PROVIDER
          </h1>
          <p className="mb-8 text-lg text-left font-lao-man text-blue-100 max-w-2xl leading-relaxed">
            We provide high-quality accounts – the key to pushing your <br />
            campaign beyond limits and delivering top performance
            <br />
          </p>
        </div>

        <div />

        {/* <Image src={heroImage} alt="Hero Image" className="w-[418px] h-auto" /> */}
      </div>
      <div className="w-full relative max-w-[1100px] gap-8 flex justify-start items-center z-10">
        <Button
          variant="default"
          onClick={() => {
            const contactSection = document.getElementById("about");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 h-14 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Get Started
          <svg
            width="18"
            height="12"
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
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "w-[56px] h-[56px] border-2 border-white/20 bg-white/10 backdrop-blur-sm rounded-full flex justify-center items-center shadow-lg",
                index !== 0 && "-ml-6"
              )}
            >
              <Image
                src={image}
                alt="Social Proof"
                className="w-full h-full rounded-full"
              />
            </div>
          ))}
          <span
            className={cn(
              "w-[56px] h-[56px] border-2 border-white/20 bg-primary/70 backdrop-blur-sm rounded-full flex justify-center items-center shadow-lg",
              "-ml-6"
            )}
          >
            20k+
          </span>
        </div>
      </div>
    </section>
  );
}
