import img1 from "@/public/images/partners/img-1.png";
import img2 from "@/public/images/partners/img-2.png";
import img3 from "@/public/images/partners/img-3.png";
import img4 from "@/public/images/partners/img-4.png";
import img5 from "@/public/images/partners/img-5.webp";

import Image from "next/image";
const partners = [img1, img2, img3, img4, img5];

export function PartnersSection() {
  return (
    <section className="py-20 container mx-auto" id="partners">
      <h3 className="text-center text-[30px] mb-24">TRUSTED PARTNERS</h3>
      <div className="grid grid-cols-5 gap-12 flex-wrap">
        {partners.map((src, i) => (
          <div
            key={i}
            className="border-[3px] aspect-square border-[#F5F5F5] p-5 rounded-[36px] flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Partner ${i + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
