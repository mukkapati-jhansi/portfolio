import { Database, Brain, Gamepad2, Cloud, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Online Book Store Management System',
      year: '2024',
      description:
        'Developed a Django-based bookstore application with user, seller, and admin modules. Implemented role-based authentication and enabled browsing, cart, and order management.',
      technologies: ['Python', 'Django', 'MySQL'],
      icon: Database,
      gradient: 'from-cyan-500 to-blue-500',
      githubUrl: '',
      liveUrl: '',
      image: '/images/bookstore.png',
    },
    {
      title: 'Fake News Detection',
      year: '2024',
      description:
        'Built a web-based fake news classification system using deep learning models. Applied NLP preprocessing techniques and achieved 92% accuracy.',
      technologies: ['TensorFlow', 'Flask', 'RNN', 'LSTM', 'BiLSTM'],
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      githubUrl:
        'https://github.com/mukkapati-jhansi/Fake-News-Classifier.git',
      liveUrl: 'https://lnkd.in/d_gmCdqb',
      image: '/images/fake-news.png',
    },
    {
      title: 'Tic Tac Toe Game',
      year: '2024',
      description:
        'Developed an interactive Tic Tac Toe game with dynamic UI and game logic using JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Gamepad2,
      gradient: 'from-cyan-500 to-blue-500',
      githubUrl:
         'https://github.com/Jhansi1441/PRODIGY_WD_03.git',
      liveUrl: 'https://lnkd.in/gx89Uw5s',
      image: '/images/tictactoe.png',
    },
    {
      title: 'Weather Report App',
      year: '2024',
      description:
        'Built a weather forecasting application using API integration to display real-time weather data.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      icon: Cloud,
      gradient: 'from-blue-500 to-cyan-500',
      githubUrl:
         'https://github.com/Jhansi1441/PRODIGY_WD_05.git',
      liveUrl: 'https://lnkd.in/gu-BYAjB',
      image: '/images/weather.png',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Resume Button */}
        <div className="flex justify-center mb-10">
          <a
            href="/2200031441_jhansi.pdf"
            download
            className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition"
          >
            Download My Resume
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 flex flex-col"
            >

              {/* Image */}
              <div className="w-full h-52 flex items-center justify-center bg-slate-800">
              <img
              src={project.image}
              alt={project.title}
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">

                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-400 text-sm">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap mt-auto">

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>View</span>
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}