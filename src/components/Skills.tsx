
import { Code, Briefcase, Settings, Grid2x2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Java", "C/C++", "VHDL", "SQL"],
      color: "blue"
    },
    {
      title: "Web & App Development",
      icon: <Grid2x2 className="w-6 h-6" />,
      skills: ["Django", "React", "Node.js", "Tailwind", "Android Studio"],
      color: "emerald"
    },
    {
      title: "Hardware & Embedded Systems",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Arduino", "Raspberry Pi", "8051", "CPLD", "Tiva-C"],
      color: "purple"
    },
    {
      title: "Semiconductor Design",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["CleWin", "Altium", "ngSpice", "MATLAB"],
      color: "orange"
    },
    {
      title: "AI/ML & Data Analysis",
      icon: <Code className="w-6 h-6" />,
      skills: ["TensorFlow", "PyTorch", "R", "Excel", "Power BI"],
      color: "cyan"
    },
    {
      title: "Tools & Soft Skills",
      icon: <Grid2x2 className="w-6 h-6" />,
      skills: ["Git", "AWS", "Linux", "AutoCAD", "Leadership", "Collaboration"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 border-blue-400/30",
      emerald: "from-emerald-500 to-emerald-600 border-emerald-400/30",
      purple: "from-purple-500 to-purple-600 border-purple-400/30",
      orange: "from-orange-500 to-orange-600 border-orange-400/30",
      cyan: "from-cyan-500 to-cyan-600 border-cyan-400/30",
      green: "from-green-500 to-green-600 border-green-400/30"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400">A comprehensive toolkit for modern engineering challenges</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} p-6 rounded-xl border-2 transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-white font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
