import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "python", className }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg overflow-hidden border border-white/10 bg-[#0d0d0d]", className)}>
      <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
        </div>
        <div className="ml-4 text-xs font-mono text-white/40 uppercase tracking-widest">
          {language} analysis
        </div>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
