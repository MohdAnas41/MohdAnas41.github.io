
import React from 'react';
import { SkillCategory as SkillCategoryType } from '@/lib/types';
import { SkillItem } from './SkillItem';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillItem key={skillIndex} skill={skill} />
        ))}
      </div>
    </div>
  );
};
