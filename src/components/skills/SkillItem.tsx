
import React from 'react';
import { Skill } from '@/lib/types';
import { SkillIcon } from './SkillIcon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <SkillIcon iconName={skill.icon} />
        <span className="font-medium">{skill.name}</span>
      </div>
      <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          ref={ref}
          className={`bg-primary rounded-full h-2 transition-all duration-1000 ease-out ${isVisible ? '' : 'w-0'}`}
          style={{ 
            width: isVisible ? `${(skill.level || 5) * 10}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  );
};
