import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN = [0.4, 0, 1, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 52, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
};

export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

/** Revela elemento ao entrar na viewport */
export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  y = 52,
}: {
  children?: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.95, ease: EASE, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Container stagger */
export function Stagger({
  children,
  className,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
      variants={fast ? staggerFast : staggerParent}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/** Cabeçalho de seção editorial */
export function SectionHead({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const isCentered = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", isCentered && "mx-auto text-center", className)}>
      <Reveal>
        <div className={cn("flex items-center gap-3", isCentered && "justify-center")}>
          {index && (
            <span className={cn("display text-xs italic opacity-60", isDark ? "text-sky" : "text-azul-deep")}>
              {index}
            </span>
          )}
          <span className={cn("h-px", index ? "w-8" : "w-6", isDark ? "bg-sky/50" : "bg-sand")} />
          <span className={cn(
            "text-[10.5px] font-extrabold uppercase tracking-[0.32em]",
            isDark ? "text-sky/80" : "text-azul-deep/70"
          )}>
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className={cn(
          "display mt-4 text-balance text-[clamp(1.9rem,4.2vw,3.4rem)] font-medium leading-[1.04]",
          isDark ? "text-cream" : "text-ink"
        )}>
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.18}>
          <p className={cn(
            "mt-5 text-[15px] leading-[1.75] md:text-base",
            isCentered && "mx-auto",
            isDark ? "text-cream/65" : "text-cocoa/85",
            "max-w-2xl"
          )}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
