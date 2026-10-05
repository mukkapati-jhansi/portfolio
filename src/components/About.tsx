"use client";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#050505] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <p className="mb-4 text-[11px] font-medium tracking-[0.25em] text-white/40">
              02 — ABOUT
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              ABOUT ME.
            </h2>
          </div>

          <span className="hidden text-xs tracking-[0.2em] text-white/30 md:block">
            AI · SOFTWARE · DESIGN
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/40">
              COMPUTER SCIENCE
            </p>

            <p className="mt-6 text-2xl leading-relaxed tracking-[-0.02em] text-white/80 md:text-3xl">
              I build intelligent digital experiences where software,
              artificial intelligence and thoughtful design come together.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-6 text-[15px] leading-8 text-white/55">
            <p>
              I&apos;m Jhansi, a Computer Science graduate focused on
              AI-powered applications, software development and modern
              frontend experiences.
            </p>

            <p>
              My work spans machine learning, generative AI, full-stack
              development and data-driven applications. I enjoy turning
              complex ideas into products that are useful, intuitive and
              visually refined.
            </p>

            <p>
              I&apos;m particularly interested in building products that
              combine intelligent systems with strong user experiences.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-white/30">
                  FOCUS
                </p>
                <p className="mt-2 text-sm text-white/70">
                  AI / ML
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.18em] text-white/30">
                  DEVELOPMENT
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Full Stack
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.18em] text-white/30">
                  DESIGN
                </p>
                <p className="mt-2 text-sm text-white/70">
                  UI / UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}