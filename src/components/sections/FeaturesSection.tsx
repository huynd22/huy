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
    <section className="py-16 section-gradient container mx-auto" id="features">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          WHY GOLDEN AGENCY?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-6 justify-center mb-4 px-2 md:px-0">
        {features.map((feat, i) => (
          <Card
            key={i}
            className="flex-1 p-8 card-gradient border-0 gap-6 rounded-2xl min-w-[180px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex justify-center items-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Image
                src={feat.image}
                alt={feat.title}
                className="filter brightness-0 invert w-8 h-8"
              />
            </div>
            <h3 className="text-foreground text-xl font-semibold leading-tight mb-3">
              {feat.title}
            </h3>
            <p className="text-muted-foreground text-base font-lao-man leading-relaxed">
              {feat.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
