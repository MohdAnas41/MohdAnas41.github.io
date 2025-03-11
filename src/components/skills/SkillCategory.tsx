
import React from 'react';
import { SkillCategory as SkillCategoryType } from '@/lib/types';
import { SkillItem } from './SkillItem';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div 
            key={skillIndex} 
            className="transition-all duration-500"
            style={{ 
              transitionDelay: isVisible ? `${skillIndex * 100}ms` : '0ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
            }}
          >
            <SkillItem skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};
