
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,rgba(59,130,246,0)_70%)]"></div>
      </div>
      
      <div 
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-float" 
        style={{ animationDelay: '0s' }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-float" 
        style={{ animationDelay: '1s' }}
      ></div>
      
      <div className="container mx-auto px-4 text-center">
        <div 
          ref={titleRef} 
          className={`opacity-0 transition-all duration-700 delay-100 ${titleVisible ? 'opacity-100' : ''}`}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Mohd Anas</span>
          </h1>
        </div>
        
        <div 
          ref={subtitleRef} 
          className={`opacity-0 transition-all duration-700 delay-300 ${subtitleVisible ? 'opacity-100' : ''}`}
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-foreground/90">
            Turning Data into Meaningful Insights
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10">
            I specialize in data analysis, visualization, and machine learning to solve real-world problems.
          </p>
        </div>
        
        <div 
          ref={ctaRef} 
          className={`opacity-0 transition-all duration-700 delay-500 ${ctaVisible ? 'opacity-100' : ''}`}
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-50 text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-primary/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary/80 hover:text-primary transition-colors duration-300">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
