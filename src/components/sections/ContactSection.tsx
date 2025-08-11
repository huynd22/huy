"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QRCodeComponent } from "@/components/ui/qr-code";

export function ContactSection() {
  return (
    <section
      className="container mx-auto flex flex-col items-center py-24"
      id="contact"
    >
      <h6 className="text-[30px] mb-4 text-center">CONTACT TO WORK</h6>
      <div className="grid grid-cols-2 mt-4 w-full max-w-[750px] gap-4 mb-4">
        <div className="flex h-[155px] flex-col justify-center items-center border-2 border-primary rounded-[27px] w-full">
          <div className="text-lg">Whatsapp</div>
          <div className="text-base font-lao-man">+84 947376225</div>
        </div>
        <div
          onClick={() => {
            window.open("https://t.me/golden_agc68", "_blank");
          }}
          className="flex cursor-pointer h-[155px] flex-col justify-center items-center border-2 border-primary rounded-[27px] w-full"
        >
          <div className="text-lg">Telegram</div>
          <QRCodeComponent
            value="https://t.me/golden_agc68"
            size={55}
            className="mt-2"
          />
        </div>
      </div>
      <div className="w-full mt-6 flex gap-[70px]">
        <form className="space-y-2 w-2/5 flex flex-col items-center border-2 border-primary rounded-[27px] p-8 bg-gradient-to-b from-white to-gray-50 shadow-lg">
          <p className="text-xl text-center font-semibold text-gray-800">
            Contact Address
          </p>
          <p className="text-base font-lao-man py-3 text-center text-gray-600">
            119 Tran Duy Hung, Trung Hoa, Cau Giay, Ha Noi
          </p>
          <Input
            placeholder="Your Name"
            className="border-gray-300 focus:border-primary focus:ring-primary/20"
          />
          <Input
            placeholder="Your Email"
            type="email"
            className="border-gray-300 focus:border-primary focus:ring-primary/20"
          />
          <Textarea
            placeholder="Your Message"
            className="border-gray-300 focus:border-primary focus:ring-primary/20 min-h-[120px]"
          />
          <Button
            type="submit"
            variant="default"
            className="h-12 mt-4 mx-auto bg-primary hover:bg-primary/90 text-white font-medium px-8 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Send Message
          </Button>
        </form>
        <div className="flex-1 rounded-[36px] flex items-center justify-center bg-[#D9D9D9] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6604552435147!2d105.7922447100799!3d21.00624368055666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca5e5f372d1%3A0xed40df3f4ad67d25!2zMTE5IMSQLiBUcuG6p24gRHV5IEjGsG5nLCBUcnVuZyBIb8OgLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1754127297604!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "36px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
