"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export function Header() {
  return (
    <header className="fixed top-0 z-50 inset-x-0 w-full bg-[#484343] text-white px-4 sm:px-16 py-5 flex items-center justify-between">
      <div className="flex items-center gap-2 grow-2">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-[64px] h-auto" />
          <span className="tracking-tight text-xl">Golden Agency</span>
        </div>
      </div>
      <nav className="hidden sm:flex gap-10 text-lg grow-6 sm:justify-center">
        <a href="#home" className="hover:text-primary transition-colors">
          Home Page
        </a>
        <a href="#about" className="hover:text-primary transition-colors">
          About Us
        </a>
        <a href="#process" className="hover:text-primary transition-colors">
          Process
        </a>
        <a href="#contact" className="hover:text-primary transition-colors">
          Contact Us
        </a>
      </nav>
      <div className="flex items-center gap-4 grow-2">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2012_727)">
            <path
              d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2012_727">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Button
          variant="default"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-[212px] text-lg h-[57px]"
        >
          Contact Us
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8917 10.5469H2.14844C1.82485 10.5469 1.5625 10.8092 1.5625 11.1328V13.8672C1.5625 14.1908 1.82485 14.4531 2.14844 14.4531H16.8917V16.7021C16.8917 17.7462 18.1539 18.269 18.8922 17.5308L23.0943 13.3287C23.552 12.871 23.552 12.129 23.0943 11.6714L18.8922 7.4693C18.154 6.73106 16.8917 7.25392 16.8917 8.29796V10.5469Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
}
