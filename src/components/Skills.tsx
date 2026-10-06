import {
  Brain,
  BarChart3,
  Database,
  Code2,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    icon: Brain,
    title: "AI & GENERATIVE AI",
    description:
      "Building intelligent applications with modern AI and LLM technologies.",
    skills: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "AI Agents",
      "Embeddings",
      "AI APIs",
      "LangChain",
      "Hugging Face",
    ],
  },

  {
    number: "02",
    icon: Brain,
    title: "MACHINE LEARNING",
    description:
      "Developing and evaluating machine learning and deep learning systems.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "RNN",
      "LSTM",
      "BiLSTM",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
    ],
  },

  {
    number: "03",
    icon: BarChart3,
    title: "DATA & ANALYTICS",
    description:
      "Working with structured data to extract useful signals and insights.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Excel",
      "Power BI",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Data Preprocessing",
    ],
  },

  {
    number: "04",
    icon: Database,
    title: "DATABASES",
    description:
      "Designing and working with application data and relational databases.",
    skills: [
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "SQLAlchemy",
      "Database Design",
      "CRUD Operations",
    ],
  },

  {
    number: "05",
    icon: Server,
    title: "BACKEND & APIS",
    description:
      "Developing backend services and APIs for AI-powered applications.",
    skills: [
      "Python",
      "Flask",
      "Django",
      "FastAPI",
      "REST APIs",
      "Express.js",
      "Node.js",
    ],
  },

  {
    number: "06",
    icon: Code2,
    title: "FRONTEND",
    description:
      "Creating responsive interfaces for data and AI-driven applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    number: "07",
    icon: Wrench,
    title: "TOOLS & ENGINEERING",
    description:
      "Development tools and engineering practices used across projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "Docker",
      "Kubernetes",
      "AWS",
      "Databricks",
      "Spark",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white md:px-10 lg:py-36"
    >

      {/* Grid */}
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

        {/* Header */}
        <div className="border-t border-white/10 pt-5">

          <div className="flex items-center justify-between">

            <span className="text-[10px] tracking-[0.28em] text-white/40">
              06 — CAPABILITIES
            </span>

            <span className="text-[10px] tracking-[0.22em] text-white/25">
              AI · DATA · SOFTWARE
            </span>

          </div>

        </div>

        {/* Intro */}
        <div className="mt-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

          <div>

            <span className="text-[10px] tracking-[0.28em] text-white/35">
              ENGINEERING STACK
            </span>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.06em]">
              WHAT I
              <br />
              <span className="text-white/30">
                WORK WITH.
              </span>
            </h2>

          </div>

          <p className="max-w-[500px] text-[13px] leading-7 text-white/40">
            A practical toolkit spanning artificial intelligence,
            machine learning, data analytics, backend engineering,
            and modern application development.
          </p>

        </div>

        {/* Skills */}
        <div className="mt-20 grid gap-0 border border-white/10 bg-[#050505] md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="group border-b border-r border-white/10 bg-[#050505] p-7 transition-all duration-700 hover:bg-[#0b0b0b] md:p-8"
              >

                {/* Top */}
                <div className="flex items-center justify-between">

                  <span className="text-[9px] tracking-[0.2em] text-white/25">
                    {group.number}
                  </span>

                  <Icon
                    size={20}
                    strokeWidth={1.2}
                    className="text-white/25 transition-all duration-500 group-hover:scale-110 group-hover:text-white"
                  />

                </div>

                {/* Title */}
                <h3 className="mt-10 text-xl font-medium tracking-[-0.025em]">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[11px] leading-6 text-white/35">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-1.5">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 px-2.5 py-1.5 text-[8px] tracking-[0.08em] text-white/35 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                {/* Hover line */}
                <div className="mt-8 h-px w-full origin-left scale-x-0 bg-white/25 transition-transform duration-700 group-hover:scale-x-100" />

              </article>
            );
          })}

        </div>

        {/* Analytics highlight */}
        <div className="mt-16 border border-white/10 bg-white/[0.015] p-7 md:p-10">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div>

              <span className="text-[9px] tracking-[0.22em] text-white/30">
                DATA ANALYTICS FOCUS
              </span>

              <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
                Turning raw data
                <br />
                <span className="text-white/30">
                  into useful insights.
                </span>
              </h3>

            </div>

            <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-5">

              {[
                ["01", "COLLECT"],
                ["02", "CLEAN"],
                ["03", "ANALYZE"],
                ["04", "VISUALIZE"],
                ["05", "INSIGHT"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="group bg-[#050505] p-5 transition-colors duration-300 hover:bg-[#0d0d0d]"
                >
                  <strong className="block text-[9px] tracking-[0.15em] text-white/25">
                    {number}
                  </strong>

                  <span className="mt-4 block text-[8px] tracking-[0.12em] text-white/45 group-hover:text-white">
                    {label}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5">

          <span className="text-[9px] tracking-[0.25em] text-white/25">
            AI · MACHINE LEARNING · DATA ANALYTICS
          </span>

          <span className="text-[9px] tracking-[0.25em] text-white/25">
            ENGINEERING TOOLKIT
          </span>

        </div>

      </div>

    </section>
  );
}