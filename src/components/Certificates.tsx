import {
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const imagePath = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

const certificates = [
  {
    number: "01",
    issuer: "Google Cloud & EduSkills",
    title: "Generative AI Virtual Internship",
    year: "2024",
    image: imagePath("Google-cloud.png"),
    verifyUrl:
      "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=389cb8033bb94a4e40ebde680709765e",
  },

  {
    number: "02",
    issuer: "Automation Anywhere",
    title: "Certified RPA Professional",
    year: "2023",
    image: imagePath("automation.png"),
    verifyUrl:
      "https://certificates.automationanywhere.com/51a8db3b-f0d1-461e-b93e-8ff9ae4761cc",
  },

  {
    number: "03",
    issuer: "Red Hat",
    title: "Certified Enterprise Application Developer",
    year: "2024",
    image: imagePath("red-hat.png"),
    verifyUrl:
      "https://rhtapps.redhat.com/verify?certId=240-189-142",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-24 text-white md:px-10 md:py-32"
    >
      {/* Subtle background grid */}
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
        <div className="mb-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-5 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[10px] tracking-[0.28em] text-white/35">
                04 — CREDENTIALS
              </span>

              <span className="h-px w-10 bg-white/15" />

              <span className="text-[10px] tracking-[0.22em] text-white/25">
                VERIFIED
              </span>
            </div>

            <h2 className="text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.06em]">
              VERIFIED
              <br />
              <span className="text-white/30">
                CREDENTIALS.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-[13px] leading-7 text-white/40">
            Professional certifications and credentials earned
            across AI, automation, software development and
            emerging technologies.
          </p>
        </div>

        {/* Certificates */}
        <div className="grid gap-6 md:grid-cols-2">

          {certificates.map((certificate) => (
            <article
              key={certificate.number}
              className="certificate-card group overflow-hidden border border-white/10 bg-white/[0.015] transition-all duration-700 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.025]"
            >

              {/* Certificate image */}
              <div className="certificate-image-wrapper relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0a0a0a]">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                {/* Subtle image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/[0.06] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-white/10 bg-black/70 text-[10px] tracking-[0.1em] text-white/60 backdrop-blur-md transition-all duration-500 group-hover:border-white/25 group-hover:text-white">
                  {certificate.number}
                </div>

                {/* Verified indicator */}
                <div className="absolute right-5 top-5 flex items-center gap-2 border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md">
                  <ShieldCheck
                    size={13}
                    strokeWidth={1.4}
                    className="text-white/50 transition-colors duration-300 group-hover:text-white"
                  />

                  <span className="text-[8px] tracking-[0.16em] text-white/45">
                    VERIFIED
                  </span>
                </div>

              </div>

              {/* Information */}
              <div className="p-6 md:p-7">

                <div className="mb-6 flex items-start justify-between gap-4">

                  <div>
                    <p className="mb-2 text-[9px] font-medium tracking-[0.2em] text-white/35">
                      {certificate.issuer}
                    </p>

                    <h3 className="max-w-[430px] text-xl font-medium leading-tight tracking-[-0.025em]">
                      {certificate.title}
                    </h3>
                  </div>

                  <span className="shrink-0 text-[10px] tracking-[0.15em] text-white/25">
                    {certificate.year}
                  </span>

                </div>

                {/* Verify button */}
                {certificate.verifyUrl && (
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/verify inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-[9px] font-medium tracking-[0.16em] text-white/65 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    <ShieldCheck
                      size={13}
                      strokeWidth={1.5}
                    />

                    <span>
                      VERIFY CERTIFICATE
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover/verify:-translate-y-0.5 group-hover/verify:translate-x-0.5"
                    />
                  </a>
                )}

              </div>

              {/* Animated bottom line */}
              <div className="h-px w-full origin-left scale-x-0 bg-white/30 transition-transform duration-700 group-hover:scale-x-100" />

            </article>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[9px] tracking-[0.25em] text-white/25">
            PROFESSIONAL CREDENTIALS
          </span>

          <span className="text-[9px] tracking-[0.25em] text-white/25">
            03 CERTIFICATIONS
          </span>
        </div>

      </div>
    </section>
  );
}