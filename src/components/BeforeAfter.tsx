import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";
import { EASE, Reveal, SectionHead } from "./motion";
import { IMG } from "../assets/images";

const ANTES = [
  "Sábado virou sinônimo de faxina obrigatória",
  "O pet olhando para a porta esperando o passeio",
  "Reunião, trânsito, louça. Nessa ordem. Toda semana",
  "Descanso que nunca chega de verdade",
];

const DEPOIS = [
  "Você chega e a casa já está pronta pra você",
  "Pet passeado, alimentado e feliz — sem você fazer nada",
  "Comida caseira pronta na geladeira toda semana",
  "Fim de semana é seu. De verdade. Finalmente",
];

export default function BeforeAfter() {
  return (
    <section
      id="transformacao"
      className="relative overflow-hidden bg-espresso py-20 md:py-24"
    >
      {/* Luzes atmosféricas */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-clay/20 blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-azul-deep/30 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHead
          index="02"
          tone="dark"
          eyebrow="A transformação"
          align="center"
          title={
            <>
              Da busca pela solução
              <br />
              ao <span className="italic-accent text-sky">alívio real</span>
            </>
          }
          description="Não é mágica. É método, pessoas certas e rotina bem montada. Veja o que muda quando a casa deixa de ser a sua segunda jornada."
        />

        {/* ── Grid Antes / Depois ── */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:gap-8">

          {/* ANTES */}
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-white/8 bg-white/5">
              {/* Imagem com reveal */}
              <div className="relative overflow-hidden">
                <img
                  src={IMG.antes}
                  alt="Mulher exausta em uma cozinha bagunçada"
                  className="h-60 w-full object-cover saturate-[0.4] transition-all duration-700 group-hover:saturate-[0.55] md:h-72"
                />
                {/* Badge */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-espresso/80 px-4 py-2 backdrop-blur-sm">
                  <TrendingDown className="h-4 w-4 text-clay" />
                  <span className="display text-base italic text-cream/90">Antes</span>
                </div>
                {/* Vinheta */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              </div>

              <div className="p-7 md:p-8">
                <h3 className="display text-[1.6rem] font-medium leading-tight text-cream/90">
                  A casa pedia socorro.{" "}
                  <span className="italic-accent text-clay/80">E a agenda dizia não.</span>
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {ANTES.map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 h-1.5 w-4 shrink-0 rounded-full bg-clay/50" />
                      <span className="text-[14px] leading-snug text-cream/55">{t}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="display mt-7 border-t border-white/10 pt-6 text-base italic text-clay/70">
                  Viver virou administrar pendências.
                </p>
              </div>
            </div>
          </Reveal>

          {/* DEPOIS */}
          <Reveal delay={0.15}>
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-sky/20 bg-azul-ink/60">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-azul-deep/30 via-transparent to-transparent"
              />
              {/* Imagem */}
              <div className="relative overflow-hidden">
                <img
                  src={IMG.depois}
                  alt="Homem feliz brincando com o cachorro em sala organizada"
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-72"
                />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-sky px-4 py-2">
                  <TrendingUp className="h-4 w-4 text-azul-ink" />
                  <span className="display text-base font-semibold italic text-azul-ink">Depois</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-azul-ink/60 via-transparent to-transparent" />
              </div>

              <div className="relative p-7 md:p-8">
                <h3 className="display text-[1.6rem] font-medium leading-tight text-cream">
                  A mesma rotina.{" "}
                  <span className="italic-accent text-sky">Outra vida.</span>
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {DEPOIS.map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.3 + i * 0.1 }}
                        className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky"
                      />
                      <span className="text-[14px] font-semibold leading-snug text-cream/90">{t}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="display mt-7 border-t border-white/15 pt-6 text-base italic text-sky/80">
                  Chegar em casa virou a melhor parte do dia.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
