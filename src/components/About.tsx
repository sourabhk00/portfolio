
import { ExternalLink, Github, Linkedin, FileText, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400">Bridging Hardware and Software Innovation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="w-64 h-80 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-lg flex items-center justify-center mx-auto lg:mx-0">
              <div className="text-gray-400 text-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto mb-4"></div>
                <p>Professional Photo</p>
              </div>
            </div>

            {/* Professional Links */}
            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-emerald-400 mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://linkedin.com/in/sourabh-kumar-7ba353246" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={16} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/sourabhk00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a 
                  href="https://researchgate.net/profile/Sourabh-Kumar-49" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FileText size={16} />
                  <span className="text-sm">ResearchGate</span>
                </a>
                <a 
                  href="https://leetcode.com/u/sourabh1307/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Award size={16} />
                  <span className="text-sm">LeetCode</span>
                </a>
                <a 
                  href="https://localquickhub.store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Globe size={16} />
                  <span className="text-sm">Personal Site</span>
                </a>
                <a 
                  href="https://drive.google.com/drive/folders/1wxYvTNDKtlRO6G95mC3DVnZdbVvf_dOY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FileText size={16} />
                  <span className="text-sm">Certificates</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Electrical Engineering Graduate</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm Sourabh Kumar, a graduate in Electrical Engineering from Madhav Institute of Technology and Science (MITS), 
                Gwalior (Class of 2025), with a strong cross-disciplinary foundation in Computer Science and Electronics. 
                I thrive at the intersection of circuits and code, combining low-level hardware understanding with 
                high-level software skills to build intelligent, efficient, and impactful systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey spans a wide spectrum—from semiconductor fabrication and embedded systems to AI-powered 
                software solutions and full-stack development. I've engineered everything from lunar rovers and smart 
                automation systems to Android apps, web platforms, and nanodevice optimization frameworks.
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-emerald-400 mb-4">🎓 Academic & Research Experience</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 font-semibold">B.Tech in Electrical Engineering</p>
                  <p className="text-gray-400">MITS Gwalior (2021–2025)</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold">Research Intern – STARS Program</p>
                  <p className="text-gray-400">Purdue University, USA</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold">Semiconductor Fabrication Intern</p>
                  <p className="text-gray-400">IIT Hyderabad (Funded by SPARC)</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold">Microfabrication Intern</p>
                  <p className="text-gray-400">CeNSE, IISc Bangalore</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">Key Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Cross-disciplinary Innovation",
                  "Hardware-Software Integration",
                  "Semiconductor Fabrication",
                  "AI & Machine Learning",
                  "Full-Stack Development",
                  "Research & Development",
                  "Project Leadership",
                  "Technical Writing"
                ].map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-300">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
