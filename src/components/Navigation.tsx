import {
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { useState } from "react";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({
  activeSection,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "WORK" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/85 px-6 text-white backdrop-blur-xl md:px-10">

        <div className="mx-auto flex h-16 max-w-[1450px] items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-[10px] font-medium tracking-[0.2em] text-white transition-opacity hover:opacity-60"
          >
            MUKKAPATI JHANSI.
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-[8px] tracking-[0.18em] transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/35 hover:text-white"
                }`}
              >
                {item.label}

                {activeSection === item.id && (
                  <span className="absolute -bottom-6 left-0 h-px w-full bg-white" />
                )}
              </button>
            ))}

          </div>

          {/* Social */}
          <div className="hidden items-center gap-4 sm:flex">

            <a
              href="https://github.com/Jhansi1441"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-colors hover:text-white"
            >
              <Github size={15} strokeWidth={1.4} />
            </a>

            <a
              href="https://linkedin.com/in/mukkapatijhansi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-colors hover:text-white"
            >
              <Linkedin size={15} strokeWidth={1.4} />
            </a>

            <a
              href="mailto:mukkapati.jhansi2004@gmail.com"
              className="text-white/30 transition-colors hover:text-white"
            >
              <Mail size={15} strokeWidth={1.4} />
            </a>

          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/60 transition-colors hover:text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] pt-24 text-white lg:hidden">

          <div className="px-6">

            <span className="text-[9px] tracking-[0.25em] text-white/25">
              NAVIGATION
            </span>

            <div className="mt-8">

              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex w-full items-center justify-between border-t border-white/10 py-5 text-left"
                >
                  <span
                    className={`text-2xl tracking-[-0.03em] ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-white/45"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span className="text-[8px] tracking-[0.15em] text-white/20">
                    0{index + 1}
                  </span>
                </button>
              ))}

            </div>

            <div className="mt-10 flex gap-5 border-t border-white/10 pt-6">

              <a
                href="https://github.com/Jhansi1441"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white"
              >
                <Github size={17} />
              </a>

              <a
                href="https://linkedin.com/in/mukkapatijhansi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="mailto:mukkapati.jhansi2004@gmail.com"
                className="text-white/40 hover:text-white"
              >
                <Mail size={17} />
              </a>

              <a
                href="tel:+919052979551"
                className="text-white/40 hover:text-white"
              >
                <Phone size={17} />
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}