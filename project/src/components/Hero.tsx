import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      <div className="relative z-10 text-center px-4">

        {/* Intro Text */}
        <p className="text-cyan-400 mb-4 text-lg">
          Hello 👋
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
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

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 mb-12">

          <a
            href="https://github.com/Jhansi1441"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 transition-all"
          >
            <Github className="w-6 h-6 text-slate-300" />
          </a>

          <a
            href="https://linkedin.com/in/mukkapatijhansi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 transition-all"
          >
            <Linkedin className="w-6 h-6 text-slate-300" />
          </a>

          <a
            href="mailto:2200031441cseh@gmail.com"
            className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500/20 transition-all"
          >
            <Mail className="w-6 h-6 text-slate-300" />
          </a>

        </div>

        {/* Down Arrow */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
        </button>

      </div>
    </section>
  );
}
