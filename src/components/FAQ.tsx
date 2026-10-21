import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { EASE, Reveal, SectionHead } from "./motion";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "Quem são as profissionais? Posso confiar dentro de casa?",
    a: "Todas passam por verificação de antecedentes, checagem de referências e treinamento da Resolvi. Antes da primeira visita, você recebe o perfil completo de quem vai atender você — nome, foto e avaliações de outros clientes.",
  },
  {
    q: "E se eu precisar reagendar um dia?",
    a: "Sem drama. Avise com antecedência pelo WhatsApp e a gente remarca dentro da sua semana. A rotina é sua — ela se encaixa na vida, não o contrário.",
  },
  {
    q: "Por que os planos têm 6 meses?",
    a: "Porque rotina boa é rotina constante. Seis meses é o tempo para a casa entrar no eixo, as profissionais aprenderem suas preferências e você sentir a diferença de verdade. Depois, você renova só se fizer sentido.",
  },
  {
    q: "O que entra nos pequenos reparos?",
    a: "Trocar lâmpada, pendurar quadros e prateleiras, regular portas, vedações e ajustes simples do dia a dia. Obras, elétrica pesada e hidráulica ficam de fora — nesses casos, indicamos parceiros de confiança.",
  },
  {
    q: "Posso trocar um serviço por outro no mês?",
    a: "Pode. Flexibilidade faz parte do plano. Dá para adaptar a frequência e trocar frentes — mais passeios num mês, mais cozinha no outro — combinando com a nossa equipe pelo WhatsApp.",
  },
  {
    q: "E se eu não me adaptar à profissional?",
    a: "A gente troca. Sem custo, sem constrangimento e sem você precisar explicar duas vezes. O encaixe certo é parte do serviço.",
  },
  {
    q: "A Resolvi atende a minha cidade?",
    a: "Atendemos as principais regiões de São Paulo, Rio de Janeiro, Curitiba, Belo Horizonte e outras cidades. Fale com a gente pelo WhatsApp para confirmar o seu bairro.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Mensalidade fixa, sem surpresa: Pix ou cartão de crédito. O valor não muda durante os 6 meses do plano. Sem taxas ocultas, sem custo extra por reagendamento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream-2/40 py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-sky-soft/50 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_1.6fr] lg:gap-20 lg:px-10">

        {/* Sidebar sticky */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            index="08"
            eyebrow="Dúvidas"
            title={
              <>
                Perguntas que a
                <br />
                cabeça faz antes{" "}
                <span className="italic-accent text-azul-deep">de relaxar</span>
              </>
            }
            description="Transparência primeiro. Se a sua dúvida não estiver aqui, chame a gente — respondemos de verdade."
          />
          <Reveal delay={0.25} className="mt-8">
            <a
              href="#assinar"
              className="group inline-flex items-center gap-2 text-[13.5px] font-bold text-azul-deep transition-all duration-300 hover:gap-3.5 hover:text-ink"
            >
              Falar diretamente com a Resolvi
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          {/* Mini card de garantia */}
          <Reveal delay={0.35} className="mt-10 hidden lg:block">
            <div className="rounded-2xl border border-sand/50 bg-white p-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-azul-deep">Nossa promessa</p>
              <p className="display mt-2 text-xl font-medium text-ink">
                Se não resolver,{" "}
                <span className="italic-accent text-clay">a gente resolve de outro jeito.</span>
              </p>
              <p className="mt-2 text-[13px] text-cocoa/70">
                Troca de profissional sem custo, reagendamento flexível, suporte humano 7 dias por semana.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Acordeão */}
        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={cn(
                  "border-b transition-colors duration-300",
                  isOpen ? "border-azul/20" : "border-sand/40"
                )}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      "display text-[1.1rem] font-medium leading-snug transition-colors duration-300 md:text-[1.2rem]",
                      isOpen ? "text-azul-deep" : "text-ink group-hover:text-azul-deep"
                    )}>
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "var(--color-azul-deep)" : "transparent" }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300",
                        isOpen ? "border-azul-deep text-cream" : "border-sand/60 text-cocoa/70 group-hover:border-azul-deep group-hover:text-azul-deep"
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-12 text-[14.5px] leading-[1.8] text-cocoa/85">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
