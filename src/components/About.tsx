
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Database, BarChart, ActivitySquare } from 'lucide-react';

const About = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: capabilitiesRef, isVisible: capabilitiesVisible } = useScrollAnimation();

  const capabilities = [
    {
      title: "Data Cleaning & Analysis",
      description: "Proficient in cleaning, transforming, and analyzing complex datasets using Python (Pandas) and SQL to extract meaningful insights.",
      icon: <Database className="w-10 h-10 text-primary" />
    },
    {
      title: "Machine Learning",
      description: "Creating predictive models using scikit-learn and TensorFlow to solve classification, regression, and clustering problems.",
      icon: <Brain className="w-10 h-10 text-primary" />
    },
    {
      title: "Data Visualization",
      description: "Crafting insightful visualizations using Matplotlib, Seaborn, and Tableau to communicate data stories effectively.",
      icon: <BarChart className="w-10 h-10 text-primary" />
    },
    {
      title: "Statistical Analysis",
      description: "Applying statistical methods like regression analysis, hypothesis testing, and A/B testing to validate insights and make data-driven decisions.",
      icon: <ActivitySquare className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Me Text */}
          <div 
            ref={textRef} 
            className={`transition-all duration-700 delay-100 ${textVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <div className="inline-block bg-blue-50 text-primary font-medium px-4 py-1 rounded-full mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Passionate Data Enthusiast</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                My journey into data science began with a fascination for how data can reveal hidden patterns and insights that drive decision-making. As someone who has always been curious about the stories numbers can tell, I've dedicated myself to mastering the tools and techniques that unlock these narratives.
              </p>
              <p>
                What excites me most about data science is its interdisciplinary nature—combining statistics, programming, and domain expertise to solve complex problems. I'm particularly drawn to how machine learning algorithms can uncover patterns that human analysis might miss, and how well-designed visualizations can make complex insights accessible to everyone.
              </p>
              <p>
                Though I'm early in my professional journey, I've been building my skills through continuous learning, personal projects, and practical applications of data science concepts. I approach each project not just as a technical challenge, but as an opportunity to derive meaningful insights that can drive real-world impact.
              </p>
            </div>
          </div>

          {/* What I Can Do */}
          <div 
            ref={capabilitiesRef} 
            className={`transition-all duration-700 delay-300 ${capabilitiesVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <div className="inline-block bg-blue-50 text-primary font-medium px-4 py-1 rounded-full mb-4">
              What I Can Do
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                  <p className="text-foreground/70">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
