
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-64 h-80 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-lg flex items-center justify-center mx-auto lg:mx-0">
              <div className="text-gray-400 text-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto mb-4"></div>
                <p>Professional Photo</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Final-Year Electrical Engineering Student</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing B.Tech in Electrical Engineering at MITS Gwalior (graduating 2025), 
                I am passionate about hardware-software integration and creating innovative solutions 
                that bridge the gap between traditional electrical engineering and modern computer science.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My experience spans across semiconductor fabrication, AI-powered applications, and robotics, 
                with a strong focus on energy-efficient and intelligent system design.
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-emerald-400 mb-4">Educational Background</h4>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-semibold">B.Tech in Electrical Engineering</span>
                </p>
                <p className="text-gray-400">MITS Gwalior (2021–2025)</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">Key Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Cross-disciplinary Innovation",
                  "Project Execution & Leadership",
                  "Technical Writing & Research",
                  "Hardware-Software Integration"
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
