
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-black border-t border-primary/20 mt-24">
      <div className="container px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              bianca.dev
            </h2>
            <p className="text-foreground/70 max-w-xs">
              Desenvolvendo soluções eficientes com foco em qualidade e precisão.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experiência</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-semibold mb-4">Mais</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#projects" className="hover:text-primary transition-colors">Projetos</a></li>
              <li><a href="#certificates" className="hover:text-primary transition-colors">Certificados</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-semibold mb-4">Contatos</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>
            <a
              href="https://linktr.ee/bianca.dev"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Linktree
            </a>
          </li>
              <li><a href="mailto:biancan.dev@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-primary/20 mt-12 pt-6 flex justify-between items-center text-sm text-foreground/60">
          <p>© 2026 Bianca Nunes. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
          >
            Volte pra cima <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  )
}
