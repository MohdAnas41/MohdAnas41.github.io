
import React from 'react';
import { Code, Database, FileCode, Brain, Activity, Server, ChartBar, ChartPie, ChartLine, GitBranch, Cloud, BarChart2, TrendingUp } from 'lucide-react';
import { Microchip, BarChart, TrendingUp as CustomTrendingUp, Split, DockerIcon } from '../icons/CustomIcons';

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
    case 'powerbi': return <BarChart className={className} />;
    
    // Databases
    case 'postgresql': return <Database className={className} />;
    case 'mongodb': return <Server className={className} />;
    case 'sqlserver': return <Database className={className} />;
    case 'mysql': return <Database className={className} />;
    
    // Statistical Analysis
    case 'regression': return <CustomTrendingUp className={className} />;
    case 'hypothesis': return <Activity className={className} />;
    case 'abtesting': return <Split className={className} />;
    case 'predictive': return <TrendingUp className={className} />;
    
    // Tools
    case 'jupyter': return <Code className={className} />;
    case 'git': return <GitBranch className={className} />;
    case 'docker': return <DockerIcon className={className} />;
    case 'aws': return <Cloud className={className} />;
    
    default: return <Code className={className} />;
  }
};
