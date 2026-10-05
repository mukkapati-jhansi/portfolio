import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const imagePath = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pt-24 text-white md:px-10 lg:px-16"
    >
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* GIANT BACKGROUND NUMBER */}
      <div className="pointer-events-none absolute -right-10 top-[10%] select-none text-[18rem] font-medium leading-none tracking-[-0.12em] text-white/[0.018] md:text-[25rem] lg:text-[30rem]">
        01
      </div>

      <div className="relative mx-auto max-w-[1450px]">
        {/* TOP LINE */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[9px] tracking-[0.28em] text-white/40">
            01 — AI RESEARCH STUDIO
          </span>

          <span className="hidden text-[9px] tracking-[0.22em] text-white/25 md:block">
            AI / ML ENGINEER · 2026
          </span>
        </div>

        {/* MAIN AREA */}
        <div className="grid min-h-[690px] items-center gap-10 lg:grid-cols-[1fr_440px]">
          {/* LEFT SIDE */}
          <div className="relative z-10">
            <span className="mb-7 block text-[10px] tracking-[0.28em] text-white/35">
              BUILDING INTELLIGENT SYSTEMS
            </span>

            {/* NAME */}
            <h1 className="select-none">
              <span className="block text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.075em] text-white">
                MUKKAPATI
              </span>

              <span className="mt-3 block text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.075em] text-white/30 transition-colors duration-700 hover:text-white/45">
                JHANSI.
              </span>
            </h1>

            {/* DIVIDER */}
            <div className="mt-14 h-px w-full bg-white/10" />

            {/* DESCRIPTION */}
            <div className="mt-8">
              <p className="max-w-[620px] text-[13px] leading-7 text-white/45">
                I build intelligent systems that turn research,
                machine learning and generative AI into useful
                products.
              </p>

              {/* SKILL PILLS */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "RAG SYSTEMS",
                  "LLMs",
                  "AI AGENTS",
                  "MACHINE LEARNING",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 px-3 py-2 text-[8px] tracking-[0.14em] text-white/35 transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-3">
                {/* EXPLORE WORK */}
                <button
                  onClick={scrollToProjects}
                  className="group flex items-center gap-7 border border-white/15 px-5 py-4 text-[9px] tracking-[0.18em] text-white/65 transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
                >
                  <span>EXPLORE MY WORK</span>

                  <ArrowDownRight
                    size={15}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </button>

                {/* VIEW RESUME */}
                <a
                  href={`${import.meta.env.BASE_URL}Mukkapati%20Jhansi%20Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-7 border border-white/10 px-5 py-4 text-[9px] tracking-[0.18em] text-white/40 transition-all duration-500 hover:border-white/30 hover:text-white"
                >
                  <span>VIEW RÉSUMÉ</span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — CIRCULAR PROFILE */}
          <div
            className="relative flex h-[500px] items-center justify-center lg:h-[600px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* OUTER RING */}
            <div
              className={`absolute h-[410px] w-[410px] rounded-full border border-white/[0.08] transition-all duration-1000 ease-out md:h-[470px] md:w-[470px] ${
                isHovered
                  ? "scale-[1.12] rotate-[12deg] border-white/20"
                  : "animate-[spin_30s_linear_infinite]"
              }`}
            />

            {/* DASHED RING */}
            <div
              className={`absolute h-[350px] w-[350px] rounded-full border border-dashed border-white/[0.08] transition-all duration-700 md:h-[410px] md:w-[410px] ${
                isHovered
                  ? "scale-[1.18] border-white/20"
                  : "animate-[spinReverse_20s_linear_infinite]"
              }`}
            />

            {/* INNER RING */}
            <div
              className={`absolute h-[290px] w-[290px] rounded-full border border-white/[0.06] transition-all duration-700 md:h-[340px] md:w-[340px] ${
                isHovered
                  ? "scale-[1.22] border-white/15"
                  : ""
              }`}
            />

            {/* ORBIT DOT 1 */}
            <div
              className={`absolute right-[18%] top-[22%] h-2 w-2 rounded-full bg-white/50 transition-all duration-700 ${
                isHovered
                  ? "scale-[2] bg-white"
                  : "animate-pulse"
              }`}
            />

            {/* ORBIT DOT 2 */}
            <div
              className={`absolute bottom-[20%] left-[18%] h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-700 ${
                isHovered
                  ? "scale-[2.5] bg-white/80"
                  : "animate-pulse"
              }`}
            />

            {/* ORBIT DOT 3 */}
            <div className="absolute left-[25%] top-[18%] h-1 w-1 animate-pulse rounded-full bg-white/40" />

            {/* PROFILE IMAGE */}
            <div
              className={`relative z-10 h-[260px] w-[260px] overflow-hidden rounded-full border border-white/20 bg-[#0a0a0a] shadow-2xl transition-all duration-700 ease-out md:h-[320px] md:w-[320px] ${
                isHovered
                  ? "scale-[1.08] -translate-y-3 border-white/50 shadow-[0_0_80px_rgba(255,255,255,0.12)]"
                  : "animate-[float_5s_ease-in-out_infinite]"
              }`}
            >
              <img
                src={imagePath("profile.png")}
                alt="Mukkapati Jhansi"
                className={`h-full w-full object-cover object-center transition-transform duration-1000 ${
                  isHovered ? "scale-[1.08]" : "scale-[1.02]"
                }`}
              />

              {/* IMAGE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-white/[0.04]" />

              {/* SCANNING LINE */}
              <div
                className={`pointer-events-none absolute left-0 right-0 h-px bg-white/40 transition-opacity duration-500 ${
                  isHovered
                    ? "animate-[scan_2.5s_linear_infinite] opacity-100"
                    : "opacity-0"
                }`}
              />
            </div>

            {/* PROFILE LABEL + NAME */}
<div className="absolute bottom-[5%] left-1/2 z-20 -translate-x-1/2 text-center">
  <div
    className={`mb-3 transition-all duration-700 ${
      isHovered ? "-translate-y-1" : ""
    }`}
  >
    <h2 className="whitespace-nowrap text-[15px] font-medium tracking-[0.18em] text-white md:text-[18px]">
      MUKKAPATI JHANSI
    </h2>
  </div>

  <div
    className={`mx-auto w-fit border border-white/15 bg-black/80 px-4 py-2 backdrop-blur-md transition-all duration-700 ${
      isHovered
        ? "border-white/40"
        : ""
    }`}
  >
    <span className="whitespace-nowrap text-[8px] tracking-[0.2em] text-white/60">
      AI / ML ENGINEER · 2026
    </span>
  </div>
</div>

            {/* INTERACTION HINT */}
            <span
              className={`absolute right-[4%] top-[16%] text-[8px] tracking-[0.18em] transition-all duration-500 ${
                isHovered ? "text-white/60" : "text-white/20"
              }`}
            >
              {isHovered ? "INTERACTING" : "MOVE OVER"}
            </span>

            {/* TECHNICAL LABELS */}
            <span
              className={`absolute left-[3%] top-[30%] text-[7px] tracking-[0.2em] text-white/20 transition-all duration-700 ${
                isHovered
                  ? "translate-x-[-6px] text-white/50"
                  : ""
              }`}
            >
              RAG
            </span>

            <span
              className={`absolute right-[1%] bottom-[32%] text-[7px] tracking-[0.2em] text-white/20 transition-all duration-700 ${
                isHovered
                  ? "translate-x-[6px] text-white/50"
                  : ""
              }`}
            >
              LLM
            </span>

            <span
              className={`absolute bottom-[13%] left-[15%] text-[7px] tracking-[0.2em] text-white/20 transition-all duration-700 ${
                isHovered
                  ? "translate-y-[5px] text-white/50"
                  : ""
              }`}
            >
              ML
            </span>
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="border-t border-white/10">
          <div className="grid md:grid-cols-3">
            {/* CURRENT FOCUS */}
            <div className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:pr-8">
              <span className="block text-[8px] tracking-[0.22em] text-white/25">
                CURRENT FOCUS
              </span>

              <strong className="mt-3 block text-[11px] font-normal text-white/55">
                Generative AI · RAG · AI Workflows
              </strong>
            </div>

            {/* ACADEMIC */}
            <div className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:px-8">
              <span className="block text-[8px] tracking-[0.22em] text-white/25">
                ACADEMIC
              </span>

              <strong className="mt-3 block text-[11px] font-normal text-white/55">
                B.Tech CSE · CGPA 9.05
              </strong>
            </div>

            {/* LOCATION */}
            <div className="py-6 md:pl-8">
              <span className="block text-[8px] tracking-[0.22em] text-white/25">
                LOCATION
              </span>

              <strong className="mt-3 block text-[11px] font-normal text-white/55">
                India · Open to Opportunities
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes scan {
          0% {
            top: 0%;
          }

          50% {
            top: 100%;
          }

          100% {
            top: 0%;
          }
        }
      `}</style>
    </section>
  );
}