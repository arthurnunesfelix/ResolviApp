import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";
import { EASE } from "./motion";

const LINKS = [
  { href: "#servicos",      label: "Serviços" },
  { href: "#planos",        label: "Planos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos",   label: "Depoimentos" },
  { href: "#faq",           label: "FAQ" },
];

/** Logo SVG inline com currentColor — funciona sobre qualquer fundo */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <a href="#inicio" aria-label="Resolvi — início" className="flex items-center">
      <span className={tone === "dark" ? "text-cream" : "text-azul-deep"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 520 120"
          fill="none"
          className="h-9 w-auto md:h-10"
          aria-hidden="true"
        >
          <g>
            <path d="M12 58 L52 18 L92 58" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 52 L22 102 L82 102 L82 52" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M40 102 L40 78 Q40 72 47 72 L57 72 Q64 72 64 78 L64 102" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="27" y="62" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="5"/>
            <rect x="65" y="62" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="5"/>
            <circle cx="52" cy="36" r="6.5" stroke="currentColor" strokeWidth="5"/>
            <path d="M52 42.5 L52 57 M44 49 L60 49 M46 57 L40 68 M58 57 L64 68" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
          </g>
          <text
            x="104"
            y="84"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="76"
            fontWeight="400"
            fill="currentColor"
            letterSpacing="-2"
          >Resolvi</text>
        </svg>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 60);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.15 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-sand/30 py-3 shadow-[0_8px_40px_-16px_rgba(30,22,18,0.22)]"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
          <Logo tone={scrolled ? "light" : "dark"} />

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "hover-line text-[12.5px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
                  scrolled ? "text-cocoa hover:text-ink" : "text-cream/80 hover:text-cream"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href="#planos"
              className={cn(
                "btn-shimmer group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.12em] transition-all duration-400",
                scrolled
                  ? "bg-ink text-cream hover:bg-azul-deep"
                  : "bg-cream/95 text-ink hover:bg-white"
              )}
            >
              Resolver minha vida
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl lg:hidden",
              scrolled ? "bg-ink/8 text-ink" : "bg-white/15 text-cream backdrop-blur"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-espresso px-7 py-7 text-cream lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo tone="dark" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cream"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-16 flex flex-col">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.55, ease: EASE }}
                  className="display border-b border-white/10 py-5 text-4xl font-medium italic text-cream"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.55, ease: EASE }}
              className="mt-auto space-y-3"
            >
              <a
                href="#planos"
                onClick={() => setOpen(false)}
                className="block w-full rounded-2xl bg-sky px-6 py-4 text-center text-sm font-bold text-azul-ink"
              >
                Quero ter minha vida resolvida
              </a>
              <p className="text-center text-xs text-cream/40">Planos a partir de R$ 997/mês</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
