
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "The Lunar Discovery Expedition",
      description: "ISRO Challenge winning project focused on lunar exploration technologies and mission planning",
      tech: ["Python", "MATLAB", "Data Analysis", "Space Technology"],
      category: "Space Technology",
      image: "🚀"
    },
    {
      title: "TruMate – AI-powered Relationship App",
      description: "Intelligent matchmaking application using machine learning algorithms for compatibility analysis",
      tech: ["Android Studio", "TensorFlow", "Python", "Firebase"],
      category: "AI/ML",
      image: "💕"
    },
    {
      title: "Touchless Fingerprint App",
      description: "Innovative biometric authentication system using computer vision and contactless technology",
      tech: ["OpenCV", "Python", "Android", "Biometrics"],
      category: "Security",
      image: "👆"
    },
    {
      title: "SkillBridge LMS Platform",
      description: "Comprehensive Learning Management System for skill development and educational content delivery",
      tech: ["Django", "React", "PostgreSQL", "AWS"],
      category: "Education",
      image: "📚"
    },
    {
      title: "Carrom Playing Bot",
      description: "Autonomous robotic system for playing carrom using computer vision and precision mechanics",
      tech: ["Arduino", "OpenCV", "Mechanical Design", "Control Systems"],
      category: "Robotics",
      image: "🤖"
    },
    {
      title: "AI Optimization for Nanodevice Modeling",
      description: "Machine learning approaches for optimizing semiconductor nanodevice performance modeling",
      tech: ["PyTorch", "MATLAB", "VLSI", "Semiconductor Physics"],
      category: "Research",
      image: "🔬"
    },
    {
      title: "SAR Signal Processing",
      description: "Fractional Fourier Transform implementation for Synthetic Aperture Radar signal processing",
      tech: ["MATLAB", "Signal Processing", "FFT", "Radar Systems"],
      category: "Signal Processing",
      image: "📡"
    },
    {
      title: "IoT Smart Grid System",
      description: "Energy management system for smart grid applications with real-time monitoring",
      tech: ["Raspberry Pi", "IoT", "Python", "Energy Systems"],
      category: "IoT",
      image: "⚡"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400">Innovation at the intersection of hardware and software</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-blue-400/50 group"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{project.image}</div>
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            View Full Project Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
