import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: 'Automation Anywhere Certified – RPA Professional',
      issuer: 'Automation Anywhere',
      year: '2023',
      image: 'images/rpa-cert.png',
      verifyUrl:
        'https://certificates.automationanywhere.com/51a8db3b-f0d1-461e-b93e-8ff9ae4761cc',
    },
    {
      title: 'Red Hat Certified Enterprise Application Developer',
      issuer: 'Red Hat',
      year: '2024',
      image: 'images/redhat.png',
      verifyUrl:
        'https://rhtapps.redhat.com/verify?certId=240-189-142',
    },
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      year: '2024',
      image: 'images/salesforce.png',
      verifyUrl: '',
    },
    {
      title: 'Generative AI Virtual Internship',
      issuer: 'Google Cloud & EduSkills',
      year: '2024',
      image: 'images/ai-internship.png',
      verifyUrl: '',
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 px-4 bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 flex flex-col"
            >

              {/* Certificate Image */}
              <div className="w-full h-60 bg-slate-800 flex items-center justify-center overflow-hidden">

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                {/* Header */}
                <div className="flex items-center justify-between mb-4">

                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>

                  <span className="text-slate-400 text-sm">
                    {cert.year}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">

                  {cert.title}

                </h3>

                {/* Issuer */}
                <p className="text-slate-400 mb-6">
                  {cert.issuer}
                </p>

                {/* Verify Button */}
                {cert.verifyUrl && (

                  <div className="mt-auto">

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
                    >
                      <ExternalLink size={18} />
                      Verify Certificate
                    </a>

                  </div>

                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}