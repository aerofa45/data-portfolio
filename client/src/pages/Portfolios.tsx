import { Navigation } from "@/components/Navigation";
import { usePortfolios } from "@/hooks/use-portfolios";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Portfolios() {
  const { data: portfolios, isLoading } = usePortfolios();

  return (
    <div className="bg-background min-h-screen pb-24">
      <Navigation />
      
      <div className="pt-40 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
            Case Studies
          </h1>
          <div className="w-24 h-1 bg-primary mb-8" />
          <p className="text-xl text-white/60 font-light max-w-2xl">
            A curated collection of data analysis projects demonstrating expertise in web scraping, SQL querying, and visualization.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[400px] bg-white/5 animate-pulse rounded-sm" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {portfolios?.map((portfolio, index) => (
              <PortfolioCard 
                key={portfolio.id} 
                portfolio={portfolio} 
                index={index} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PortfolioCard({ portfolio, index }: { portfolio: any, index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={cn(
        "group cursor-pointer",
        !isEven && "md:mt-24" // Staggered grid effect
      )}
    >
      <Link href={`/portfolios/${portfolio.id}`}>
        <div className="relative overflow-hidden aspect-[4/3] mb-8 bg-secondary">
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
          <img 
            src={portfolio.imageUrl} 
            alt={portfolio.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100"
          />
          <div className="absolute bottom-6 right-6 z-20 bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
        
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-primary text-xs font-mono uppercase tracking-widest">
            0{index + 1} / {portfolio.category}
          </span>
          <span className="text-white/40 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Analysis
          </span>
        </div>
        
        <h2 className="font-display text-3xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {portfolio.title}
        </h2>
        <p className="text-white/50 font-light line-clamp-2">
          {portfolio.description}
        </p>
      </Link>
    </motion.div>
  );
}
