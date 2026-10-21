import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { EASE, Reveal, SectionHead, Stagger, StaggerItem } from "./motion";
import { cn } from "../utils/cn";

const QUOTES = [
  {
    text: "Meu sábado deixou de ser faxina. Agora é parque com o Thor, almoço com amigas e ler deitada no sofá. Simples assim.",
    name: "Camila R.",
    meta: "31 anos · Advogada · São Paulo",
    initials: "CR",
    plan: "Plano Prático",
    bg: "bg-azul-deep",
    wide: false,
    rating: 5,
  },
  {
    text: "Chego em casa e parece que alguém apertou um botão: tudo no lugar, sem eu ter tocado em nada. Minha cabeça agradece todo dia.",
    name: "Rafael M.",
    meta: "36 anos · Engenheiro · Belo Horizonte",
    initials: "RM",
    plan: "Plano Essencial",
    bg: "bg-cocoa",
    wide: false,
    rating: 5,
  },
  {
    text: "Depois do divórcio, reorganizar a vida parecia impossível. A Resolvi segurou a casa enquanto eu me recompunha. Foi mais do que um serviço — foi um suporte de verdade.",
    name: "Thaís L.",
    meta: "41 anos · Arquiteta · Curitiba",
    initials: "TL",
    plan: "Plano Premium",
    bg: "bg-azul-ink",
    wide: true,
    rating: 5,
  },
  {
    text: "As marmitas mudaram tudo. Como melhor, gasto menos com delivery e ainda sobra fim de semana livre.",
    name: "Diego P.",
    meta: "29 anos · Product Manager · São Paulo",
    initials: "DP",
    plan: "Plano Prático",
    bg: "bg-clay",
    wide: false,
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden bg-cream py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-sky-soft/60 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-parchment/80 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index="07"
            eyebrow="Quem já resolveu"
            title={
              <>
                Resultado prático.
                <br />
                <span className="italic-accent text-azul-deep">Alívio emocional.</span>
              </>
            }
          />
          {/* Rating summary */}
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4 rounded-2xl border border-sand/40 bg-white px-6 py-4 shadow-sm">
              <div>
                <p className="display text-4xl font-semibold text-ink">4,9</p>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_,i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-sand/40" />
              <div>
                <p className="text-[13px] font-bold text-ink">+2.400</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-cocoa/60">clientes ativos</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {QUOTES.map((q) => (
            <StaggerItem
              key={q.name}
              className={cn(q.wide && "md:col-span-2")}
            >
              <motion.div
                whileHover={{ y: -8, rotate: q.wide ? 0 : -0.5 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative h-full overflow-hidden rounded-[28px] border border-sand/35 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(99,73,47,0.3)] md:p-9"
              >
                {/* Aspas decorativas */}
                <div className="mb-5 flex items-center justify-between">
                  <Quote className="h-8 w-8 text-sky/60" />
                  <div className="flex gap-0.5">
                    {[...Array(q.rating)].map((_,i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                <p className={cn(
                  "display font-medium leading-snug text-ink",
                  q.wide ? "text-2xl md:text-[1.75rem]" : "text-[1.35rem]"
                )}>
                  {q.text}
                </p>

                <div className="mt-7 flex items-center gap-3.5">
                  <span className={cn(
                    "display flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold italic text-cream",
                    q.bg
                  )}>
                    {q.initials}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-ink">{q.name}</p>
                    <p className="text-[11.5px] text-cocoa/60">{q.meta}</p>
                  </div>
                  <span className="ml-auto rounded-full border border-sand/50 px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-clay">
                    {q.plan}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
