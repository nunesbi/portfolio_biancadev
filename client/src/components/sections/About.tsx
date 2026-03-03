import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, User } from 'lucide-react'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutBg = document.getElementById('about-bg-decoration')
      if (aboutBg) {
        const rect = aboutBg.getBoundingClientRect()
        const offset = (window.innerHeight - rect.top) * 0.15
        aboutBg.style.transform = `translateY(${offset}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black text-primary glow-text mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="aspect-square rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_60px_rgba(168,85,247,0.25)]">
              <img
                src="/foto.jpg"
                alt="Bianca Nunes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl space-y-6">
           <p className="text-lg text-foreground/90">
            Desenvolvedora Full Stack focada na criação de soluções web eficientes e bem estruturadas, com visão ampla do desenvolvimento — do front ao back. Busco sempre unir performance, clareza de código e experiência do usuário.
          </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-primary/20">
                  <User className="text-primary" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground">Nome</p>
                    <p className="text-sm font-medium">Bianca Nunes</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-primary/20">
                  <Mail className="text-accent" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">contato@biancadev.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-primary/20">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground">Telefone</p>
                    <p className="text-sm font-medium">(35) 99993-9760</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-primary/20">
                  <MapPin className="text-accent" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground">Local</p>
                    <p className="text-sm font-medium">São Sebastião do Paraíso</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full neon-button bg-gradient-to-r from-primary to-accent"
              >
                <a href="/curriculo.pdf" download>
                  Download Currículo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about-bg-decoration"
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 transition-transform duration-0"
      />
    </section>
  )
}