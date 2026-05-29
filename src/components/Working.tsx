import { Code, Cpu, Database, Robot } from 'phosphor-react';

const Working = () => {
  const workingItems = [
    {
      icon: <Robot size={28} />,
      title: "AI & Computer Vision",
      description:
        "Developing intelligent computer vision applications using YOLOv8, OpenCV, and Machine Learning for real-time object detection and image analysis."
    },
    {
      icon: <Code size={28} />,
      title: "Full Stack Development",
      description:
        "Building responsive and scalable full stack web applications using Django, React, JavaScript, and modern frontend technologies."
    },
    {
      icon: <Database size={28} />,
      title: "Backend & REST APIs",
      description:
        "Designing secure backend architectures, REST APIs, authentication systems, and database-driven web applications."
    },
    {
      icon: <Cpu size={28} />,
      title: "Learning & Innovation",
      description:
        "Continuously exploring AI/ML, data analytics, backend optimization, and modern software development practices."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            What I'm <span className="text-primary-glow">Working On</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously building innovative projects and improving my expertise in AI/ML,
            full stack development, backend systems, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workingItems.map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-glow-primary transition-all duration-300"
            >
              <div className="text-primary-glow mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Working;