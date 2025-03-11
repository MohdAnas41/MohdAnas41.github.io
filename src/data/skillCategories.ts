
import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
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
