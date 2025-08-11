"use client";
import img1 from "@/public/images/partners/img-1.png";
import img2 from "@/public/images/partners/img-2.png";
import img3 from "@/public/images/partners/img-3.png";
import img4 from "@/public/images/partners/img-4.png";
import img5 from "@/public/images/partners/img-5.webp";
import img6 from "@/public/images/partners/img-6.png";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  { img: img1, name: "w-full" },
  { img: img2, name: "w-full" },
  { img: img3, name: "w-[94%]" },
  { img: img4, name: "w-3/5" },
  { img: img5, name: "w-full" },
  { img: img6, name: "w-full" },
];

export function PartnersSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-20 container mx-auto" id="partners">
      <h3 className="text-center text-[30px] mb-24">TRUSTED PARTNERS</h3>
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="border-[2px] aspect-square border-gray-200 p-5 rounded-[36px] flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={partner.img}
                    alt={`Partner ${index + 1}`}
                    className={`${partner.name} h-auto`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>

        {/* Dot indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: partners.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === current
                  ? "bg-gray-800 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
