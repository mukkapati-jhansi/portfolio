"use client";

import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#050505] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
          <p className="text-[11px] font-medium tracking-[0.25em] text-white/40">
            06 — CONTACT
          </p>

          <span className="hidden text-xs tracking-[0.2em] text-white/30 md:block">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-end">

          {/* Main heading */}
          <div>
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-8xl">
              <span className="block">LET&apos;S BUILD</span>
              <span className="block">SOMETHING</span>
              <span className="block text-white/45">INTERESTING.</span>
            </h2>

            {/* CTA */}
            <a
              href="mailto:mukkapatijhansi2004@gmail.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full !bg-white px-6 py-3 text-xs font-semibold tracking-[0.14em] !text-black transition-transform duration-300 hover:scale-105"
            >
              <span className="!text-black">
                START A CONVERSATION
              </span>

              <ArrowUpRight
                size={15}
                className="!text-black"
              />
            </a>
          </div>

          {/* Contact details */}
          <div className="md:pl-10">

            <p className="mb-8 text-[11px] tracking-[0.22em] text-white/35">
              GET IN TOUCH
            </p>

            {/* Email */}
            <a
              href="mailto:mukkapatijhansi2004@gmail.com"
              className="group flex items-center justify-between border-b border-white/10 py-5"
            >
              <div className="flex items-center gap-4">
                <Mail
                  size={17}
                  className="text-white/40"
                />

                <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                  mukkapatijhansi2004@gmail.com
                </span>
              </div>

              <ArrowUpRight
                size={16}
                className="text-white/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/10 py-5"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-[17px] w-[17px] items-center justify-center text-[11px] font-bold text-white/40">
                  in
                </span>

                <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                  LinkedIn
                </span>
              </div>

              <ArrowUpRight
                size={16}
                className="text-white/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mukkapati-jhansi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/10 py-5"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-[17px] w-[17px] items-center justify-center text-[10px] font-bold text-white/40">
                  GH
                </span>

                <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                  GitHub
                </span>
              </div>

              <ArrowUpRight
                size={16}
                className="text-white/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] tracking-[0.18em] text-white/30 sm:flex-row">
          <span>AVAILABLE FOR OPPORTUNITIES</span>
          <span>© 2026 JHANSI</span>
        </div>

      </div>
    </section>
  );
}