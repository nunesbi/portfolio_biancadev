import { Award } from 'lucide-react';

const certs = [
  { title: 'C#', org: 'Alura', date: 'Jan 2026', duration: '8h', tags: ['C#',] },
  { title: 'Workflow de Pesquisa com IA', org: 'Even3', date: 'Dez 2025', duration: '2h', tags: ['IA Aplicada', 'Metodologia Científica', 'Workflow']},
  { title: 'C', org: 'Alura', date: 'Out 2025', duration: '8h', tags: ['C',] },
  { title: 'Python', org: 'Fundação Bradesco', date: 'Maio 2025', duration: '10h', tags: ['Python',] },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-primary glow-text mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Certificados</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certs.map((c, i) => (
            <div key={i} className="glass-card p-6 rounded-xl">
              <div className="flex gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30"><Award className="text-primary" size={24} /></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{c.title}</h3>
                  <p className="text-primary font-medium">{c.org}</p>
                </div>
              </div>
              <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                <span>📅 {c.date}</span>
                <span>⏱️ {c.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-accent/10 text-accent border border-accent/30 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
