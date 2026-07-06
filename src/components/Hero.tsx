import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden"
    >

      <div className="relative z-10 text-center px-4">

        {/* Intro Text */}
        <p className="text-indigo-300 mb-4 text-lg">
          Hello 👋
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
            Mukkapati Jhansi
          </span>
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            'AI & Machine Learning Engineer',
            2000,
            'Python & Flask Developer',
            2000,
            'Data Analytics Enthusiast',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-slate-300"
        />
        <div className="flex flex-wrap justify-center gap-4 mt-10">

  <a
    href={`${import.meta.env.BASE_URL}Mukkapati_Jhansi_Resume.pdf`}
    download="Mukkapati_Jhansi_Resume.pdf"
    className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300"
  >
    📄 Download Resume
  </a>

  <button
    onClick={() =>
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
      })
    }
    className="px-7 py-3 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
  >
    💻 View Projects
  </button>

</div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 mb-12">

          <a
            href="https://github.com/Jhansi1441"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 border border-slate-700 rounded-full hover:border-indigo-500
hover:bg-indigo-500/10
hover:scale-110
duration-300 transition-all"
          >
            <Github className="w-6 h-6 text-slate-200" />
          </a>

          <a
            href="https://linkedin.com/in/mukkapatijhansi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 border border-slate-700 rounded-full hover:border-indigo-500
hover:bg-indigo-500/10
hover:scale-110
duration-300 transition-all"
          >
            <Linkedin className="w-6 h-6 text-slate-200" />
          </a>

          <a
            href="mailto:mukkapatijhansi2004@gmail.com"
            className="p-3 bg-slate-800 border border-slate-700 rounded-full hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-slate-200" />
          </a>

        </div>

        {/* Down Arrow */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-indigo-400 mx-auto" />
        </button>

      </div>
    </section>
  );
}
