import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Site Institucional",
    description:
      "Site da Atlética – projeto institucional com foco em presença digital e organização de informações.",
    github: "https://github.com/nunesbi/siteagucada",
    deploy: "https://atleticaagucada.com.br",
  },
  {
    title: "Portfólio Pessoal",
    description: "Meu portfólio pessoal desenvolvido com React, TypeScript e Vite.",
    github: "https://github.com/nunesbi/portfolio_bianca",
    deploy: "https://biancadev.com.br",
  },
  {
    title: "Em Breve",
    description: "Em breve atualizações com novos projetos e estudos práticos.",
    github: "https://github.com/nunesbi",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black text-primary glow-text mb-6"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 rounded-3xl border border-primary/30 bg-background/40 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.12)] hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-foreground/80 mb-6">{project.description}</p>

              <div className="flex gap-4 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                )}

                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Deploy
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}