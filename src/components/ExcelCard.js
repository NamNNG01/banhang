import { cn } from "../lib/utils";
import { Sparkles, ArrowRight, Bot } from "lucide-react";
import { TYPING_PROMPTS } from "../constants/typingPrompts";
import { useTypingAnimation } from "../hooks/useTypingAnimation";

export default function ExcelCard() {
  const typingText = useTypingAnimation(TYPING_PROMPTS);

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0a0a1f]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/60 pointer-events-none ">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/3">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 text-xs text-white/40 font-medium">
          BangAI — BaoCao_Q1_2024.xlsx
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="px-2 py-0.5 rounded text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            AI ACTIVE
          </div>
        </div>
      </div>

      <div className="flex h-[340px] sm:h-[380px]">
        <div className="flex-1 overflow-hidden">
          <div className="flex text-[10px] font-semibold text-white/30 border-b border-white/6 bg-white/2">
            <div className="w-8 shrink-0 py-1.5 text-center border-r border-white/6" />
            {["A", "B", "C", "D"].map((col) => (
              <div
                key={col}
                className="flex-1 py-1.5 text-center border-r border-white/6"
              >
                {col}
              </div>
            ))}
          </div>

          {[
            ["1", "Tháng", "Doanh thu", "Vùng", "Tăng trưởng"],
            ["2", "Tháng 1", "150,000,000", "Miền Bắc", "+12%"],
            ["3", "Tháng 2", "198,000,000", "Miền Nam", "+8%"],
            ["4", "Tháng 3", "175,000,000", "Miền Bắc", "-5%"],
            ["5", "Tháng 4", "243,000,000", "Miền Trung", "+15%"],
            ["6", "Tháng 5", "267,000,000", "Miền Nam", "+10%"],
          ].map((row, ri) => (
            <div
              key={ri}
              className={cn(
                "flex text-[10px] border-b border-white/5 transition-colors",
                ri === 0
                  ? "text-white/50 font-semibold bg-white/3"
                  : "text-white/70 hover:bg-blue-500/5",
              )}
            >
              <div className="w-8 shrink-0 py-1.5 text-center text-white/20 border-r border-white/6">
                {row[0]}
              </div>
              {row.slice(1).map((cell, ci) => (
                <div
                  key={ci}
                  className={cn(
                    "flex-1 py-1.5 px-2 border-r border-white/5 truncate",
                    ri > 0 && ci === 1
                      ? "text-emerald-400 font-medium font-mono"
                      : ri > 0 && ci === 3
                        ? cell.startsWith("+")
                          ? "text-emerald-400"
                          : "text-red-400"
                        : "",
                  )}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}

          <div className="mt-auto px-3 py-2 border-t border-white/6 bg-white/2">
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-white/30">fx</span>
              <span className="text-emerald-400 font-mono">
                =SUMIF(C2:C6,"Miền Bắc",B2:B6)
              </span>
            </div>
          </div>
        </div>

        <div className="w-48 sm:w-56 border-l border-white/8 flex flex-col bg-gradient-to-b from-[#0d0d24] to-[#0a0a1e]">
          <div className="px-3 py-2.5 border-b border-white/8 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <span className="text-[11px] font-semibold text-white/80">
              BangAI Chat
            </span>
          </div>

          <div className="flex-1 overflow-hidden p-2.5 space-y-2.5 text-[10px]">
            <div className="bg-blue-600/20 border border-blue-500/20 rounded-lg px-2.5 py-2 text-white/80">
              <span className="text-blue-400 font-semibold block mb-0.5">
                Bạn
              </span>
              Tính tổng doanh thu Miền Bắc
            </div>

            <div className="bg-white/5 border border-white/8 rounded-lg px-2.5 py-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-2.5 h-2.5 text-violet-400" />
                <span className="text-violet-400 font-semibold">BangAI</span>
              </div>
              <div className="text-white/70 leading-relaxed mb-1.5">
                Dùng SUMIF để lọc theo vùng:
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded px-2 py-1 font-mono text-emerald-300 text-[9px]">
                =SUMIF(C:C,"Miền Bắc",B:B)
              </div>
              <div className="mt-1.5 text-emerald-400 font-semibold">
                → 325,000,000đ ✓
              </div>
            </div>

            <div className="bg-blue-600/20 border border-blue-500/20 rounded-lg px-2.5 py-2 text-white/80">
              <span className="text-blue-400 font-semibold block mb-0.5">
                Bạn
              </span>
              <span>{typingText}</span>
              <span className="inline-block w-0.5 h-3 bg-blue-400 ml-0.5 animate-[blink_1s_infinite]" />
            </div>
          </div>

          <div className="p-2 border-t border-white/8">
            <div className="flex items-center gap-1.5 bg-white/6 border border-white/10 rounded-lg px-2.5 py-1.5">
              <span className="flex-1 text-[10px] text-white/30">
                Hỏi gì đó...
              </span>
              <ArrowRight className="w-3 h-3 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
