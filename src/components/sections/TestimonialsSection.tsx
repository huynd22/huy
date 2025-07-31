import img1 from "@/public/images/testimonials/testimonail-bg.svg";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section
      className="pt-40 container mx-auto pb-12 bg-white"
      id="testimonials"
    >
      <h6 className="text-center text-[30px] mb-5">
        WHAT CUSTOMERS SAY ABOUT GOLDEN AGENCY ?
      </h6>
      <p className="text-center text-[16px] font-lao-man mb-12">
        Client reviews are the best reflection of Golden Agency&apos;s quality.
        We deeply appreciate all the feedbacks <br /> to take them as our
        motivation and constantly improve the quality of our services!
      </p>
      <div className="flex items-center">
        <div className="flex-1 flex gap-10">
          <div className="testimonial-inner relative flex-1">
            <Image src={img1} alt="testimonial-bg" className="w-full h-auto" />

            <a
              href="#"
              id="client1"
              className="client-data testi-img1 absolute top-0 left-0"
            >
              <img
                src="/images/testimonials/1.png"
                alt="testimonial-img"
                className="imgborder"
              />
            </a>

            <a
              href="#"
              id="client2"
              className="client-data testi-img2 absolute bottom-[10%] right-[6%]"
            >
              <img
                src="/images/testimonials/2.png"
                alt="testimonial-img"
                className="imgborder"
              />
            </a>

            <a
              href="#"
              id="client3"
              className="client-data testi-img3 absolute left-[40%] top-[22%]"
            >
              <img
                src="/images/testimonials/3.png"
                alt="testimonial-img"
                className="imgborder"
              />
            </a>

            <a
              href="#"
              id="client4"
              className="client-data absolute bottom-0 left-[17%] testi-img4 active"
            >
              <img
                src="/images/testimonials/4.png"
                alt="testimonial-img"
                className="imgborder"
              />
            </a>

            <a
              href="#"
              id="client5"
              className="client-data absolute right-[10px] top-[-23px] testi-img5"
            >
              <img
                src="/images/testimonials/5.png"
                alt="testimonial-img"
                className="imgborder"
              />
            </a>
          </div>

          <div className="flex-1">
            <div className="font-lao-man mt-6 text-[16px]">
              When I worked with another agency in the past, I ran into a lot of
              issues, like slow speed, lengthy response times, and frequently
              interrupted deposit systems, which had an impact on the
              advertising campaign. But everything changed drastically after
              relocating to GOLDEN AGENCY. Quick service, dependable account,
              committed assistance, and increased security when running
              advertisements.
            </div>
            <p className="text-lg text-[#000000] mt-6">
              Mike{" "}
              <span className="text-[#000000] font-lao-man text-base">
                {" "}
                - Producer
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
