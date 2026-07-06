import { GraduationCap } from 'lucide-react';
import photo from "../assets/photo.jpg";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE - PHOTO */}
          <div className="flex justify-center">
            <img
              src={photo}
              alt="Profile"
              className="w-[380px] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="space-y-8">

            {/* EDUCATION */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-500/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-200">Education</h3>
              </div>

              <div className="space-y-6">

                {/* B.Tech */}
                <div className="border-l-2 border-indigo-500 pl-4">
                  <h4 className="text-xl font-semibold text-slate-200">
                    K L University
                  </h4>
                  <p className="text-indigo-400">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <p className="text-slate-400">
                    Specialization: AI & IPA
                  </p>
                  <p className="text-slate-400">
                    2022 - 2026 | 87%
                  </p>
                </div>

                {/* Intermediate */}
                <div className="border-l-2 border-slate-600 pl-4">
                  <h4 className="text-lg font-semibold text-slate-200">
                    Harvest Public School
                  </h4>
                  <p className="text-slate-400">
                    Intermediate | 2020 - 2022 | 69%
                  </p>
                </div>

                {/* 10th Class */}
                <div className="border-l-2 border-slate-600 pl-4">
                  <h4 className="text-lg font-semibold text-slate-200">
                    Harvest Public School
                  </h4>
                  <p className="text-slate-400">
                    Secondary School (10th) | 2019 - 2020 | 71%
                  </p>
                </div>

              </div>
            </div>

            {/* CAREER OBJECTIVE */}
            <div className="bg-slate-800/60 backdrop-blur-xl
hover:border-indigo-500/40
hover:shadow-xl
hover:shadow-indigo-500/20
transition-all duration-300 rounded-xl p-8 border border-slate-700">

              <h3 className="text-2xl font-bold text-slate-200 mb-4">
                Career Objective
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Aspiring Software Engineer specializing in Artificial Intelligence
                and Intelligent Process Automation (AI & IPA). Skilled in Python,
                C, web development and machine learning with hands-on project
                experience. Seeking opportunities to contribute to innovative
                development teams while continuously learning and growing as
                a developer.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}