import { ArrowUpRight, Briefcase } from "lucide-react";

const imagePath = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

const experiences = [
  {
    number: "01",
    company: "Infosys Springboard",
    role: "Machine Learning Intern",
    period: "OCT 2024 — DEC 2024",
    location: "REMOTE",
    type: "MACHINE LEARNING / NLP",
    image: imagePath("infosys.png"),
    achievements: [
      "Worked on machine learning and NLP workflows.",
      "Developed and evaluated machine learning models for text classification.",
      "Applied preprocessing and deep learning techniques to real-world datasets.",
      "Achieved 92% classification accuracy on the project.",
    ],
  },

  {
    number: "02",
    company: "Prodigy Infotech",
    role: "Web Development Intern",
    period: "JUN 2024 — JUL 2024",
    location: "REMOTE",
    type: "WEB DEVELOPMENT",
    image: imagePath("prodigy-infotech.png"),
    achievements: [
      "Built responsive web applications using HTML, CSS and JavaScript.",
      "Implemented interactive frontend functionality.",
      "Worked on practical web development tasks and application interfaces.",
    ],
  },

  {
    number: "03",
    company: "Amdox Technologies",
    role: "Data Science & Analytics Intern",
    period: "MAR 2026 — APR 2026",
    location: "BENGALURU",
    type: "DATA SCIENCE / ANALYTICS",
    image: imagePath("amdox.png"),
    achievements: [
      "Worked with data analysis and data science workflows.",
      "Performed data preparation and analytical tasks.",
      "Applied analytical techniques to support practical business insights.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 pt-24 pb-12 text-white md:px-10 lg:pt-28 lg:pb-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* ============================================
            SECTION HEADER
        ============================================ */}

        <div className="border-t border-white/10 pt-5">

          <div className="flex items-center justify-between">

            <span className="text-[10px] tracking-[0.28em] text-white/40">
            05 — EXPERIENCE
            </span>
            <span className="text-[10px] tracking-[0.22em] text-white/25">
            PROFESSIONAL EXPERIENCE
            </span>

          </div>

        </div>

        {/* ============================================
            INTRO
        ============================================ */}

        <div className="mt-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <span className="text-[10px] tracking-[0.28em] text-white/35">
              PROFESSIONAL TIMELINE
            </span>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.06em]">

              WHERE I&apos;VE

              <br />

              <span className="text-white/30">
                WORKED.
              </span>

            </h2>

          </div>

          <p className="max-w-[500px] text-[13px] leading-7 text-white/40">
            A timeline of internships where I worked across
            machine learning, web development, data science,
            analytics, and practical AI workflows.
          </p>

        </div>

        {/* ============================================
            EXPERIENCE LIST
        ============================================ */}

        <div className="mt-16">

          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group relative min-h-0 border-t border-white/10 py-10 transition-colors duration-500 hover:border-white/25 lg:py-12"
            >

              {/* TOP META */}

              <div className="mb-8 flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <span className="text-[10px] tracking-[0.2em] text-white/30">
                    {experience.number}
                  </span>

                  <span className="h-px w-8 bg-white/15 transition-all duration-500 group-hover:w-12 group-hover:bg-white/40" />

                  <span className="text-[9px] tracking-[0.22em] text-white/40">
                    {experience.type}
                  </span>

                </div>

                <span className="text-[9px] tracking-[0.18em] text-white/30">
                  {experience.period}
                </span>

              </div>

              {/* ==========================================
                  55% EXPERIENCE / 45% CERTIFICATE
              ========================================== */}

              <div className="grid min-h-0 gap-10 lg:grid-cols-[55%_45%] lg:gap-0">

                {/* LEFT — EXPERIENCE */}

                <div className="min-h-0 pr-0 lg:pr-12">

                  <div className="flex items-start gap-5">

                    <div className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-white/30 transition-all duration-500 group-hover:border-white/30 group-hover:text-white sm:flex">

                      <Briefcase
                        size={16}
                        strokeWidth={1.3}
                      />

                    </div>

                    <div>

                      <h3 className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.06em] transition-transform duration-700 group-hover:translate-x-1">

                        {experience.company}

                      </h3>

                      <h4 className="mt-4 text-sm tracking-[0.08em] text-white/55">

                        {experience.role}

                      </h4>

                    </div>

                  </div>

                  {/* WORK */}

                  <div className="mt-10">

                    <div className="mb-6 flex items-center gap-4">

                      <span className="text-[9px] tracking-[0.22em] text-white/35">
                        WHAT I WORKED ON
                      </span>

                      <span className="h-px flex-1 bg-white/10" />

                    </div>

                    <ul className="space-y-4">

                      {experience.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="group/item flex items-start gap-4 text-[13px] leading-6 text-white/45 transition-colors duration-300 hover:text-white/80"
                          >

                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 border border-white/40 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-white" />

                            <span>
                              {achievement}
                            </span>

                          </li>
                        )
                      )}

                    </ul>

                  </div>

                  {/* LOCATION */}

                  <div className="mt-8 flex items-center gap-4">

                    <span className="text-[9px] tracking-[0.2em] text-white/25">
                      LOCATION
                    </span>

                    <span className="text-[10px] tracking-[0.12em] text-white/50">
                      {experience.location}
                    </span>

                  </div>

                </div>

                {/* RIGHT — CERTIFICATE */}

                <div className="min-h-0 lg:pl-8">

                  <div className="relative overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-700 group-hover:border-white/25">

                    <div className="relative aspect-[4/3] overflow-hidden">

                      <img
                        src={experience.image}
                        alt={`${experience.company} internship certificate`}
                        loading="lazy"
                        className="h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      />

                      {/* Highlight */}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/[0.06] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    </div>

                    {/* Certificate label */}

                    <div className="absolute bottom-4 left-4 border border-white/10 bg-black/75 px-3 py-2 backdrop-blur-md">

                      <span className="text-[8px] tracking-[0.18em] text-white/45">
                        CERTIFICATE / {experience.number}
                      </span>

                    </div>

                    {/* Arrow */}

                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/10 bg-black/70 text-white/35 backdrop-blur-md transition-all duration-500 group-hover:border-white/30 group-hover:text-white">

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.3}
                        className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />

                    </div>

                  </div>

                  {/* Caption */}

                  <div className="mt-3 flex items-center justify-between">

                    <span className="text-[8px] tracking-[0.18em] text-white/20">
                      SUPPORTING DOCUMENT
                    </span>

                    <span className="text-[8px] tracking-[0.18em] text-white/20">
                      {experience.number} / 03
                    </span>

                  </div>

                </div>

              </div>

              {/* Bottom line */}

              <div className="mt-10 h-px w-full origin-left scale-x-0 bg-white/25 transition-transform duration-700 group-hover:scale-x-100" />

            </article>
          ))}

        </div>

        {/* ============================================
            SMALL FOOTER
        ============================================ */}

      </div>
    </section>
  );
}