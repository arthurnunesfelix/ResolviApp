import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, Star, ChevronDown } from "lucide-react";
import { EASE } from "./motion";
import { IMG } from "../assets/images";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.55 } },
};
const item = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.05, ease: EASE } },
};

const STATS = [
  { value: "+2.400", label: "vidas resolvidas" },
  { value: "4,9",    label: "nota média" },
  { value: "97%",    label: "renovam o plano" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY    = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade     = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* ── Imagem de fundo com parallax ── */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <motion.img
          src={IMG.hero2}
          alt=""
          aria-hidden
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease: EASE }}
          className="img-cover"
        />
      </motion.div>

      {/* ── Gradientes de leitura ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/96 via-espresso/70 to-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/98 via-espresso/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-espresso to-transparent" />

      {/* ── Detalhe geométrico decorativo ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 lg:w-2/5"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(44,106,145,0.22) 0%, transparent 70%)",
        }}
      />

      {/* ── Conteúdo principal ── */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-10 lg:pb-28"
      >
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-cream backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-sky" />
              Assistência doméstica e de rotina
            </span>
          </motion.div>

          {/* Headline principal */}
          <motion.h1
            variants={item}
            className="display mt-6 max-w-[22ch] text-[clamp(2.6rem,6.8vw,5.6rem)] font-medium leading-[1.0] text-cream"
          >
            O dia acaba.
            <br />
            <span className="text-sky italic-accent">A lista, não.</span>
            <br />
            <span className="text-cream/80">E a culpa cresce.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mt-7 max-w-[42ch] text-[15.5px] font-medium leading-[1.8] text-cream/70 md:text-[17px]"
          >
            Enquanto você corre, a casa acumula, o pet espera e o fim de semana vira faxina.
            <br />
            <strong className="font-bold text-cream">A Resolvi RESOLVE!</strong> — e devolve tempo, energia e tranquilidade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#planos"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-sky px-8 py-4.5 text-[14px] font-extrabold text-azul-ink shadow-[0_20px_60px_-16px_rgba(74,139,181,0.75)] transition-all duration-300 hover:bg-white"
            >
              <span>Quero ter minha vida resolvida</span>
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.a>

            <motion.a
              href="#como-funciona"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 rounded-2xl border border-white/25 px-7 py-4.5 text-[14px] font-bold text-cream backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Entender como funciona
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2.5"
          >
            <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-cream/65">
              <BadgeCheck className="h-4 w-4 text-sky" />
              Profissionais verificadas
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-cream/65">
              {[...Array(5)].map((_,i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
              <span className="ml-1">4,9 de satisfação</span>
            </span>
            <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-cream/65">
              <span className="h-1 w-4 rounded-full bg-sky/70" />
              A partir de R$ 997/mês
            </span>
          </motion.div>
        </motion.div>

        {/* ── Stats flutuantes ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: EASE }}
          style={{ opacity: fade }}
          className="mt-14 grid w-full max-w-xs grid-cols-3 divide-x divide-white/15 overflow-hidden rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md sm:max-w-sm lg:max-w-md"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center px-3 py-4 text-center sm:px-5 sm:py-5">
              <span className="display text-[1.5rem] font-semibold text-sky sm:text-[1.75rem]">{s.value}</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/55">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Card flutuante de prova social (desktop) ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1.1, ease: EASE }}
        style={{ opacity: fade }}
        className="absolute bottom-28 right-8 z-20 hidden w-72 xl:block"
      >
        <div className="animate-float glass rounded-3xl border border-white/40 p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azul-deep text-cream">
              <Star className="h-4.5 w-4.5 fill-current" />
            </div>
            <div>
              <p className="text-[13px] font-semibold leading-snug text-ink">
                "Finalmente chego em casa e respiro fundo."
              </p>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-clay">
                Camila R. · São Paulo
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5">
            {[...Array(5)].map((_,i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
            ))}
            <span className="ml-1 text-[10.5px] font-bold text-sand">4,9 · 2.400+ clientes</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-cream/30 pt-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
