import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { EASE } from "./motion";

const SOCIAL = [
  { icon: MessageCircle, label: "WhatsApp", href: "#assinar" },
  { icon: Phone,         label: "Telefone", href: "#assinar" },
  { icon: Mail,          label: "E-mail",   href: "#assinar" },
];

const NAV = [
  ["#servicos",      "Serviços"],
  ["#planos",        "Planos"],
  ["#como-funciona", "Como funciona"],
  ["#depoimentos",   "Depoimentos"],
  ["#faq",           "FAQ"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* Luzes */}
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-azul-deep/20 blur-[100px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-20 h-60 w-60 rounded-full bg-clay/15 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <a href="#inicio" aria-label="Resolvi" className="flex items-center text-cream">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" fill="none" className="h-9 w-auto" aria-hidden="true">
              <path d="M12 58 L52 18 L92 58" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 52 L22 102 L82 102 L82 52" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M40 102 L40 78 Q40 72 47 72 L57 72 Q64 72 64 78 L64 102" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="27" y="62" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="5"/>
              <rect x="65" y="62" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="5"/>
              <circle cx="52" cy="36" r="6.5" stroke="currentColor" strokeWidth="5"/>
              <path d="M52 42.5 L52 57 M44 49 L60 49 M46 57 L40 68 M58 57 L64 68" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
              <text x="104" y="84" fontFamily="Georgia, 'Times New Roman', serif" fontSize="76" fontWeight="400" fill="currentColor" letterSpacing="-2">Resolvi</text>
            </svg>
          </a>
            <p className="mt-5 text-[14px] leading-[1.75] text-cream/55">
              Assistência prática para facilitar o dia a dia. Diaristas,
              cuidadoras de pet, cozinheiras e reparos — para a sua rotina
              dar conta do que importa: você.
            </p>

            {/* Redes */}
            <div className="mt-6 flex gap-2.5">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream/12 text-cream/50 transition-all duration-300 hover:border-sky hover:bg-sky hover:text-azul-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-sand/70">Navegação</p>
              <ul className="mt-4 space-y-2.5">
                {NAV.map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="hover-line text-[13.5px] text-cream/55 transition-colors hover:text-cream">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-sand/70">Serviços</p>
              <ul className="mt-4 space-y-2.5 text-[13.5px] text-cream/45">
                <li>Diaristas</li>
                <li>Cuidadoras de pet</li>
                <li>Cozinheiras</li>
                <li>Pequenos reparos</li>
              </ul>
            </div>
            <div>
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.28em] text-sand/70">Contato</p>
              <ul className="mt-4 space-y-2.5 text-[13.5px] text-cream/45">
                <li>oi@resolvi.com.br</li>
                <li>(11) 4002-8922</li>
                <li>Seg–Sáb · 8h–20h</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-cream/12 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-[12px] text-cream/35">
            © {new Date().getFullYear()} Resolvi. Todos os direitos reservados. Feito para devolver o seu tempo.
          </p>
          <p className="display text-sm italic text-cream/50">
            "Tempo não estica. Resolvi."
          </p>
          <motion.a
            href="#inicio"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="group inline-flex items-center gap-2 text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-cream/45 transition-colors hover:text-cream"
          >
            Voltar ao topo
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-cream/15 transition-all duration-300 group-hover:border-sky group-hover:bg-sky group-hover:text-azul-ink">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
