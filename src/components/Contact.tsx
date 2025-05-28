import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, User } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const socialLinks = [{
    name: "Email",
    url: "mailto:sourabhk0703@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    color: "text-blue-400 hover:text-blue-300"
  }, {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <Linkedin className="w-6 h-6" />,
    color: "text-blue-400 hover:text-blue-300"
  }, {
    name: "GitHub",
    url: "https://github.com",
    icon: <Github className="w-6 h-6" />,
    color: "text-gray-400 hover:text-gray-300"
  }, {
    name: "ResearchGate",
    url: "https://researchgate.net",
    icon: <User className="w-6 h-6" />,
    color: "text-emerald-400 hover:text-emerald-300"
  }];
  return <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400">Let's collaborate on your next innovative project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" placeholder="Your full name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" placeholder="Tell me about your project or inquiry..." />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">sourabhk0703@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">+91 77228 45345</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 ${link.color}`}>
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                  </a>)}
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          © 2024 Sourabh Kumar. Engineering the Future: Where Circuits Meet Code.
        </p>
      </div>
    </section>;
};
export default Contact;