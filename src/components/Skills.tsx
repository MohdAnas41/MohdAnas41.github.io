
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Database, FileCode, Brain, Activity, Server, ChartBar, ChartPie, ChartLine, GitBranch, Docker, Cloud } from 'lucide-react';
import { SkillCategory } from "@/lib/types";

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming",
      skills: [
        { name: "Python", icon: "python", level: 9 },
        { name: "SQL", icon: "sql", level: 8 },
        { name: "C", icon: "c", level: 6 }
      ]
    },
    {
      name: "Machine Learning",
      skills: [
        { name: "Scikit-learn", icon: "scikit", level: 8 },
        { name: "TensorFlow", icon: "tensorflow", level: 7 },
        { name: "PyTorch", icon: "pytorch", level: 6 }
      ]
    },
    {
      name: "Data Visualization",
      skills: [
        { name: "Matplotlib", icon: "matplotlib", level: 8 },
        { name: "Seaborn", icon: "seaborn", level: 8 },
        { name: "Plotly", icon: "plotly", level: 7 },
        { name: "Tableau", icon: "tableau", level: 7 }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "postgresql", level: 7 },
        { name: "MongoDB", icon: "mongodb", level: 6 }
      ]
    },
    {
      name: "Statistical Analysis",
      skills: [
        { name: "Regression", icon: "regression", level: 8 },
        { name: "Hypothesis Testing", icon: "hypothesis", level: 7 },
        { name: "A/B Testing", icon: "abtesting", level: 7 }
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Jupyter", icon: "jupyter", level: 9 },
        { name: "Git", icon: "git", level: 7 },
        { name: "Docker", icon: "docker", level: 6 },
        { name: "AWS", icon: "aws", level: 5 }
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      // Programming
      case 'python': return <Code className="w-6 h-6 text-primary" />;
      case 'sql': return <Database className="w-6 h-6 text-primary" />;
      case 'c': return <FileCode className="w-6 h-6 text-primary" />;
      
      // Machine Learning
      case 'scikit': return <Brain className="w-6 h-6 text-primary" />;
      case 'tensorflow': return <Microchip className="w-6 h-6 text-primary" />;
      case 'pytorch': return <Activity className="w-6 h-6 text-primary" />;
      
      // Data Visualization
      case 'matplotlib': return <ChartBar className="w-6 h-6 text-primary" />;
      case 'seaborn': return <ChartPie className="w-6 h-6 text-primary" />;
      case 'plotly': return <ChartLine className="w-6 h-6 text-primary" />;
      case 'tableau': return <BarChart className="w-6 h-6 text-primary" />;
      
      // Databases
      case 'postgresql': return <Database className="w-6 h-6 text-primary" />;
      case 'mongodb': return <Server className="w-6 h-6 text-primary" />;
      
      // Statistical Analysis
      case 'regression': return <TrendingUp className="w-6 h-6 text-primary" />;
      case 'hypothesis': return <Activity className="w-6 h-6 text-primary" />;
      case 'abtesting': return <Split className="w-6 h-6 text-primary" />;
      
      // Tools
      case 'jupyter': return <Code className="w-6 h-6 text-primary" />;
      case 'git': return <GitBranch className="w-6 h-6 text-primary" />;
      case 'docker': return <Docker className="w-6 h-6 text-primary" />;
      case 'aws': return <Cloud className="w-6 h-6 text-primary" />;
      
      default: return <Code className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="skills" className="section bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="inline-block bg-blue-100 text-primary font-medium px-4 py-1 rounded-full mb-4">
            Skills & Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My toolkit encompasses a range of technologies and methodologies for extracting insights from data.
          </p>
        </div>

        <div 
          ref={skillsRef} 
          className={`transition-all duration-700 delay-300 ${skillsVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getIcon(skill.icon)}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2" 
                          style={{ width: `${(skill.level || 5) * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Microchip = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 2v2" />
    <path d="M15 2v2" />
    <path d="M9 20v2" />
    <path d="M15 20v2" />
    <path d="M20 9h2" />
    <path d="M20 14h2" />
    <path d="M2 9h2" />
    <path d="M2 14h2" />
  </svg>
);

const BarChart = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

const TrendingUp = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const Split = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 3h5v5" />
    <path d="M8 3H3v5" />
    <path d="M21 11.5V21H3V11.5" />
    <path d="m21 3-9 9-9-9" />
  </svg>
);

export default Skills;
