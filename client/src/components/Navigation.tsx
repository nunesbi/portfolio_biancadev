import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Certificados', href: '#certificates' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const SHOW_AT_TOP_PX = 30
    const HIDE_AFTER_PX = 80

    const handleScroll = () => {
      const y = window.scrollY

      setScrolled(y > 50)

      if (y <= SHOW_AT_TOP_PX) {
        setHidden(false)
      } else if (y >= HIDE_AFTER_PX) {
        setHidden(true)
      }

      const sections = navItems.map((i) => i.href.substring(1))
      for (const s of sections) {
        const el = document.getElementById(s)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(s)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${scrolled ? 'glass-card border-b border-primary/30' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#home')
            }}
            className="text-2xl font-bold text-primary glow-text"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            bianca.dev
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item.href)
                }}
                className={`text-sm font-medium transition-colors ${
                  active === item.href.substring(1)
                    ? 'text-primary glow-text'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            className="neon-button hidden md:inline-flex"
            onClick={() => scrollTo('#contact')}
          >
            Contate-me
          </Button>
        </div>
      </div>
    </nav>
  )
}