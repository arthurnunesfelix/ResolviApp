import { motion } from "framer-motion";
import { ClipboardCheck, CalendarCog, Sofa, ArrowRight } from "lucide-react";
import { EASE, Reveal, SectionHead, Stagger, StaggerItem } from "./motion";

const STEPS = [
  {
    icon: ClipboardCheck,
    num: "01",
    title: "Escolha o plano",
    text: "Essencial, Prático ou Premium. O que encaixa na sua rotina e no seu bolso. Sem burocracia, sem formulário longo.",
    color: "bg-sky-soft",
    iconColor: "text-azul-deep",
  },
  {
    icon: CalendarCog,
    num: "02",
    title: "Monte sua rotina",
    text: "Você diz os dias, os horários e as prioridades. A Resolvi organiza tudo e designa as profissionais certas.",
    color: "bg-parchment",
    iconColor: "text-cocoa",
  },
  {
    icon: Sofa,
    num: "03",
    title: "Deixe o resto com a Resolvi",
    text: "Profissional certa na sua porta, casa resolvida, vida mais leve. A sua parte? Só aproveitar.",
    color: "bg-azul-ink/10",
    iconColor: "text-azul-deep",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-cream-2/50 py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[500px] w-[400px] rounded-full bg-sky-soft/70 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index="06"
            eyebrow="Na prática"
            title={
              <>
                Três passos.
                <br />
                <span className="italic-accent text-azul-deep">Nenhuma complicação.</span>
              </>
            }
          />
          <Reveal delay={0.2} className="max-w-xs">
            <p className="text-[15px] leading-relaxed text-cocoa/75">
              Sem formulários intermináveis, sem filas, sem mistério. Você decide, a gente executa.
            </p>
          </Reveal>
        </div>

        <Stagger className="relative mt-14 grid gap-5 md:grid-cols-3 lg:gap-8">
          {/* Linha conectora */}
          <div
            aria-hidden
            className="absolute left-[16.5%] right-[16.5%] top-[56px] hidden h-px border-t border-dashed border-sand md:block"
          />

          {STEPS.map((s, i) => (
            <StaggerItem key={s.num}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative h-full rounded-[28px] border border-sand/40 bg-white p-8 shadow-[0_16px_50px_-25px_rgba(99,73,47,0.3)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-30px_rgba(74,139,181,0.35)] md:p-9"
              >
                {/* Número decorativo */}
                <span
                  aria-hidden
                  className="display pointer-events-none absolute -top-5 right-6 text-[5rem] font-light italic leading-none text-ink/[0.05]"
                >
                  {s.num}
                </span>

                {/* Ícone + seta conectora */}
                <div className="relative flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ duration: 0.35 }}
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${s.color} shadow-sm`}
                  >
                    <s.icon className={`h-7 w-7 ${s.iconColor}`} strokeWidth={1.6} />
                  </motion.div>
                  {i < STEPS.length - 1 && (
                    <span className="absolute -right-14 top-6 hidden text-sand md:block">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </div>

                <h3 className="display mt-7 text-[1.55rem] font-medium text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-cocoa/80">{s.text}</p>

                {/* Tag de ordem */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sand/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-azul-deep/60" />
                  <span className="text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-cocoa/60">Passo {s.num}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.3} className="mt-12 text-center">
          <a
            href="#planos"
            className="btn-shimmer group inline-flex items-center gap-2.5 rounded-2xl border-2 border-ink px-8 py-4 text-sm font-extrabold text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
          >
            Começar pelo primeiro passo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
