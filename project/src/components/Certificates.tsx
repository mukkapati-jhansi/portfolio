import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: 'Automation Anywhere Certified – RPA Professional',
      issuer: 'Automation Anywhere',
      year: '2023',
      image: '/images/rpa-cert.png',
      link: '',
    },
    {
      title: 'Red Hat Certified Enterprise Application Developer',
      issuer: 'Red Hat',
      year: '2024',
      image: '/images/redhat.png',
      link: '',
    },
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      year: '2024',
      image: '/images/salesforce.png',
      link: '',
    },
    {
      title: 'Generative AI Virtual Internship',
      issuer: 'Google Cloud & EduSkills',
      year: '2024',
      image: '/images/ai-internship.png',
      link: '',
    },
  ];


  return (
    <section id="certificates" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 flex flex-col"
            >

              {/* Image Container */}
              <div className="w-full h-56 bg-slate-800 flex items-center justify-center overflow-hidden">
              <img
              src={cert.image}
              alt={cert.title}
              className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">

                {/* Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-400 text-sm">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-slate-400 mb-4">
                  {cert.issuer}
                </p>

                {/* Link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}