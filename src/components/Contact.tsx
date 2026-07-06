import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-200 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:mukkapatijhansi2004@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all group"
                >
                  <div className="p-3 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-all">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-slate-200 group-hover:text-indigo-400 transition-colors">
                      mukkapatijhansi2004@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919052979551"
                  className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all group"
                >
                  <div className="p-3 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-all">
                    <Phone className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-slate-200 group-hover:text-indigo-300 transition-colors">
                      +91 9052979551
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-slate-200">Garlapadu, Khammam, Telangana</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-slate-200 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Jhansi1441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-700/30 rounded-lg hover:bg-indigo-500/20 transition-all group"
                  >
                    <Github className="w-5 h-5 text-slate-300 group-hover:text-indigo-300 transition-colors" />
                    <span className="text-slate-300 group-hover:text-indigo-300 transition-colors">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/mukkapatijhansi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-700/30 rounded-lg hover:bg-indigo-500/20 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-indigo-300 transition-colors" />
                    <span className="text-slate-300 group-hover:text-indigo-300 transition-colors">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-slate-200 mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-indigo-500 focus:outline-none text-slate-200 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-indigo-500 focus:outline-none text-slate-200 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-indigo-500 focus:outline-none text-slate-200 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400">
            © 2024 Mukkapati Jhansi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
