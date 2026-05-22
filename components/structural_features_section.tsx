'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { GAME_FEATURES } from "../app/game_data";
import { UserCircle, Building2, ShieldCheck } from "lucide-react";
import { Reveal } from '@/components/reveal';

interface StructuralFeaturesSectionProps {
  scrollY: number;
  HeaderMd?: string;
  SubheaderMd?: string;
  BodyMd?: string;
  HeaderSm?: string;
}

export const StructuralFeaturesSection: React.FC<StructuralFeaturesSectionProps> = ({ 
  scrollY,
  HeaderMd = '',
  SubheaderMd = '',
  BodyMd = '',
  HeaderSm = ''
}) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const MODAL_DETAILS: Record<number, { title: string; subtitle: string; content: React.ReactNode }> = {
    0: {
      title: "Intersectionality Lens",
      subtitle: "System Mechanics // Identity Matrices",
      content: (
        <div className="space-y-4 text-white">
          <p className={`${BodyMd} text-sm md:text-base leading-relaxed text-white/90`}>
            Instead of treating structural oppression as a monolith, the simulation relies on an <strong className="text-white font-bold">Intersectionality Matrix Engine</strong>. Players choose from distinct characters whose identities sit at the volatile crossroads of gender expression, class realities, and societal tracking metrics.
          </p>
          
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase text-white/50 tracking-wider">// Simulated Identities </p>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-3 bg-[#F4F5E1]/10 border border-[#F4F5E1]/20 rounded-xl p-3">
                <div className="text-white/80"><UserCircle className="w-6 h-6" /></div>
                <div>
                  <h5 className="text-xs font-mono font-bold text-white">Maya — The Corporate Suite</h5>
                  <p className="text-[11px] text-white/70">Navigates professional space double-binds where assertiveness violates gender expectations.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#F4F5E1]/10 border border-[#F4F5E1]/20 rounded-xl p-3">
                <div className="text-white/80"><Building2 className="w-6 h-6" /></div>
                <div>
                  <h5 className="text-xs font-mono font-bold text-white">Alex — The Campus Commons</h5>
                  <p className="text-[11px] text-white/70">Survives concrete administrative layouts constructed strictly within a binary template.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-[#F4F5E1]/20 rounded-xl p-3">
                <div className="text-white/80"><ShieldCheck className="w-6 h-6" /></div>
                <div>
                  <h5 className="text-xs font-mono font-bold text-white">Chris — The Fraternity House</h5>
                  <p className="text-[11px] text-white/70">Examines peer policing, alpha scripts, and heteronormative structural expectations.</p>
                </div>
              </div>
            </div>
          </div>

          <p className={`${BodyMd} text-xs text-white/70 italic leading-relaxed pt-2 border-l-2 border-[#F4F5E1] pl-4`}>
            By mapping these intersecting lines, the simulator illustrates how structural matrices reconfigure how oppressive cultural grids are felt from dawn until dark.
          </p>
        </div>
      )
    },
    1: {
      title: "Dual-Meter Equilibrium",
      subtitle: "System Mechanics // Mathematical Balance",
      content: (
        <div className="space-y-4 text-white">
          <p className={`${BodyMd} text-sm md:text-base leading-relaxed text-white/90`}>
            The core engine of the simulation operates as a Zero-Sum game. Every decision applies inverse modifications across two primary tracking bars:
          </p>
          
          <div className="bg-[#F4F5E1]/10 border border-[#F4F5E1]/20 backdrop-blur-sm rounded-xl p-4 font-mono text-xs space-y-3">
            <div>
              <p className="text-white font-bold uppercase tracking-wider">▲ Social Approval (SA)</p>
              <p className="text-white/70 text-[11px] mt-0.5">Measures institutional compliance, survival safety, and peer comfort. High SA keeps the machine pacified but induces dysphoria.</p>
            </div>
            <div className="border-t border-white/20 pt-2.5">
              <p className="text-white font-bold uppercase tracking-wider">▼ Authenticity Index (AE)</p>
              <p className="text-white/70 text-[11px] mt-0.5">Measures psychological autonomy, individual alignment, and identity integrity. High AE forces systemic friction and social penalties.</p>
            </div>
          </div>

          <p className="text-xs md:text-sm text-white font-mono bg-[#bb3535]/5 border border-[#F4F5E1]/30 p-3 rounded-lg leading-relaxed italic">
            <strong>⚠️ CRITICAL OVERRIDE:</strong> The system math is balanced so that achieving [100% SA + 100% AE] simultaneously is mathematically designed to be impossible. True systemic compromise requires balancing friction.
          </p>
        </div>
      )
    },
    2: {
      title: "Three-Act Structure",
      subtitle: "System Mechanics // Narrative Architecture",
      content: (
        <div className="space-y-3 text-white">
          <p className={`${BodyMd} text-sm md:text-base leading-relaxed text-white/90`}>
            The experiential matrix scales chronologically across a standardized day to track how microbehavior transitions into macro-structural pressures:
          </p>
          
          <div className="border-l-2 border-white pl-4 space-y-4 text-xs md:text-sm py-1">
            <div>
              <strong className="text-white block font-mono font-bold uppercase tracking-wide">Act I: The Morning (Body Politics)</strong>
              <span className="text-white/70 text-xs">Focuses on isolated personal presentation, morning dress codes, and family policing constraints.</span>
            </div>
            <div>
              <strong className="text-white block font-mono font-bold uppercase tracking-wide">Act II: The Afternoon (Institutional Spaces)</strong>
              <span className="text-white/70 text-xs">Pushes the character into public frameworks—classrooms, transit networks, and professional evaluation setups.</span>
            </div>
            <div>
              <strong className="text-white block font-mono font-bold uppercase tracking-wide">Act III: The Evening (Models of Intimacy)</strong>
              <span className="text-white/70 text-xs">Examines the private sphere, tracking how deeply macro heteronormative scripts rule dating rituals and love.</span>
            </div>
          </div>
        </div>
      )
    },
    3: {
      title: "Systemic Payoffs",
      subtitle: "System Mechanics // Sociological Evaluation",
      content: (
        <div className="space-y-4 text-white">
          <p className={`${BodyMd} text-sm md:text-base leading-relaxed text-white/90`}>
            There are no shallow video-game "Win" or "Lose" conditions. Instead, your balance curve is calculated against your chosen narrative endings:
          </p>
          
          <div className="bg-[#F4F5E1]/10 border border-[#F4F5E1]/20 backdrop-blur-sm rounded-xl p-4 font-mono text-xs space-y-2.5 text-white/90">
            <p><strong className="text-white font-bold">// "The Perfect Script" Ending:</strong> Triggered by max compliance. Result: Complete self-erasure and alienation at the cost of keeping the patriarchy comfortable.</p>
            <p><strong className="text-white font-bold">// "The Rebel" Ending:</strong> Triggered by max subversion. Result: High individual liberation but spikes massive social hostility and alienation tracking metrics.</p>
            <p><strong className="text-white font-bold">// "Strategic Subversion" Ending:</strong> Triggered by tactical balance. Result: Pragmatic, sustainable boundary-pushing across oppressive social systems.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <section id="features" className="py-28 px-6 max-w-5xl mx-auto space-y-14 relative overflow-hidden">
        <Reveal>
          <div className="text-center space-y-3 max-w-xl mx-auto relative z-10">
            <p className="text-white/50 uppercase tracking-[0.2em] text-xs font-bold">System Mechanics</p>
            <h2 className={`${HeaderMd} text-3xl md:text-5xl text-white`}>Structural Design Framework</h2>
          </div>
        </Reveal>

        {/* INTERACTIVE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
          {GAME_FEATURES.map((f, i) => (
            <Reveal key={i} delay={150 + (i * 100)}>
              <button
                onClick={() => setActiveFeature(i)}
                className={`group w-full h-full text-left bg-[#F4F5E1]/5 backdrop-blur-sm hover:bg-[#F4F5E1]/10 ${f.glowColor} transition-all duration-300 rounded-2xl p-8 border border-white/10 space-y-4 focus:outline-none focus:ring-2 focus:ring-white/20`}
              >
                <div className="w-12 h-12 bg-[#F4F5E1]/10 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform text-white">
                  <Icon icon={f.icon} />
                </div>
                <h4 className={`${SubheaderMd} text-lg font-bold text-white`}>{f.title}</h4>
                <p className={`${BodyMd} text-white/60 leading-relaxed text-sm`}>{f.desc}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── OVERLAY MODAL LAYOUT WINDOW MATCHING CREDENTIALS BOX STYLE ─── */}
      {activeFeature !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setActiveFeature(null)} />
          
          <div className="bg-[#bb3535]/20 border border-[#bb3535]/40 backdrop-blur-md rounded-[2rem] max-w-xl w-full p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] relative z-10 animate-in fade-in zoom-in-95 duration-300 flex flex-col space-y-5">
            
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-[#bb3535]/20 border border-[#bb3535]/40 text-white px-2.5 py-1 rounded inline-block mb-1">
                {MODAL_DETAILS[activeFeature]?.subtitle}
              </span>
              <h3 className={`${HeaderSm} text-2xl font-black text-white tracking-tight`}>
                {MODAL_DETAILS[activeFeature]?.title}
              </h3>
            </div>

            <div className="py-1 border-t border-b border-[#bb3535]/20">
              <div className="py-4">
                {MODAL_DETAILS[activeFeature]?.content}
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button 
                onClick={() => setActiveFeature(null)}
                className="bg-white/10 hover:bg-white/30 text-white border border-white/20 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all font-bold active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};