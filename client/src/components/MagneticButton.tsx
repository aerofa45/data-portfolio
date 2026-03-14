import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  strength?: number;
}

export function MagneticButton({ 
  children, 
  className, 
  variant = "primary",
  strength = 30,
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX / (strength / 10));
    y.set(middleY / (strength / 10));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold transition-colors duration-300 rounded-sm overflow-hidden group";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-white hover:text-black",
    secondary: "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground",
    outline: "bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: mouseX, y: mouseY }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 font-body">{children}</span>
      {/* Hover fill effect */}
      {variant === 'outline' && (
        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 opacity-10" />
      )}
    </motion.button>
  );
}
