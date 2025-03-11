
import React from 'react';
import { Skill } from '@/lib/types';
import { SkillIcon } from './SkillIcon';

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <SkillIcon iconName={skill.icon} />
        <span className="font-medium">{skill.name}</span>
      </div>
      <div className="w-24 bg-gray-200 rounded-full h-2">
        <div 
          className="bg-primary rounded-full h-2" 
          style={{ width: `${(skill.level || 5) * 10}%` }}
        ></div>
      </div>
    </div>
  );
};
