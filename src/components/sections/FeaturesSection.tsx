import { Card } from "@/components/ui/card";
import img1 from "@/public/images/why-golden-agency/img-1.svg";
import img2 from "@/public/images/why-golden-agency/img-2.svg";
import img3 from "@/public/images/why-golden-agency/img-3.svg";
import img4 from "@/public/images/why-golden-agency/img-4.svg";
import Image from "next/image";
const features = [
  {
    title: "Transparent and trustworthy services",
    desc: "Always put service quality as the top core",
    image: img1,
  },
  {
    title: "Conscientious",
    desc: "Always work based on customer benefits, thoroughly handle problems for customers, always put customers at the center",
    image: img2,
  },
  {
    title: "24/7",
    desc: "Timely support 24/7 regardless of holidays or weekends",
    image: img3,
  },
  {
    title: "Experienced and knowledgeable team",
    desc: "Staff with more than 6 years of experience in the advertising industry, enthusiastic and attentive when customers need",
    image: img4,
  },
];

export function FeaturesSection() {
  return (
    <section
      className="py-12 bg-white container mx-auto text-neutral-800"
      id="features"
    >
      <h2 className="text-center text-[30px] mb-8">WHY GOLDEN AGENCY ?</h2>
      <div className="flex w-full flex-col md:flex-row gap-8 justify-center mb-4 px-2 md:px-0">
        {features.map((feat, i) => (
          <Card
            key={i}
            className="flex-1 p-6 border-[3px] gap-4 rounded-[36px] border-[#F5F5F5] min-w-[180px]"
          >
            <div className="w-[56px] h-[56px] border border-primary bg-primary rounded-full flex justify-center items-center">
              <Image
                src={feat.image}
                alt={feat.title}
                className="filter brightness-0 invert"
              />
            </div>
            <p className="text-[#000000] text-lg h-11">{feat.title}</p>
            <div className="text-base text-[#000000] font-lao-man">
              {feat.desc}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
