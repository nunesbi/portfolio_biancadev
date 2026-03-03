import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6 text-center">
        <h2
          className="text-5xl md:text-6xl font-black text-primary glow-text mb-6"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          Vamos Conversar?
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-10" />

        <p className="text-xl text-foreground/80 mb-12">
          Pronta para novos desafios, colaborações e projetos inovadores.
        </p>

        <div className="flex justify-center gap-8">
          {}
          <a
            href="https://linkedin.com/in/bianca-20-nunes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>

          {}
          <a
            href="https://github.com/nunesbi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Github size={28} />
          </a>

          {}
          <a
            href="mailto:contato@biancadev.com.br"
            className="p-4 rounded-2xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}