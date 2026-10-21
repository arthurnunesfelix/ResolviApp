import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem, SectionHead } from "./motion";

const SEM = [
  { text: "Sábado virou sinônimo de faxina obrigatória" },
  { text: "Pet esperando um passeio que nunca chega" },
  { text: "Comida ruim por falta de tempo para cozinhar" },
  { text: "Pilha de reparos pendentes há meses" },
  { text: "Fim de semana exausto, sem ter descansado" },
];

const COM = [
  { text: "Casa limpa toda semana, sem tirar uma hora sua" },
  { text: "Pet passeado e cuidado com carinho todo dia" },
  { text: "Comida caseira pronta esperando na geladeira" },
  { text: "Reparos resolvidos sem dor de cabeça" },
  { text: "Fim de semana de verdade — livre e leve" },
];

export default function Why() {
  return (
    <section id="porque" className="relative overflow-hidden bg-cream py-20 md:py-24">
      {/* Blob decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-sky-soft/50 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index="01"
            eyebrow="O problema real"
            title={
              <>
                Por que a sua vida
                <br />
                <span className="italic-accent text-azul-deep">precisa</span> da Resolvi?
              </>
            }
          />
          <Reveal delay={0.2} className="max-w-xs">
            <p className="display text-xl italic leading-snug text-clay/80">
              "Tempo não estica. Mas dá para usar melhor."
            </p>
          </Reveal>
        </div>

        {/* Grid comparativo redesenhado */}
        <div className="relative mt-14 grid gap-5 lg:grid-cols-2 lg:gap-8">

          {/* Badge VS central */}
          <Reveal
            delay={0.4}
            className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="display flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-base italic text-cream shadow-2xl ring-4 ring-cream"
            >
              vs
            </motion.div>
          </Reveal>

          {/* ── ANTES ── */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[32px] bg-cream-2 p-1">
              {/* Header do card */}
              <div className="flex items-center gap-3 rounded-[26px] bg-cream-3/80 px-7 py-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay/20">
                  <X className="h-4 w-4 text-clay" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-clay">Sem Resolvi</p>
                  <p className="display mt-0.5 text-lg font-medium text-ink">A rotina engole você</p>
                </div>
              </div>

              {/* Lista */}
              <div className="p-6 pt-4 md:p-8 md:pt-5">
                <Stagger className="space-y-3.5">
                  {SEM.map((s) => (
                    <StaggerItem key={s.text}>
                      <div className="flex items-start gap-3.5">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay/15">
                          <X className="h-3 w-3 text-clay/80" strokeWidth={3} />
                        </span>
                        <span className="text-[14.5px] leading-snug text-cocoa/75 line-through decoration-clay/30 decoration-[1.5px]">
                          {s.text}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <div className="mt-8 rounded-2xl bg-clay/12 px-5 py-4">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-clay">
                    Resultado final
                  </p>
                  <p className="mt-1 text-[14.5px] font-semibold text-cocoa">
                    Correria, acúmulo, culpa — todo dia.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── DEPOIS ── */}
          <Reveal delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-[32px] bg-azul-ink p-1 shadow-[0_50px_100px_-40px_rgba(26,63,86,0.7)]">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky/20 blur-[80px]"
              />
              {/* Header do card */}
              <div className="flex items-center gap-3 rounded-[26px] bg-white/8 px-7 py-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/20">
                  <Check className="h-4 w-4 text-sky" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky/80">Com Resolvi</p>
                  <p className="display mt-0.5 text-lg font-medium text-cream">A vida finalmente respira</p>
                </div>
              </div>

              {/* Lista */}
              <div className="p-6 pt-4 md:p-8 md:pt-5">
                <Stagger className="space-y-3.5">
                  {COM.map((s) => (
                    <StaggerItem key={s.text}>
                      <div className="flex items-start gap-3.5">
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky/25"
                        >
                          <Check className="h-3 w-3 text-sky" strokeWidth={3} />
                        </motion.span>
                        <span className="text-[14.5px] font-semibold leading-snug text-cream/90">
                          {s.text}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <div className="mt-8 rounded-2xl bg-sky/15 px-5 py-4">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-sky/80">
                    Resultado final
                  </p>
                  <p className="mt-1 text-[14.5px] font-semibold text-cream">
                    Tempo, ordem e uma leveza que você esqueceu que existia.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA inline */}
        <Reveal delay={0.3} className="mt-12 text-center">
          <a
            href="#planos"
            className="btn-shimmer group inline-flex items-center gap-3 rounded-2xl bg-ink px-8 py-4 text-sm font-bold text-cream shadow-[0_20px_50px_-20px_rgba(30,22,18,0.5)] transition-all duration-300 hover:bg-azul-deep"
          >
            Quero isso na minha vida agora
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
