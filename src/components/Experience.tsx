import { Briefcase } from 'phosphor-react';

const Experience = () => {
  const experiences = [
    {
      company: "JK Innovative Pvt. Ltd.",
      role: "Python Trainee Intern",
      duration: "Jan 2026 – Jul 2026 | Amravati",
      description:
        "Developed and tested Python-based web applications while assisting in backend development and database integration. Collaborated with team members using Git and GitHub, and improved debugging and problem-solving skills through real-world projects."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Internship <span className="text-primary-glow">Experience</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on internship experience in Python development,
            backend technologies, and database integration.
          </p>
        </div>

        {/* Experience Card */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 border border-primary/20 hover:shadow-glow-primary transition-all duration-300"
            >
              <div className="flex items-start gap-5">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-white shrink-0">
                  <Briefcase size={28} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>

                  <p className="text-primary-glow text-lg mb-2">
                    {exp.company}
                  </p>

                  <p className="text-sm text-gray-400 mb-5">
                    {exp.duration}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;