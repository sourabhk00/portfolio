
const Research = () => {
  const publications = [
    {
      title: "AI-Driven Optimization of Nanodevice Performance in VLSI Applications",
      journal: "IEEE Transactions on Nanotechnology",
      year: "2024",
      status: "Published"
    },
    {
      title: "Fractional Fourier Transform Applications in SAR Signal Processing",
      journal: "International Journal of Electronics and Electrical Research",
      year: "2024",
      status: "Under Review"
    },
    {
      title: "Machine Learning Approaches for Smart Grid Energy Management",
      journal: "Renewable Energy Systems Journal",
      year: "2023",
      status: "Published"
    },
    {
      title: "Embedded Systems Security in IoT Networks: A Comprehensive Analysis",
      journal: "Journal of Computer Security",
      year: "2023",
      status: "Published"
    }
  ];

  const achievements = [
    {
      title: "Winner - MPYSC 2024",
      description: "Madhya Pradesh Young Scientist Congress - Outstanding Research in Electrical Engineering",
      year: "2024"
    },
    {
      title: "Best Oral Presentation - IISF 2023",
      description: "India International Science Festival - Excellence in Technical Communication",
      year: "2023"
    },
    {
      title: "2nd Prize - ML Codefest IIT Jodhpur",
      description: "Machine Learning Competition focusing on innovative algorithmic solutions",
      year: "2023"
    },
    {
      title: "Winner - KAVACH-2023 Hackathon",
      description: "National level cybersecurity hackathon by Government of India",
      year: "2023"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Research & Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-400">Contributing to the future of technology through research and innovation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center">
              <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                📄
              </span>
              Research Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 hover:border-blue-400/50 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                  <p className="text-emerald-400 font-medium mb-1">{pub.journal}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{pub.year}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pub.status === 'Published' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center">
              <span className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3">
                🏆
              </span>
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 hover:border-emerald-400/50 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                    <span className="text-gray-400 text-sm">{achievement.year}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
