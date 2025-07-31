import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
export function ContactSection() {
  return (
    <section
      className="container mx-auto flex flex-col items-center py-24"
      id="contact"
    >
      <h6 className="text-[30px] mb-4 text-center">CONTACT TO WORK</h6>
      <div className="grid grid-cols-2 mt-4 w-full max-w-[750px] gap-4 mb-4">
        <div className="flex h-[155px] flex-col justify-center items-center border border-[#000000] rounded-[27px] w-full">
          <div className="text-lg">Whatsapp</div>
          <div className="text-base font-lao-man">+84 947376225</div>
        </div>
        <div className="flex h-[155px] flex-col justify-center items-center border border-[#000000] rounded-[27px] w-full">
          <div className="text-lg">Telegram</div>
          <Image
            src="/images/qr-code.png"
            alt="Telegram"
            width={45}
            height={45}
          />
        </div>
      </div>
      <div className="w-full mt-6 flex gap-[70px]">
        <form className="space-y-2 w-2/5 flex flex-col items-center">
          <p className="text-xl text-center">Contact Address</p>
          <p className="text-base font-lao-man py-3 text-center">
            119 Tran Duy Hung, Trung Hoa, Cau Giay, Ha Noi
          </p>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit" className="h-12 mt-4 mx-auto">
            Send Message
          </Button>
        </form>
        <div className="flex-1 rounded-[36px] flex items-center justify-center bg-[#D9D9D9]">
          <svg
            width="411"
            height="322"
            viewBox="0 0 411 322"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M372.469 321.994H38.5312C17.2508 321.994 0 303.974 0 281.744V40.2492C0 18.0199 17.2508 0 38.5312 0H372.469C393.749 0 411 18.0199 411 40.2492V281.744C411 303.974 393.749 321.994 372.469 321.994ZM89.9062 46.9574C65.0793 46.9574 44.9531 67.9809 44.9531 93.9148C44.9531 119.849 65.0793 140.872 89.9062 140.872C114.733 140.872 134.859 119.849 134.859 93.9148C134.859 67.9809 114.733 46.9574 89.9062 46.9574ZM51.375 268.328H359.625V174.413L289.374 101.03C285.612 97.1004 279.513 97.1004 275.75 101.03L166.969 214.662L122.405 168.112C118.643 164.182 112.544 164.182 108.782 168.112L51.375 228.079V268.328Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
