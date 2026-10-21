import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { IMG } from "../assets/images";

export default function FinalCTA() {
  return (
    <section id="assinar" className="relative overflow-hidden bg-espresso">
      {/* Imagem com overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={IMG.hero2}
          alt=""
          aria-hidden
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="img-cover saturate-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/98 via-espresso/80 to-espresso/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/50 to-transparent" />
      </div>

      {/* Luz azul atmosférica */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-azul-deep/25 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-5 py-32 text-center lg:px-10 lg:py-40">
        <Stagger>
          <StaggerItem>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-cream backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-sky" />
              O próximo passo é o mais simples
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="display mx-auto mt-8 max-w-4xl text-balance text-[clamp(2.2rem,5.5vw,4.4rem)] font-medium leading-[1.04] text-cream">
              Daqui a seis meses, sua rotina
              <br />
              pode estar exatamente igual.
              <br />
              <span className="italic-accent text-sky">Ou resolvida.</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-7 max-w-xl text-[15.5px] leading-[1.75] text-cream/60 md:text-[17px]">
              Mais tempo. Menos preocupação. Uma vida mais leve —
              começando agora, sem burocracia.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-10 flex flex-col items-center gap-4">
            <motion.a
              href="#planos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer group inline-flex items-center gap-3 rounded-2xl bg-sky px-10 py-5 text-[15px] font-extrabold text-azul-ink shadow-[0_30px_80px_-20px_rgba(74,139,181,0.85)] transition-all duration-300 hover:bg-white"
            >
              Assinar 6 meses de paz
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.a>

            <Reveal delay={0.2}>
              <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] font-semibold text-cream/45">
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-sky" />
                  A partir de R$ 997/mês
                </span>
                <span className="h-1 w-1 rounded-full bg-cream/30" />
                <span>Profissionais verificadas</span>
                <span className="h-1 w-1 rounded-full bg-cream/30" />
                <span>Reagendamento flexível</span>
              </p>
            </Reveal>
          </StaggerItem>
        </Stagger>

        {/* Depoimentos mini */}
        <Reveal delay={0.4} className="mt-16">
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            {[
              { text: "Muda a sua semana.", name: "Ana C." },
              { text: "Vale cada centavo.", name: "Bruno M." },
              { text: "Não vivo sem.", name: "Letícia P." },
            ].map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                </div>
                <p className="display text-lg italic text-cream/70">&ldquo;{t.text}&rdquo;</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-cream/40">{t.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
