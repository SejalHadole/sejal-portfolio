import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo, Globe } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Quick Bid – Tender & Bidding System",
      description:"Developed a Django-based tender and bidding management system with authentication, vendor management, bid tracking, and admin dashboard features.",
      image: "/Images/project-1.png",
      tech:  ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/SejalHadole/Quick-Bid"
    },

    {
      id: 2,
      title: "KLAP – Kids Learning Assessment Project",
      description: "Built an AI-powered learning system using YOLOv8 and OpenCV for real-time object detection and image classification for children.",
      image: "/Images/project-2.png",
      tech: ["Python", "YOLOv8", "OpenCV", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/SejalHadole/KLAP"
    },
    {
      id: 3,
      title: "SolarSquare CRM",
      description:"Developed a Django-based CRM system with role-based authentication, CRUD operations, and secure customer management.",
      image: "/Images/project-3.png",
      tech: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/SejalHadole/SolarSquare_CRM"
    },
    {
      id: 4,
      title: "Speech Text Reader",
      description:"Created a web application that converts text and images into speech using OCR technology for accessibility improvement.",
      image: "/Images/project-4.png",
      tech: ["HTML", "CSS", "JavaScript", "OCR"],
      liveUrl: "#",
      githubUrl: "https://github.com/SejalHadole/Speech-Text-Reader"
    },
    {
      id: 5,
      title: "Attendance Manipulator",
      description: "Built a web-based attendance management system with backend APIs and CRUD functionality using Node.js and Express.js.",
      image: "/Images/project-5.png",
      tech: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/SejalHadole/AttendPro"
    }

  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      });

      gsap.from(containerRef.current?.children || [], {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      });

      const cards = containerRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const element = card as HTMLElement;

          element.addEventListener('mouseenter', () => {
            gsap.to(element, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          element.addEventListener('mouseleave', () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Featured <span className="text-primary-glow">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcasing real-world projects built with Django, Python, AI/ML, OpenCV, and modern web technologies — focused on performance, scalability, and user experience.
          </p>        
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass cursor-pointer rounded-xl overflow-hidden hover:shadow-glow-primary transition-all duration-500 group">
              <div className="relative overflow-hidden h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.liveUrl} className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200">
                    <Globe size={18} className="text-primary-foreground" />
                  </a>
                  <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                  >                    
                  <GithubLogo size={18} className="text-secondary-foreground" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-glow transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary-glow text-xs rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-glow hover:text-primary transition-colors duration-300 group/link"
                >                  
                View Project
                  <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-secondary text-secondary-foreground rounded-lg hover:shadow-glow-secondary transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div> */}
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Projects;