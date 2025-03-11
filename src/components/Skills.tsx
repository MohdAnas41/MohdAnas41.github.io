
import React from 'react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SkillCategory as SkillCategoryComponent } from './skills/SkillCategory';
import { skillCategories } from '@/data/skillCategories';

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

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
              <SkillCategoryComponent 
                key={categoryIndex} 
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
