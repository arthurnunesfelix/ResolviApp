import { motion } from "framer-motion";
import { HeartHandshake, MoonStar, House, ArrowRight } from "lucide-react";
import { EASE, Reveal, SectionHead } from "./motion";

const BLOCKS = [
  {
    icon: MoonStar,
    title: "Seu dia termina em paz",
    text: "Você fecha o trabalho e não abre uma segunda jornada. Chegar em casa virou a melhor parte do dia — não a mais pesada.",
    gradient: "from-azul-ink via-azul-deep to-azul",
    glow: "bg-azul/30",
    num: "01",
  },
  {
    icon: HeartHandshake,
    title: "Seu pet ganha mais de você",
    text: "Ele deixa de receber as suas sobras e passa a receber o seu melhor: energia, colo e presença de verdade.",
    gradient: "from-cocoa via-clay to-sand",
    glow: "bg-clay/25",
    num: "02",
  },
  {
    icon: House,
    title: "Sua casa volta ao seu favor",
    text: "Ambiente em ordem, mente em ordem. A casa trabalha para você — e o descanso, finalmente, descansa.",
    gradient: "from-espresso via-cocoa to-clay",
    glow: "bg-cocoa/25",
    num: "03",
  },
];

export default function Emotional() {
  return (
    <section id="viver-melhor" className="relative overflow-hidden bg-cream py-20 md:py-24">
      {/* Textura de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(220,238,248,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(193,168,130,0.2) 0%, transparent 45%)"
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index="04"
            eyebrow="O impacto real"
            title={
              <>
                A Resolvi é para você
                <br />
                que quer <span className="italic-accent text-azul-deep">viver melhor</span>
              </>
            }
          />
          <Reveal delay={0.2} className="max-w-xs">
            <p className="display text-xl italic leading-snug text-clay/80">
              "Leveza não é fazer nada. É poder escolher o que fazer."
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="group relative h-full overflow-hidden rounded-[32px]"
              >
                {/* Gradiente de fundo do card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${b.gradient} opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.14]`} />

                {/* Borda superior colorida */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${b.gradient}`} />

                <div className="relative h-full rounded-[32px] border border-sand/40 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(99,73,47,0.25)] md:p-9">
                  {/* Número decorativo */}
                  <span
                    aria-hidden
                    className="display pointer-events-none absolute -right-2 -top-4 text-[7rem] font-light italic leading-none text-ink/[0.04] transition-colors duration-500 group-hover:text-azul/[0.07]"
                  >
                    {b.num}
                  </span>

                  {/* Ícone */}
                  <motion.div
                    whileHover={{ rotate: -8 }}
                    transition={{ duration: 0.4 }}
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${b.gradient} shadow-lg`}
                  >
                    <b.icon className="h-6 w-6 text-white" strokeWidth={1.7} />
                  </motion.div>

                  <h3 className="display relative mt-8 text-[1.55rem] font-medium leading-tight text-ink">
                    {b.title}
                  </h3>
                  <p className="relative mt-4 text-[14.5px] leading-[1.75] text-cocoa/80">
                    {b.text}
                  </p>

                  {/* Linha decorativa animada */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.3 + i * 0.1 }}
                    className={`relative mt-8 block h-px origin-left bg-gradient-to-r ${b.gradient} opacity-30`}
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Texto âncora emocional */}
        <Reveal delay={0.3} className="mt-14 text-center">
          <p className="display mx-auto max-w-3xl text-balance text-3xl italic leading-snug text-ink/80 md:text-4xl">
            Menos lista. Menos culpa.{" "}
            <span className="text-azul-deep">Mais vida acontecendo.</span>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#planos"
              className="btn-shimmer group inline-flex items-center gap-2.5 rounded-2xl bg-ink px-8 py-4 text-sm font-bold text-cream shadow-[0_20px_50px_-20px_rgba(30,22,18,0.45)] transition-all duration-300 hover:bg-azul-deep"
            >
              Começar hoje
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#depoimentos" className="text-sm font-semibold text-cocoa/70 transition-colors hover:text-ink">
              Ler depoimentos reais
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
