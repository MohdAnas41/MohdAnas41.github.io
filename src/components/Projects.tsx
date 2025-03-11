
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Project } from "@/lib/types";
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects: Project[] = [
    {
      id: 1,
      title: "COVID-19 Data Analysis",
      description: "Exploratory data analysis of COVID-19 data to identify trends, patterns, and insights. Created visualizations to track the spread of the virus and analyzed factors affecting infection and mortality rates.",
      image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      githubLink: "https://github.com/username/covid-analysis"
    },
    {
      id: 2,
      title: "House Price Prediction",
      description: "Developed a machine learning model to predict house prices based on various features like location, size, bedrooms, etc. Implemented feature engineering, model selection, and hyperparameter tuning to improve accuracy.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
      demoLink: "https://demo-house-prediction.example.com",
      githubLink: "https://github.com/username/house-price-prediction"
    },
    {
      id: 3,
      title: "Netflix Data SQL Analysis",
      description: "Analyzed Netflix content data using SQL to extract insights about content distribution, trends, and viewer preferences. Created interactive visualizations using Tableau to present the findings.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      technologies: ["SQL", "PostgreSQL", "Tableau", "Data Cleaning"],
      githubLink: "https://github.com/username/netflix-analysis"
    },
    {
      id: 4,
      title: "Stock Market Prediction",
      description: "Built a time series forecasting model to predict stock prices using historical data. Implemented ARIMA, LSTM, and Prophet models to compare performance and provide insights for investment decisions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      technologies: ["Python", "TensorFlow", "LSTM", "Time Series Analysis", "Pandas"],
      demoLink: "https://stock-prediction-demo.example.com",
      githubLink: "https://github.com/username/stock-prediction"
    }
  ];

  return (
    <section id="projects" className="section bg-blue-50">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="inline-block bg-blue-100 text-primary font-medium px-4 py-1 rounded-full mb-4">
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Showcasing my data science journey through projects that demonstrate my analytical and problem-solving abilities.
          </p>
        </div>

        <div 
          ref={projectsRef} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-300 ${projectsVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full flex justify-between items-center">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
