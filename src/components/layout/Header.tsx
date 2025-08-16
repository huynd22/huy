"use client";
import { Button } from "@/components/ui/button";
import logo from "@/public/images/logo.jpg";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 z-50 inset-x-0 w-full backdrop-blur-xl bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 border-b border-gradient-to-r from-transparent via-gray-600/30 to-transparent px-4 sm:px-16 py-5 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-2 grow-2">
        <div className="flex items-center gap-4 group">
          <div className="relative overflow-hidden rounded-xl ring-2 ring-yellow-400/20 group-hover:ring-yellow-400/40 transition-all duration-300">
            <Image
              src={logo}
              alt="logo"
              className="w-16 h-auto transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative">
            <span className="tracking-tight text-xl font-bold text-transparent bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text drop-shadow-sm">
              Golden Agency
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>
        </div>
      </div>
      <nav className="hidden sm:flex gap-10 text-base grow-6 sm:justify-center">
        <a
          href="#home"
          className="relative text-gray-200 hover:text-white transition-all duration-300 font-medium group py-2"
        >
          <span className="relative z-10">Home Page</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -mx-3"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></div>
        </a>
        <a
          href="#about"
          className="relative text-gray-200 hover:text-white transition-all duration-300 font-medium group py-2"
        >
          <span className="relative z-10">About Us</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -mx-3"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></div>
        </a>
        <a
          href="#process"
          className="relative text-gray-200 hover:text-white transition-all duration-300 font-medium group py-2"
        >
          <span className="relative z-10">Process</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -mx-3"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></div>
        </a>
        <a
          href="#contact"
          className="relative text-gray-200 hover:text-white transition-all duration-300 font-medium group py-2"
        >
          <span className="relative z-10">Contact Us</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -mx-3"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></div>
        </a>
      </nav>
      <div className="flex items-center gap-4 grow-2">
        <div className="relative p-3 hover:bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl transition-all duration-300 cursor-pointer group border border-gray-700/30 hover:border-gray-600/50">
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-300 group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-110"
          >
            <g clip-path="url(#clip0_2012_727)">
              <path
                d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_2012_727">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <Button
          variant="default"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 h-11 text-base font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          <span className="relative z-10 flex items-center gap-2">
            Contact Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M16.8917 10.5469H2.14844C1.82485 10.5469 1.5625 10.8092 1.5625 11.1328V13.8672C1.5625 14.1908 1.82485 14.4531 2.14844 14.4531H16.8917V16.7021C16.8917 17.7462 18.1539 18.269 18.8922 17.5308L23.0943 13.3287C23.552 12.871 23.552 12.129 23.0943 11.6714L18.8922 7.4693C18.154 6.73106 16.8917 7.25392 16.8917 8.29796V10.5469Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
        </Button>
      </div>
    </header>
  );
}
