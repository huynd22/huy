"use client";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 z-50 inset-x-0 w-full backdrop-blur-md bg-white/90 border-b border-border/50 px-4 sm:px-16 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2 grow-2">
        <div className="flex items-center gap-3">
          <span className="tracking-tight text-xl font-semibold text-foreground">
            Golden Agency
          </span>
        </div>
      </div>
      <nav className="hidden sm:flex gap-8 text-base grow-6 sm:justify-center">
        <a
          href="#home"
          className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
        >
          Home Page
        </a>
        <a
          href="#about"
          className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
        >
          About Us
        </a>
        <a
          href="#process"
          className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
        >
          Process
        </a>
        <a
          href="#contact"
          className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
        >
          Contact Us
        </a>
      </nav>
      <div className="flex items-center gap-4 grow-2">
        <div className="p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted-foreground"
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
          Contact Us
          <svg
            width="16"
            height="16"
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
