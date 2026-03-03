
import { Briefcase, GraduationCap } from 'lucide-react';

const highlights = [
  'Desenvolvimento de aplicações web completas (front-end e back-end)',
  'Arquitetura e estruturação de projetos Full Stack',
  'Criação de interfaces modernas, responsivas e performáticas',
  'Implementação de lógica de negócio e integração com APIs',
  'Modelagem e integração com bancos de dados',
  'Versionamento e organização de código',
  'Deploy, manutenção e otimização de aplicações web',
  'Aplicação de boas práticas e padrões de desenvolvimento'
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black text-primary glow-text mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Experiência & Educação
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

          {}
          <div className="p-8 rounded-3xl border border-primary/30 bg-background/40 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.12)]">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold">Desenvolvedora Full Stack</h3>
            </div>

            <p className="text-foreground/80 mb-2">
              Experiência prática no desenvolvimento de aplicações web completas, atuando desde a interface até a lógica de negócio e integração com servidores.
            </p>
            <p className="text-sm text-muted-foreground mb-6">2024 – Atual</p>

            <ul className="space-y-3 text-foreground/90">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="p-6 rounded-3xl border border-primary/30 bg-background/30 backdrop-blur-lg shadow-[0_0_30px_rgba(168,85,247,0.10)] h-fit">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold">Educação</h3>
            </div>

            <p className="text-foreground font-semibold">
              Engenharia de Software
            </p>
            <p className="text-foreground/70 mt-1">
              Universidade Federal de Lavras (UFLA)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              2024 – Atual
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
