
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BlogPost } from "@/lib/types";
import { Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: blogRef, isVisible: blogVisible } = useScrollAnimation();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How I Built My First Machine Learning Model",
      summary: "A step-by-step walkthrough of building my first ML model, from data collection to deployment, with lessons learned along the way.",
      date: "March 2025",
      readTime: "3 min read",
      link: "https://medium.com/@wayanas497/how-i-built-my-first-machine-learning-model-predicting-car-purchase-prices-9ebcbd4c6c25",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80"
    },
    {
      id: 2,
      title: "5 Common Mistakes in Data Analysis",
      summary: "An exploration of the pitfalls that new data analysts often encounter and how to avoid them in your analysis workflow.",
      date: "June 22, 2023",
      readTime: "6 min read",
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      title: "Understanding Feature Engineering",
      summary: "Why feature engineering is crucial for model performance and techniques I've found effective in my projects.",
      date: "August 10, 2023",
      readTime: "10 min read",
      link: "#",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
    }
  ];

  return (
    <section id="blog" className="section bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="inline-block bg-blue-50 text-primary font-medium px-4 py-1 rounded-full mb-4">
            Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Insights & Stories</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Sharing my learnings, project walkthroughs, and data science insights with the community.
          </p>
        </div>

        <div 
          ref={blogRef} 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${blogVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-foreground/60 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-foreground/70 mb-4">{post.summary}</p>
                <a 
                  href={post.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
