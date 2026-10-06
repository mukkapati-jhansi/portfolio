import { ArrowUpRight, ImageOff } from "lucide-react";

const imagePath = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

const projects = [
  {
    number: "01",
    category: "AI / RAG",
    title: "PaperLens",
    year: "2026",
    description:
      "A citation-grounded RAG research assistant that lets users upload research papers and ask questions about their content with page-level citations.",
    image: imagePath("paperlens.png"),
    technologies: [
      "PYTHON",
      "FASTAPI",
      "FAISS",
      "QWEN 3",
      "OLLAMA",
    ],
    github: "https://github.com/mukkapati-jhansi/PaperLens",
    featured: true,
  },

  {
    number: "02",
    category: "AI / FULL STACK",
    title: "AI CSV → CRM",
    year: "2026",
    description:
      "An AI-powered workflow that transforms raw CSV files into structured CRM records using intelligent field extraction, validation, preview, search, and export.",
    image: imagePath("ai-csv.png"),
    technologies: [
      "NEXT.JS",
      "TYPESCRIPT",
      "EXPRESS.JS",
      "GEMINI 2.5 FLASH",
    ],
    github:
      "https://github.com/mukkapati-jhansi/Groweasy-AI-CSV-Importer",
    live: "https://groweasy-ai-csv-importer-gamma.vercel.app/",
  },

  {
    number: "03",
    category: "AI / HEALTHCARE",
    title: "Health Prediction",
    year: "2026",
    description:
      "A Flask-based patient management system with AI-generated health remarks, patient records, validation, search, and CSV data management.",
    image: imagePath("health-prediction.png"),
    technologies: [
      "PYTHON",
      "FLASK",
      "SQLALCHEMY",
      "SQLITE",
      "GEMINI AI",
    ],
    github:
      "https://github.com/mukkapati-jhansi/Health-Prediction-System",
  },

  {
    number: "04",
    category: "MACHINE LEARNING / NLP",
    title: "Fake News Detection",
    year: "2024",
    description:
      "A deep learning system for detecting fake news using NLP preprocessing and recurrent neural network architectures.",
    image: imagePath("fake-news.png"),
    technologies: [
      "PYTHON",
      "TENSORFLOW",
      "RNN",
      "LSTM",
      "BiLSTM",
      "NLP",
    ],
    github:
      "https://github.com/mukkapati-jhansi/Fake-News-Classifier.git",
    result: "92% CLASSIFICATION ACCURACY",
  },

  {
    number: "05",
    category: "WEB / DATABASE",
    title: "Online Book Store",
    year: "2024",
    description:
      "A Django-based online bookstore management system for handling books, users, and store operations through a structured web application.",
    image: imagePath("bookstore.png"),
    technologies: [
      "PYTHON",
      "DJANGO",
      "MYSQL",
      "HTML",
      "CSS",
    ],
    github:
      "https://github.com/mukkapati-jhansi/Online-Book-Store",
  },

  {
    number: "06",
    category: "WEB DEVELOPMENT",
    title: "Weather Report",
    year: "2024",
    description:
      "A responsive weather application that presents weather information through a clean and interactive web interface.",
    image: imagePath("weather.png"),
    technologies: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "WEATHER API",
    ],
    github:
      "https://github.com/Jhansi1441/PRODIGY_WD_05.git",
  },

  {
    number: "07",
    category: "WEB DEVELOPMENT",
    title: "Tic Tac Toe",
    year: "2024",
    description:
      "An interactive browser-based Tic Tac Toe game built with a simple responsive interface and JavaScript game logic.",
    image: imagePath("tictactoe.png"),
    technologies: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
    ],
    github:
      "https://github.com/Jhansi1441/PRODIGY_WD_03.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white md:px-10 lg:py-36"
    >
      {/* Background grid */}
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

      <div className="relative mx-auto max-w-[1340px]">

        {/* Header */}
        <div className="border-t border-white/10 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-[0.28em] text-white/40">
              03 — SELECTED WORK
            </span>

            <span className="text-[10px] tracking-[0.22em] text-white/25">
              2024 — 2026
            </span>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-16 max-w-[760px]">
          <span className="text-[10px] tracking-[0.28em] text-white/35">
            AI · SOFTWARE · RESEARCH
          </span>

          <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.06em]">
            PROJECTS
            <br />
            <span className="text-white/30">
              THAT MATTER.
            </span>
          </h2>

          <p className="mt-8 max-w-[600px] text-[14px] leading-7 text-white/40">
            A selection of AI, machine learning, and software projects
            focused on turning technical ideas into practical systems.
          </p>
        </div>

        {/* Project list */}
        <div className="mt-20 space-y-8">

          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card group border border-white/10 bg-white/[0.015] p-5 transition-all duration-700 hover:border-white/25 md:p-7 lg:p-8 ${
                project.featured ? "lg:p-10" : ""
              }`}
            >

              {/* Project header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.2em] text-white/30">
                    {project.number}
                  </span>

                  <span className="h-px w-8 bg-white/15" />

                  <span className="text-[10px] tracking-[0.2em] text-white/40">
                    {project.category}
                  </span>
                </div>

                <span className="text-[9px] tracking-[0.2em] text-white/20">
                  {project.year}
                </span>
              </div>

              {/* Main content */}
              <div
                className={`grid items-center gap-10 ${
                  project.featured
                    ? "lg:grid-cols-[0.72fr_1.28fr]"
                    : "lg:grid-cols-[0.75fr_1.25fr]"
                }`}
              >

                {/* Text */}
                <div className="flex h-full flex-col justify-between">

                  <div>
                    <h3
                      className={`font-medium leading-[0.9] tracking-[-0.055em] ${
                        project.featured
                          ? "text-[clamp(2.8rem,5vw,5.5rem)]"
                          : "text-[clamp(2.2rem,4vw,4.5rem)]"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-7 max-w-[470px] text-[13px] leading-6 text-white/40">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-9">

                    {/* Technologies */}
                    <div className="flex max-w-[520px] flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-white/10 px-2.5 py-1.5 text-[8px] tracking-[0.1em] text-white/40 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Result */}
                    {project.result && (
                      <div className="mt-5">
                        <span className="text-[9px] tracking-[0.18em] text-white/50">
                          {project.result}
                        </span>
                      </div>
                    )}

                    {/* Links */}
                    <div className="mt-7 flex flex-wrap gap-6">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-[9px] tracking-[0.18em] text-white/65 transition-colors hover:text-white"
                      >
                        GITHUB

                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-[9px] tracking-[0.18em] text-white/65 transition-colors hover:text-white"
                        >
                          LIVE SITE

                          <ArrowUpRight
                            size={13}
                            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      )}

                    </div>
                  </div>
                </div>

                {/* Project visual */}
                <div className="project-image-wrapper relative overflow-hidden border border-white/10 bg-[#0b0b0b]">

                  <div className="relative aspect-[16/9] overflow-hidden">

                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={`${project.title} project`}
                          loading={
                            project.number === "01"
                              ? "eager"
                              : "lazy"
                          }
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                        />

                        {/* Image highlight */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/[0.08] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                      </>
                    ) : (
                      /* Temporary visual until screenshot is available */
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#0b0b0b]">
                        <ImageOff
                          size={22}
                          strokeWidth={1}
                          className="mb-4 text-white/20 transition-transform duration-500 group-hover:scale-110"
                        />

                        <span className="text-[9px] tracking-[0.2em] text-white/25">
                          PROJECT VISUAL
                        </span>

                        <span className="mt-2 text-[8px] tracking-[0.15em] text-white/15">
                          SCREENSHOT COMING SOON
                        </span>
                      </div>
                    )}

                  </div>

                  {/* Image index */}
                  <div className="absolute bottom-3 left-3 border border-white/10 bg-black/70 px-2.5 py-1.5 backdrop-blur-sm">
                    <span className="text-[8px] tracking-[0.15em] text-white/50">
                      {project.number} / 07
                    </span>
                  </div>

                </div>

              </div>

              {/* Bottom animated rule */}
              <div className="mt-8 h-px w-full origin-left scale-x-0 bg-white/20 transition-transform duration-700 group-hover:scale-x-100" />

            </article>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[9px] tracking-[0.25em] text-white/25">
            SELECTED PROJECTS
          </span>

          <span className="text-[9px] tracking-[0.25em] text-white/25">
            07 PROJECTS
          </span>
        </div>

      </div>
    </section>
  );
}