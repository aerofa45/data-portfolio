import { Navigation } from "@/components/Navigation";
import { MagneticButton } from "@/components/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Database, Code, LineChart } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div ref={containerRef} className="bg-background min-h-screen relative">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        {/* Abstract Background - Unsplash Tech/Luxury */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop"
            alt="Abstract Data Visualization"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-6">
              Data Science Portfolio
            </h2>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8">
              Analysis <span className="italic text-white/50">&</span> <br/>
              Intelligence
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Extracting value from raw data through advanced scraping, SQL analytics, and Python automation.
              Focusing on Finance, Healthcare, and Signal Processing.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/portfolios">
                <MagneticButton strength={40} className="w-full md:w-auto">
                  Explore Analysis
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.section>

      {/* Intro Grid */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <Feature 
            icon={<Database className="w-8 h-8 text-primary" />}
            title="Extraction"
            description="Advanced web scraping using Python Scrapy & Selenium. Handling complex DOMs and anti-bot measures."
          />
          <Feature 
            icon={<Code className="w-8 h-8 text-primary" />}
            title="Processing"
            description="Cleaning and transforming raw unstructured data into actionable SQL databases and structured datasets."
          />
          <Feature 
            icon={<LineChart className="w-8 h-8 text-primary" />}
            title="Visualization"
            description="Interactive dashboards using modern frontend frameworks to tell compelling stories with data."
          />
        </div>
      </section>

      {/* Parallax Quote Section */}
      <section className="relative py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Global Network"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display text-4xl md:text-5xl italic text-white/90 leading-tight">
            "Data is the new oil. It's valuable, but if unrefined it cannot really be used."
          </blockquote>
          <cite className="block mt-8 text-primary text-sm uppercase tracking-widest not-italic">
            — Clive Humby
          </cite>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-white/30 text-xs uppercase tracking-widest">
        <p>© 2024 Analytics Portfolio. Designed with precision.</p>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group hover:-translate-y-2 transition-transform duration-500">
      <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{icon}</div>
      <h3 className="font-display text-2xl text-white mb-4">{title}</h3>
      <p className="text-white/50 leading-relaxed font-light">{description}</p>
    </div>
  );
}
