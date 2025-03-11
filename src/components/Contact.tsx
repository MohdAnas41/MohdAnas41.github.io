
import { useState } from 'react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="inline-block bg-blue-50 text-primary font-medium px-4 py-1 rounded-full mb-4">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to discuss data science opportunities? Feel free to reach out!
          </p>
        </div>

        <div 
          ref={formRef} 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-300 ${formVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>Sending<span className="animate-pulse">...</span></>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-foreground/70 mb-6">
                I'm always open to discussing data science projects, opportunities, or just chatting about the latest developments in the field.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Social Profiles</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-foreground p-3 rounded-full transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-foreground p-3 rounded-full transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:contact@example.com" 
                    className="bg-gray-100 hover:bg-gray-200 text-foreground p-3 rounded-full transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Email</h4>
                <a 
                  href="mailto:contact@example.com" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  contact@example.com
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Location</h4>
                <p className="text-foreground/70">Based in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
