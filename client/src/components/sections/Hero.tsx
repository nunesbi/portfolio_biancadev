import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.getElementById('hero-bg');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div id="hero-bg" className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-0" style={{ backgroundImage: 'url(/images/hero-bg.png)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      <div className="container relative z-10 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary glow-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Bianca Nunes
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">Desenvolvedora Full Stack</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvendo soluções inovadoras com foco em eficiência e qualidade técnica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="neon-button bg-primary" onClick={() => scrollTo('contact')}>Contate-me</Button>
            <Button size="lg" variant="outline" className="border-primary/50" onClick={() => scrollTo('contact')}>Ver Projetos</Button>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollTo('contact')} className="text-primary"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
