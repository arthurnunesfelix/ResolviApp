import { motion } from "framer-motion";
import { ChefHat, PawPrint, Sparkles, Wrench, ArrowRight } from "lucide-react";
import { EASE, Reveal, SectionHead } from "./motion";
import { cn } from "../utils/cn";
import { IMG } from "../assets/images";

const SERVICES = [
  {
    icon: Sparkles,
    num: "01",
    title: "Diaristas",
    tagline: "Casa em ordem, semana toda.",
    desc: "Limpeza profunda e organização com regularidade. Você entra em casa e sente — sem esforço nenhum da sua parte.",
    image: IMG.servicoLimpeza,
    alt: "Profissional organizando apartamento iluminado",
    points: [
      "Limpeza completa, do chão ao detalhe",
      "Frequência montada na sua rotina",
      "Profissional verificada e de confiança",
    ],
    accent: "from-azul-deep to-azul",
    accentText: "text-azul-deep",
    accentBg: "bg-sky-soft",
  },
  {
    icon: PawPrint,
    num: "02",
    title: "Cuidadoras de pet",
    tagline: "Seu pet não espera mais.",
    desc: "Passeio, alimentação e companhia. Você trabalha com a cabeça leve sabendo que ele está sendo cuidado.",
    image: IMG.servicoPet,
    alt: "Cuidadora de pet com cachorro no parque",
    points: [
      "Passeios com atualização no celular",
      "Alimentação e cuidados diários",
      "Mesma cuidadora sempre que possível",
    ],
    accent: "from-clay to-sand",
    accentText: "text-cocoa",
    accentBg: "bg-parchment",
  },
  {
    icon: ChefHat,
    num: "03",
    title: "Cozinheiras",
    tagline: "Comida caseira sem cozinhar.",
    desc: "Cardápio da semana montado com o seu gosto. Marmitas prontas, geladeira cheia, delivery no lixo.",
    image: IMG.servicoCozinha,
    alt: "Cozinheira preparando refeições caseiras",
    points: [
      "Cardápio semanal personalizado",
      "Marmitas e refeições frescas",
      "Cozinha entregue limpa",
    ],
    accent: "from-gold to-gold-soft",
    accentText: "text-cocoa",
    accentBg: "bg-gold-soft/40",
  },
  {
    icon: Wrench,
    num: "04",
    title: "Pequenos reparos",
    tagline: "A lista que nunca acabava — acabou.",
    desc: "Lâmpada, quadro, prateleira, veda, ajusta. Tudo aquilo que fica pendente há meses? Agora sai.",
    image: IMG.servicoReparos,
    alt: "Profissional de reparos em apartamento",
    points: [
      "Troca de lâmpadas e ajustes simples",
      "Quadros e prateleiras instalados",
      "Você agenda, a gente resolve",
    ],
    accent: "from-azul-ink to-azul-deep",
    accentText: "text-azul-ink",
    accentBg: "bg-sky-soft",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-cream-2/50 py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-sky-soft/60 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            index="03"
            eyebrow="Os serviços"
            title={
              <>
                O que a Resolvi
                <br />
                faz <span className="italic-accent text-azul-deep">por você</span>
              </>
            }
          />
          <Reveal delay={0.2} className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-cocoa/80">
              Um time, quatro frentes, zero acúmulo. A Resolvi cobre o que consome o seu tempo — para sobrar vida.
            </p>
          </Reveal>
        </div>

        {/* Grid de serviços compacto 2x2 */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICES.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="card-glow group relative flex flex-col overflow-hidden rounded-[28px] border border-sand/30 bg-white p-2 shadow-[0_12px_40px_-20px_rgba(99,73,47,0.2)]"
              >
                {/* Imagem Compacta */}
                <div className="relative h-44 overflow-hidden rounded-[22px] md:h-52">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="display absolute right-4 bottom-2 text-[3.5rem] font-semibold italic leading-none text-white/40">
                    {s.num}
                  </span>
                  <span className={cn(
                    "absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg",
                    s.accentBg
                  )}>
                    <s.icon className={cn("h-4.5 w-4.5", s.accentText)} />
                  </span>
                </div>

                {/* Conteúdo direto */}
                <div className="flex flex-col p-5 md:p-6">
                  <span className={cn("text-[10px] font-extrabold uppercase tracking-[0.24em]", s.accentText)}>
                    {s.tagline}
                  </span>
                  <h3 className="display mt-1.5 text-[1.7rem] font-medium text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-cocoa/85">
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br", s.accent)} />
                        <span className="text-[13px] font-semibold text-ink/80">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-sand/30">
                    <a
                      href="#planos"
                      className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider text-azul-deep transition-all hover:gap-3 hover:text-ink"
                    >
                      Ver planos
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Faixa de destaque copy */}
        <Reveal delay={0.2} className="mt-14">
          <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-10 md:px-14 md:py-12">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-azul-deep/30 blur-[80px]" />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="display max-w-2xl text-2xl italic text-cream md:text-3xl">
                  "Você paga por tarefas.{" "}
                  <span className="text-sky">Recebe vida de volta."</span>
                </p>
                <p className="mt-2 text-[13.5px] text-cream/55">Simples assim. Sem enrolação.</p>
              </div>
              <a
                href="#planos"
                className="btn-shimmer shrink-0 inline-flex items-center gap-2.5 rounded-2xl bg-sky px-7 py-4 text-sm font-extrabold text-azul-ink transition-colors duration-300 hover:bg-white"
              >
                Ver os planos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
