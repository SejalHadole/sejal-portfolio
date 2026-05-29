import { Trophy, Code, Brain, Rocket, Database } from 'phosphor-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Code size={30} />,
      title: "5-Star Gold Badge in Python",
      description:
        "Earned a top-tier Python badge on HackerRank for exceptional problem-solving and programming skills."
    },

{
  icon: <Trophy size={30} />,
  title: "MaTOP Apptitude Idol",
  description:
    "Completed career development and technical training focused on professional communication, industry readiness, technical growth, and workplace skills."
},

    {
      icon: <Database size={30} />,
      title: "NPTEL – Database Management System",
      description:
        "Successfully completed the NPTEL certified course in Database Management Systems with hands-on knowledge of SQL, relational databases, normalization, and DBMS concepts."
    },
    {
  icon: <Code size={30} />,
  title: "GitHub Copilot Workshop – Microsoft Hyderabad 2025",
  description:
    "Participated in the GitHub Copilot Workshop organized by Microsoft Hyderabad (2025), gaining hands-on experience with AI-assisted coding, developer productivity tools, and modern software development workflows."
}

  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            My <span className="text-primary-glow">Achievements</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />

       <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
         A collection of certifications, achievements, and technical milestones
         highlighting my expertise in Python, AI/ML, full stack development,
         database systems, and modern software engineering.
       </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-[#1e1e2f] to-[#111827] p-8 hover:scale-105 transition-all duration-300 hover:shadow-glow-primary"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>

              <span className="inline-block px-4 py-1 text-sm rounded-full bg-primary/10 text-primary-glow mb-4">
                Achievement
              </span>

              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
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

export default Achievements;