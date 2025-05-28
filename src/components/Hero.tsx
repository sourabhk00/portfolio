
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-emerald-900/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23374151" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full flex items-center justify-center text-6xl font-bold text-gray-900">
              <img 
                src="/lovable-uploads/ffcdb755-73c3-42b7-a5b7-b05b8a61ad32.png" 
                alt="Sourabh Kumar" 
                className="w-full h-full rounded-full object-cover border-4 border-blue-400/50"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full opacity-20 blur-xl"></div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Sourabh Kumar
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-300 font-medium">
              Engineering the Future: Where Circuits Meet Code
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A multidisciplinary technologist passionate about creating intelligent, energy-efficient solutions 
              at the intersection of Electrical Engineering and Computer Science.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
