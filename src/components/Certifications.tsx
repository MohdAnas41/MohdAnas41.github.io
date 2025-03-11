
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Certification } from "@/lib/types";
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();

  const certifications: Certification[] = [
    {
      id: 1,
      name: "Applied DS Lab by WQU",
      issuer: "WorldQuant University",
      date: "Currently enrolled (Nov 2024)",
      link: "https://www.wqu.edu/programs/applied-ds-lab/"
    },
    {
      id: 2,
      name: "BCG - Data Science Job Simulation",
      issuer: "BCG",
      date: "January 2025",
      link: "https://www.theforage.com/virtual-internships/ThbphD5N5WRsd9Mxo"
    },
    {
      id: 3,
      name: "Machine Learning in Python",
      issuer: "365 Data Science",
      date: "November 2024",
      link: "https://365datascience.com/courses/machine-learning-in-python/"
    },
    {
      id: 4,
      name: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      date: "June 2024",
      link: "https://www.netacad.com/courses/programming/introduction-data-science"
    },
    {
      id: 5,
      name: "Data Visualization with PowerBI",
      issuer: "Great Learning",
      date: "May 2024",
      link: "https://www.greatlearning.in/academy/learn-for-free/courses/data-visualization-with-power-bi"
    },
    {
      id: 6,
      name: "SQL for Data Science",
      issuer: "Simplilearn",
      date: "Currently enrolled",
      link: "https://www.simplilearn.com/learn-sql-basics-skillup"
    }
  ];

  return (
    <section id="certifications" className="section bg-white">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="inline-block bg-blue-50 text-primary font-medium px-4 py-1 rounded-full mb-4">
            Learning Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Education</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Continuous learning is at the core of my data science journey. Here are some of the certifications and courses I've completed.
          </p>
        </div>

        <div 
          ref={certRef} 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${certVisible ? 'animate-scale-up' : 'opacity-0'}`}
        >
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="text-foreground/70">{cert.issuer}</p>
                  <p className="text-sm text-foreground/60 mt-1">{cert.date}</p>
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors p-1"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full w-full"></div>
                </div>
                <p className="text-sm text-right mt-1 text-foreground/60">Completed</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
