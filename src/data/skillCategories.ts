
import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      { name: "Python", icon: "python", level: 10 },
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
      { name: "Matplotlib", icon: "matplotlib", level: 9 },
      { name: "Seaborn", icon: "seaborn", level: 9 },
      { name: "Plotly", icon: "plotly", level: 7 },
      { name: "PowerBI", icon: "powerbi", level: 7 }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", level: 7 },
      { name: "MongoDB", icon: "mongodb", level: 6 },
      { name: "MS SQL Server", icon: "sqlserver", level: 9 },
      { name: "MySQL", icon: "mysql", level: 9 }
    ]
  },
  {
    name: "Statistical Analysis",
    skills: [
      { name: "Regression", icon: "regression", level: 8 },
      { name: "Hypothesis Testing", icon: "hypothesis", level: 7 },
      { name: "A/B Testing", icon: "abtesting", level: 7 },
      { name: "Predictive Modelling", icon: "predictive", level: 8 }
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Jupyter", icon: "jupyter", level: 10 },
      { name: "Git", icon: "git", level: 7 },
      { name: "Docker", icon: "docker", level: 6 },
      { name: "AWS", icon: "aws", level: 5 }
    ]
  }
];
