/* eslint-disable react/jsx-no-useless-fragment */
"use client";

import { motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = MotionProps & {
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

export function Reveal({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

