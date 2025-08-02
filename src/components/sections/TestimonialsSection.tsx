"use client";

import img1 from "@/public/images/testimonials/testimonail-bg.svg";
import Image from "next/image";
import { useState } from "react";

// Testimonials data array
const testimonialsData = [
  {
    id: "client1",
    name: "Mr C",
    position: "Account executive",
    content:
      "The account quality here is really good, the account rarely has problems. If there is any problem, the staff immediately solves it for me, I am very satisfied.",
    image: "/images/testimonials/1.png",
    className: "client-data testi-img1 absolute top-0 left-0",
  },
  {
    id: "client2",
    name: "Mike",
    position: "Producer",
    content:
      "When I worked with another agency in the past, I ran into a lot of issues, like slow speed, lengthy response times, and frequently interrupted deposit systems, which had an impact on the advertising campaign. But everything changed drastically after relocating to GOLDEN AGENCY. Quick service, dependable account, committed assistance, and increased security when running advertisements.",
    image: "/images/testimonials/2.png",
    className: "client-data testi-img2 absolute bottom-[10%] right-[6%]",
  },
  {
    id: "client3",
    name: "Matthew",
    position: "Designer",
    content:
      "I had to look for a source of advertising account leasing services for a very long time before I could use GOLDEN AGENCY's services. It really surprised me how good these advertising accounts were. For my business, the unlimited budget is effective. The account almost never expires, no matter how many campaigns I run.",
    image: "/images/testimonials/3.png",
    className: "client-data testi-img3 absolute left-[40%] top-[22%]",
  },
  {
    id: "client4",
    name: "Jane",
    position: "Project manager",
    content:
      "Because the ads weren't accepted, I had a lot of problems and sometimes went crazy. One day, after receiving GOLDEN AGENCY's message, I contacted the administrator. Luckily, when I used your account, my advertising worked perfectly. Sometimes there were problems, but they were all quickly resolved. The fact that my company's profits increased that month as a result is something I consider a miracle.",
    image: "/images/testimonials/4.png",
    className: "client-data absolute bottom-0 left-[17%] testi-img4",
  },
  {
    id: "client5",
    name: "Frank",
    position: "Coder",
    content:
      "I have been with Golden for 2 years now. I had a hard time finding a unit that could support me with both resources and advice. Starting out as a beginner in learning how to run ads, Golden's team has helped me a lot.",
    image: "/images/testimonials/5.png",
    className: "client-data absolute right-[10px] top-[-23px] testi-img5",
  },
];

export function TestimonialsSection() {
  // Set default active testimonial to client4 (Mike - Producer) as it was originally active
  const [activeTestimonial, setActiveTestimonial] = useState(
    testimonialsData[1]
  );

  const handleTestimonialClick = (
    testimonial: (typeof testimonialsData)[0]
  ) => {
    setActiveTestimonial(testimonial);
  };

  return (
    <section className="pt-40 pb-12 bg-white" id="testimonials">
      <div className="container mx-auto">
        <h6 className="text-center text-[30px] mb-5">
          WHAT CUSTOMERS SAY ABOUT GOLDEN AGENCY ?
        </h6>
        <p className="text-center text-[16px] font-lao-man mb-12">
          Client reviews are the best reflection of Golden Agency&apos;s
          quality. We deeply appreciate all the feedbacks <br /> to take them as
          our motivation and constantly improve the quality of our services!
        </p>
        <div className="flex items-center">
          <div className="flex-1 flex gap-10">
            <div className="testimonial-inner relative flex-1">
              <Image
                src={img1}
                alt="testimonial-bg"
                className="w-full h-auto"
              />

              {testimonialsData.map((testimonial) => (
                <button
                  key={testimonial.id}
                  onClick={() => handleTestimonialClick(testimonial)}
                  className={`${testimonial.className} ${
                    activeTestimonial.id === testimonial.id ? "active" : ""
                  } hover:scale-110 transition-transform duration-200 cursor-pointer`}
                >
                  <img
                    src={testimonial.image}
                    alt="testimonial-img"
                    className="imgborder"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1">
              <svg
                width="66"
                height="75"
                viewBox="0 0 66 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M59.8125 37.1207H49.5V26.5148C49.5 20.665 53.1996 15.9089 57.75 15.9089H58.7812C60.4957 15.9089 61.875 14.1357 61.875 11.9317V3.97722C61.875 1.77318 60.4957 0 58.7812 0H57.75C46.3547 0 37.125 11.8654 37.125 26.5148V66.287C37.125 70.6786 39.8965 74.2415 43.3125 74.2415H59.8125C63.2285 74.2415 66 70.6786 66 66.287V45.0752C66 40.6837 63.2285 37.1207 59.8125 37.1207ZM22.6875 37.1207H12.375V26.5148C12.375 20.665 16.0746 15.9089 20.625 15.9089H21.6562C23.3707 15.9089 24.75 14.1357 24.75 11.9317V3.97722C24.75 1.77318 23.3707 0 21.6562 0H20.625C9.22969 0 0 11.8654 0 26.5148V66.287C0 70.6786 2.77148 74.2415 6.1875 74.2415H22.6875C26.1035 74.2415 28.875 70.6786 28.875 66.287V45.0752C28.875 40.6837 26.1035 37.1207 22.6875 37.1207Z"
                  fill="black"
                />
              </svg>

              <div className="font-lao-man mt-6 text-[16px]">
                {activeTestimonial.content}
              </div>
              <p className="text-lg text-[#000000] mt-6">
                {activeTestimonial.name}{" "}
                <span className="text-[#000000] font-lao-man text-base">
                  {" "}
                  - {activeTestimonial.position}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
