import { motion } from "framer-motion";
import { ArrowRight, Check, Crown, ShieldCheck, RefreshCcw, CalendarRange, Zap } from "lucide-react";
import { EASE, Reveal, SectionHead, Stagger, StaggerItem } from "./motion";
import { cn } from "../utils/cn";

const PLANS = [
  {
    name: "Essencial",
    badge: null,
    ideal: "Para solteiros que moram sozinhos e querem o básico sob controle.",
    price: "997",
    priceNote: "6 meses · sem surpresas",
    icon: ShieldCheck,
    color: "border-sand/50 bg-white",
    headerBg: "bg-cream-2",
    btnClass: "bg-ink text-cream hover:bg-azul-deep",
    accentColor: "text-azul-deep",
    checkColor: "bg-sky-soft text-azul-deep",
    items: [
      "2 diárias de limpeza por mês",
      "4 passeios com o pet por mês",
      "Agenda organizada pela Resolvi",
      "Profissionais verificadas",
      "Reagendamento flexível",
      "Suporte por WhatsApp",
    ],
  },
  {
    name: "Prático",
    badge: "Mais escolhido",
    ideal: "Para casais e rotinas intensas que precisam de constância e variedade.",
    price: "1.497",
    priceNote: "6 meses · o mais popular",
    icon: Zap,
    color: "border-azul/20 bg-azul-ink",
    headerBg: "bg-white/8",
    btnClass: "bg-sky text-azul-ink hover:bg-white",
    accentColor: "text-sky",
    checkColor: "bg-sky/20 text-sky",
    items: [
      "4 diárias de limpeza por mês",
      "8 passeios + alimentação do pet",
      "1 dia de cozinha com marmitas semanais",
      "1 chamado de pequenos reparos por mês",
      "Reagendamento flexível",
      "Atendimento prioritário",
    ],
  },
  {
    name: "Premium",
    badge: null,
    ideal: "Para quem quer a vida resolvida de ponta a ponta, sem lacunas.",
    price: "1.997",
    priceNote: "6 meses · completo",
    icon: Crown,
    color: "border-gold/30 bg-white",
    headerBg: "bg-gold-soft/30",
    btnClass: "bg-ink text-cream hover:bg-cocoa",
    accentColor: "text-cocoa",
    checkColor: "bg-gold-soft/50 text-cocoa",
    items: [
      "8 diárias de limpeza por mês",
      "12 passeios + cuidados completos com pet",
      "2 dias de cozinha com cardápio semanal",
      "2 chamados de reparos por mês",
      "Profissional fixa na sua rotina",
      "Suporte dedicado e resposta rápida",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planos" className="relative overflow-hidden bg-espresso py-20 md:py-24">
      {/* Luzes */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-azul-deep/20 blur-[160px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-clay/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHead
          index="05"
          tone="dark"
          eyebrow="Planos de 6 meses"
          align="center"
          title={
            <>
              Seis meses para a vida
              <br />
              <span className="italic-accent text-sky">entrar no eixo</span>
            </>
          }
          description="Três ritmos, um destino: rotina resolvida. Tempo de sobra para sentir — e manter — a diferença."
        />

        {/* Garantia inline */}
        <Reveal delay={0.15} className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {[
            { icon: ShieldCheck, text: "Sem letras miúdas" },
            { icon: RefreshCcw, text: "Troque serviços quando quiser" },
            { icon: CalendarRange, text: "Reagende sem custo" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-cream/55">
              <Icon className="h-3.5 w-3.5 text-sky/70" />
              {text}
            </span>
          ))}
        </Reveal>

        <Stagger className="mt-14 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {PLANS.map((p) => {
            const isFeatured = !!p.badge;
            return (
              <StaggerItem key={p.name} className="h-full">
                <motion.div
                  whileHover={{ y: -12, scale: 1.015 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[32px] border",
                    p.color,
                    isFeatured
                      ? "shadow-[0_60px_120px_-50px_rgba(74,139,181,0.8)] lg:-my-6 lg:py-4"
                      : "shadow-[0_30px_70px_-40px_rgba(0,0,0,0.7)]"
                  )}
                >
                  {/* Badge */}
                  {p.badge && (
                    <div className="absolute -top-0 left-0 right-0 flex justify-center pt-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sky px-4 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-azul-ink shadow-lg">
                        <Crown className="h-3 w-3" />
                        {p.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className={cn("px-8 pt-8 pb-6 md:px-9", isFeatured && "pt-12")}>
                    <div className={cn("mb-5 inline-flex items-center gap-2 rounded-xl px-3.5 py-2", p.headerBg)}>
                      <p.icon className={cn("h-4 w-4", p.accentColor)} />
                      <span className={cn("text-[11px] font-extrabold uppercase tracking-[0.22em]", p.accentColor)}>
                        {p.name}
                      </span>
                    </div>

                    <p className={cn(
                      "min-h-[48px] text-[13px] leading-snug",
                      isFeatured ? "text-cream/65" : "text-cocoa/75"
                    )}>
                      {p.ideal}
                    </p>

                    {/* Preço */}
                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span className={cn("text-sm font-bold", p.accentColor)}>R$</span>
                      <span className={cn(
                        "display text-[3.2rem] font-semibold leading-none tracking-tight",
                        isFeatured ? "text-cream" : "text-ink"
                      )}>
                        {p.price}
                      </span>
                      <span className={cn("mb-1 text-sm font-bold", isFeatured ? "text-cream/50" : "text-cocoa/60")}>
                        /mês
                      </span>
                    </div>
                    <p className={cn("mt-1 text-[11.5px] font-semibold", isFeatured ? "text-cream/40" : "text-cocoa/50")}>
                      {p.priceNote}
                    </p>
                  </div>

                  {/* Divisor */}
                  <div className={cn("mx-8 h-px", isFeatured ? "bg-white/10" : "bg-sand/40")} />

                  {/* Itens */}
                  <div className="flex flex-1 flex-col px-8 py-6 md:px-9">
                    <ul className="flex-1 space-y-3.5">
                      {p.items.map((it, i) => (
                        <motion.li
                          key={it}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.06 }}
                          className="flex items-start gap-3"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.15 + i * 0.06 }}
                            className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", p.checkColor)}
                          >
                            <Check className="h-3 w-3" strokeWidth={3.5} />
                          </motion.span>
                          <span className={cn("text-[13.5px] font-medium leading-snug", isFeatured ? "text-cream/85" : "text-ink/80")}>
                            {it}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.a
                      href="#assinar"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={cn(
                        "btn-shimmer group mt-8 inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-sm font-extrabold transition-all duration-300",
                        p.btnClass
                      )}
                    >
                      Assinar este plano
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Nota de rodapé */}
        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-[12.5px] text-cream/35">
            Todos os planos têm duração de 6 meses. Após esse período, você renova somente se quiser.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
