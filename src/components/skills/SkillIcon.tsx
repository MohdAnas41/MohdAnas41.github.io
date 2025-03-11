
import React from 'react';
import { Code, Database, FileCode, Brain, Activity, Server, ChartBar, ChartPie, ChartLine, GitBranch, Cloud } from 'lucide-react';
import { Microchip, BarChart, TrendingUp, Split, DockerIcon } from '../icons/CustomIcons';

interface SkillIconProps {
  iconName: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ iconName, className = "w-6 h-6 text-primary" }) => {
  switch (iconName) {
    // Programming
    case 'python': return <Code className={className} />;
    case 'sql': return <Database className={className} />;
    case 'c': return <FileCode className={className} />;
    
    // Machine Learning
    case 'scikit': return <Brain className={className} />;
    case 'tensorflow': return <Microchip className={className} />;
    case 'pytorch': return <Activity className={className} />;
    
    // Data Visualization
    case 'matplotlib': return <ChartBar className={className} />;
    case 'seaborn': return <ChartPie className={className} />;
    case 'plotly': return <ChartLine className={className} />;
    case 'tableau': return <BarChart className={className} />;
    
    // Databases
    case 'postgresql': return <Database className={className} />;
    case 'mongodb': return <Server className={className} />;
    
    // Statistical Analysis
    case 'regression': return <TrendingUp className={className} />;
    case 'hypothesis': return <Activity className={className} />;
    case 'abtesting': return <Split className={className} />;
    
    // Tools
    case 'jupyter': return <Code className={className} />;
    case 'git': return <GitBranch className={className} />;
    case 'docker': return <DockerIcon className={className} />;
    case 'aws': return <Cloud className={className} />;
    
    default: return <Code className={className} />;
  }
};
