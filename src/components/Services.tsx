
import { Code, Settings, Briefcase, Grid2x2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies like React, Django, and Node.js",
      icon: <Code className="w-8 h-8" />,
      color: "blue"
    },
    {
      title: "Android App Development",
      description: "Native Android applications with intuitive UI/UX and robust backend integration",
      icon: <Grid2x2 className="w-8 h-8" />,
      color: "green"
    },
    {
      title: "UI/UX Prototyping",
      description: "User-centered design solutions with interactive prototypes and modern interfaces",
      icon: <Briefcase className="w-8 h-8" />,
      color: "purple"
    },
    {
      title: "Embedded Systems & IoT",
      description: "Smart device development with Arduino, Raspberry Pi, and microcontroller programming",
      icon: <Settings className="w-8 h-8" />,
      color: "emerald"
    },
    {
      title: "Semiconductor & Circuit Design",
      description: "VLSI design, PCB layout, and circuit simulation using industry-standard tools",
      icon: <Settings className="w-8 h-8" />,
      color: "orange"
    },
    {
      title: "ML Modeling & Data Analysis",
      description: "Machine learning solutions and data-driven insights using TensorFlow and PyTorch",
      icon: <Code className="w-8 h-8" />,
      color: "cyan"
    },
    {
      title: "Tech Consultation",
      description: "Project guidance and technical consulting for innovative engineering solutions",
      icon: <Briefcase className="w-8 h-8" />,
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/10 border-blue-400/30 text-blue-400",
      green: "bg-green-500/10 border-green-400/30 text-green-400",
      purple: "bg-purple-500/10 border-purple-400/30 text-purple-400",
      emerald: "bg-emerald-500/10 border-emerald-400/30 text-emerald-400",
      orange: "bg-orange-500/10 border-orange-400/30 text-orange-400",
      cyan: "bg-cyan-500/10 border-cyan-400/30 text-cyan-400",
      red: "bg-red-500/10 border-red-400/30 text-red-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400">Comprehensive solutions for your technology needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${getColorClasses(service.color)} p-6 rounded-xl border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
