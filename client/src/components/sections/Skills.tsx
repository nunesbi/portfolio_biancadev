
const skills = [
  {
    title: 'Linguagens',
    items: ['C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'PHP'],
  },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'GitHub'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black text-primary glow-text mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Hard Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {skills.map((group) => (
            <div
              key={group.title}
              className="p-8 rounded-3xl border border-primary/30 bg-background/40 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.12)] hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">{group.title}</h3>

              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 rounded-2xl border border-primary/30 bg-primary/10 text-foreground/90 hover:bg-primary/20 hover:border-primary transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
