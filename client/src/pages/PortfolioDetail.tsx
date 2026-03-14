import { Navigation } from "@/components/Navigation";
import { DashboardChart } from "@/components/DashboardChart";
import { CodeBlock } from "@/components/CodeBlock";
import { MagneticButton } from "@/components/MagneticButton";
import { usePortfolio } from "@/hooks/use-portfolios";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Database, Terminal, BarChart2 } from "lucide-react";
import { Link } from "wouter";

export default function PortfolioDetail() {
  const [, params] = useRoute("/portfolios/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: portfolio, isLoading } = usePortfolio(id);

  if (isLoading) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-display mb-4">Project Not Found</h1>
        <Link href="/portfolios">
          <MagneticButton>Return to Gallery</MagneticButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-24">
      <Navigation />

      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <img 
          src={portfolio.imageUrl} 
          alt={portfolio.title} 
          className="w-full h-full object-cover opacity-50 filter grayscale"
        />
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <Link href="/portfolios" className="inline-flex items-center text-white/50 hover:text-primary transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="uppercase tracking-widest text-xs">Back to Projects</span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-3 py-1 border border-primary/30 rounded-full text-primary text-xs uppercase tracking-widest bg-primary/5">
                  {portfolio.category}
                </span>
                <span className="text-white/40 text-xs uppercase tracking-widest font-mono">
                  {portfolio.visualizationType} Visualization
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl text-white mb-6 max-w-4xl">
                {portfolio.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Left Col */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Project Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <h3 className="text-primary font-display text-2xl mb-4 flex items-center">
                <Database className="w-5 h-5 mr-3" /> Project Overview
              </h3>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                {portfolio.description}
              </p>
            </motion.div>

            {/* Dashboard Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-display text-2xl mb-6 flex items-center">
                <BarChart2 className="w-5 h-5 mr-3" /> Data Analysis
              </h3>
              <DashboardChart 
                title="Analysis Results" 
                type={portfolio.visualizationType} 
                data={portfolio.data as any[]} 
                className="w-full shadow-2xl shadow-black/50"
              />
              <p className="mt-4 text-xs text-white/30 font-mono text-center uppercase tracking-widest">
                Real-time rendered data visualization
              </p>
            </motion.div>

          </div>

          {/* Sidebar - Code Snippet */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h3 className="text-primary font-display text-2xl mb-6 flex items-center">
                <Terminal className="w-5 h-5 mr-3" /> Extraction Logic
              </h3>
              <CodeBlock 
                code={portfolio.codeSnippet} 
                language="python" 
                className="shadow-2xl shadow-primary/5"
              />
              
              <div className="mt-8 p-6 border border-white/5 bg-white/5 rounded-lg backdrop-blur-sm">
                <h4 className="text-white font-display text-lg mb-4">Methodology</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-white/60 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0" />
                    Web scraped using Python & Selenium
                  </li>
                  <li className="flex items-start text-sm text-white/60 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0" />
                    Data cleaned and normalized with Pandas
                  </li>
                  <li className="flex items-start text-sm text-white/60 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0" />
                    Stored in PostgreSQL for querying
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
