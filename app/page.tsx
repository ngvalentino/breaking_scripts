"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react';
import {
  Building2, ShieldCheck, ArrowRight, UserCircle, ChevronLeft, ChevronRight,
} from "lucide-react";
import {
  HeaderSm, HeaderMd, BodyLg, BodyMd, SubheaderMd
} from '@/app/typography';

import { FACES, GAME_FEATURES, storyData } from './game_data';
import { Reveal } from '@/components/reveal';

import { StructuralFeaturesSection } from "@/components/structural_features_section";

// import { CharacterCard } from "@/components/character_card";

// ─── MAIN COMPONENT EXPORT ───
export default function Page() {
  // Game State Engine
  const [currentSceneId, setCurrentSceneId] = useState<string>("landing");
  const [socialApproval, setSocialApproval] = useState<number>(50);
  const [authenticity, setAuthenticity] = useState<number>(50);

  // Layout Animation UI States
  const [activeFace, setActiveFace] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [logoTilt, setLogoTilt] = useState({ rotateX: 0, rotateY: 0 });
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotate = (direction: 'left' | 'right') => {
    const newFace = direction === 'right' ? (activeFace + 1) % 3 : (activeFace + 2) % 3;
    setActiveFace(newFace);
    setRotation(prev => direction === 'right' ? prev - 120 : prev + 120);
  };

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!logoRef.current) return;
    window.requestAnimationFrame(() => {
      if (!logoRef.current) return;
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / (window.innerWidth / 2)) * 15;
      const rotateX = -((e.clientY - centerY) / (window.innerHeight / 2)) * 10;
      setLogoTilt({ rotateX, rotateY });
    });
  };

  const handleHeroMouseLeave = () => {
    setLogoTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleChoiceSelection = (choice: any) => {
    const nextSA = Math.max(0, Math.min(100, socialApproval + choice.effect.sa));
    const nextAE = Math.max(0, Math.min(100, authenticity + choice.effect.ae));
    
    setSocialApproval(nextSA);
    setAuthenticity(nextAE);

    if (choice.next === "evaluate_ending") {
      if (nextSA >= 80 && nextAE <= 35) {
        setCurrentSceneId("ending_perfect_script");
      } else if (nextAE >= 80 && nextSA <= 35) {
        setCurrentSceneId("ending_the_rebel");
      } else {
        setCurrentSceneId("ending_strategic_subversion");
      }
    } else if (choice.next === "landing") {
      setSocialApproval(50);
      setAuthenticity(50);
      setCurrentSceneId("landing");
    } else {
      setCurrentSceneId(choice.next);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeScene = storyData[currentSceneId];

  return (
    <div className="bg-[#F4F5E1] text-[#3E2723] overflow-x-hidden">
      
      {/* GLOBAL SVG NOISE FILTER */}
      <svg className="hidden">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feComposite operator="in" in2="SourceGraphic" />
          <feColorMatrix type="matrix" values="1 0 0 0 0,0 1 0 0 0,0 0 1 0 0,0 0 0 0.08 0" />
          <feBlend mode="multiply" in2="SourceGraphic" />
        </filter>
      </svg>

      <main>
        {currentSceneId === "landing" ? (
          /* ─── SCENE VIEW A: THE ENTRY PLATFORM (LANDING) ─── */
          <>
            <section
                className="relative z-10 h-[115vh] flex flex-col items-center justify-center px-6 text-center pt-24 pb-0 overflow-hidden"
                onMouseMove={handleHeroMouseMove}
                onMouseLeave={handleHeroMouseLeave}
            >
                {/* 🖼️ SEPARATE BACKGROUND ASSET LAYER */}
                <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none" 
                style={{ backgroundImage: `url('/assets/background.png')` }}
                />

                {/* SKY HEARTS PARALLAX REEF (PNG VERSION) */}
                <div className="absolute top-[12%] right-[2%] pointer-events-none z-[5]" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
                    <img src="/assets/heart.png" className="w-12 md:w-16 opacity-90 float-animation" alt="floating heart" />
                </div>
                <div className="absolute top-[25%] left-[5%] pointer-events-none z-[3]" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
                    <img src="/assets/star.png" className="w-8 md:w-12 opacity-40 float-animation-reverse" alt="floating heart background" />
                </div>
                <div className="absolute top-[5%] left-[32%] pointer-events-none z-[4]" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                    <img src="/assets/heart.png" className="w-10 md:w-14 opacity-60 float-animation-slow" alt="floating heart slow" />
                </div>
                <div className="absolute top-[25%] right-[2%] pointer-events-none z-[5]" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
                    <img src="/assets/star.png" className="w-16 md:w-20 opacity-85 float-animation-reverse" alt="floating heart right" />
                </div>
                <div className="absolute top-[45%] left-[12%] pointer-events-none z-[4]" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                    <img src="/assets/heart.png" className="w-14 md:w-18 opacity-60 float-animation-slow" alt="floating heart slow" />
                </div>
                <div className="absolute top-[65%] right-[22%] pointer-events-none z-[4]" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                    <img src="/assets/heart.png" className="w-10 md:w-14 opacity-60 float-animation-slow" alt="floating heart slow" />
                </div>

                {/* HERO LOGO CONTENT CONTAINER */}
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        <h1 className="sr-only">Breaking Scripts: Find Your Structural Script.</h1>
                        <img
                            ref={logoRef}
                            src="/assets/logo/main_logo.png"
                            alt="Breaking Scripts - Choose Your Script Layout"
                            className="w-[350px] md:w-[450px] lg:w-[550px] h-auto object-contain drop-shadow-xl"
                            style={{
                                transform: `perspective(800px) rotateX(${logoTilt.rotateX}deg) rotateY(${logoTilt.rotateY}deg)`,
                                transition: 'transform 0.15s ease-out',
                            }}
                        />
                    </div>
                </div>
            </section>

            <div className="relative z-20 text-white pt-32 -mt-[120px] pb-10">
              <div className="absolute inset-0 z-0 bg-[#bb3535] rounded-t-[10rem]" style={{ filter: 'url(#grain)' }} />

              <div className="relative z-20 text-center space-y-3 max-w-2xl mx-auto font-medium px-4">
                <p className={`${BodyLg} text-white/90 text-lg md:text-xl leading-relaxed mt-6 italic`}>
                  Dismantling heteronormative structural frameworks shouldn't be an abstract concept. 
                  Browse script listings and choose a profile to test your metrics inside society's rigid matrix.
                </p>
                <div className="pt-4">
                  <a href="#roles" className="bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold px-8 py-3.5 rounded-full transition-all backdrop-blur-sm inline-flex items-center gap-2">
                    Browse Script Profiles <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* GAME CONCEPT OVERVIEW CARD BLOCK */}
                <section className="py-28 px-6 max-w-5xl mx-auto space-y-14">
                <Reveal>
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <p className="text-[#bb3535] uppercase tracking-[0.2em] text-xs font-black">
                        The Breaking Scripts Simulation Engine
                    </p>
                    <h2 className={`${HeaderMd} text-3xl md:text-5xl leading-tight text-white`}>
                        Because conforming to societal structures{' '}
                        <span className="block mt-2 italic text-[#ffffff] font-serif font-light">
                        demands the liquidation of your true self.
                        </span>
                    </h2>
                    </div>
                </Reveal>

                {/* 📦 High-Contrast Matrix Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* CARD 1: THE FRICTION MATRIX */}
                    <Reveal delay={150}>
                    <div className="group relative bg-black/40 border border-white/10 rounded-2xl p-10 space-y-4 transition-all duration-300 hover:border-[#bb3535]/40 hover:-translate-y-1 shadow-2xl">
                        <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#bb3535] transition-all duration-300 group-hover:w-full rounded-t-2xl" />
                        
                        <p className="text-white/40 uppercase tracking-widest text-xs font-bold transition-colors group-hover:text-[#bb3535]">
                        01 // Systemic Friction
                        </p>
                        {/* REVISED COPY BELOW */}
                        <p className={`${BodyLg} text-white/90 text-lg leading-relaxed`}>
                        Your survival is calculated in real-time against rigid institutional mandates. Every choice forces a compromise: distort your presentation to harvest structural security, or break the script to preserve your psychological autonomy. 
                        </p>
                    </div>
                    </Reveal>

                    {/* CARD 2: THE STRATEGIC SOLUTION */}
                    <Reveal delay={300}>
                    <div className="group relative bg-stone-900/60 border border-white/10 rounded-2xl p-10 space-y-4 transition-all duration-300 hover:border-[#bb3535]/40 hover:-translate-y-1 shadow-2xl backdrop-blur-md">
                        <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#bb3535] transition-all duration-300 group-hover:w-full rounded-t-2xl" />
                        
                        <p className="text-white/40 uppercase tracking-widest text-xs font-bold transition-colors group-hover:text-[#bb3535]">
                        02 // Operational Directive
                        </p>
                        {/* REVISED COPY BELOW */}
                        <p className={`${BodyLg} text-white/90 text-lg leading-relaxed`}>
                        This interface is an interactive sandbox built to map intersectional pressure points. Use the 3D rotating carousel below to select your initial container, interface with the grid, and navigate a single systemic day.
                        </p>
                    </div>
                    </Reveal>

                </div>
                </section>

              <div className="h-px bg-white/10 mx-8 md:mx-20" />

              {/* 3D PROFILE SELECTION CAROUSEL ENGINE */}
                <section id="roles" className="py-28 px-6 max-w-6xl mx-auto space-y-10">
                <Reveal>
                    <div className="text-center space-y-4 max-w-xl mx-auto mb-6">
                    <p className="text-[#bb3535] uppercase tracking-[0.2em] text-xs font-black">
                        Available Script Listings
                    </p>
                    <h2 className={`${HeaderMd} text-3xl md:text-5xl text-white`}>
                        Select Your Profile To Test
                    </h2>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    {/* 💡 The container height is adjusted to 560px for compact, tight spacing */}
                    <div className="relative h-[560px] w-full flex items-center justify-center overflow-hidden select-none">
                    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                        
                        {FACES.map((face, i) => {
                        // 🧮 Fallback definitions to prevent compilation crashes
                        const charId = face.id;
                        const charName = 'name' in face ? (face as any).name : face.role;
                        const charArchetype = 'archetype' in face ? (face as any).archetype : face.title;
                        const charDescription = 'lensDescription' in face ? (face as any).lensDescription : face.desc;
                        const charImage = face.image || `/assets/${(face.role || 'avatar').toLowerCase()}.png`;

                        const totalFaces = FACES.length;
                        let offset = i - activeFace;
                        
                        if (offset < -1) offset += totalFaces;
                        if (offset > 1) offset -= totalFaces;

                        const isActive = offset === 0;
                        const isLeft = offset === -1;
                        const isRight = offset === 1;

                        let zIndex = 10;
                        if (isActive) zIndex = 30;
                        if (isLeft || isRight) zIndex = 20;

                        let transformStyles = '';
                        if (isActive) transformStyles = 'translateX(0%) scale(1) rotateY(0deg)';
                        if (isLeft) transformStyles = 'translateX(-65%) scale(0.85) rotateY(25deg)';
                        if (isRight) transformStyles = 'translateX(65%) scale(0.85) rotateY(-25deg)';

                        return (
                            <div
                            key={i}
                            onClick={() => {
                                if (!isActive) {
                                const targetRotation = rotation - (offset * 120);
                                setRotation(targetRotation);
                                setActiveFace(i);
                                }
                            }}
                            className="absolute w-full max-w-xs h-[490px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col justify-between p-8 rounded-2xl border text-black backdrop-blur-sm bg-[#f4e08b] hover:bg-[#f4e08b]/80 group"
                            style={{
                                transform: transformStyles,
                                zIndex: zIndex,
                                boxShadow: isActive ? '0 25px 50px -12px rgba(187, 53, 53, 0.35)' : 'none',
                                borderColor: isActive ? '#bb3535' : 'rgba(255, 255, 255, 0.4)',
                                opacity: isActive ? 1 : 0.55,
                            }}
                            >
                            <div className={`absolute top-0 left-0 h-[3px] bg-[#bb3535] transition-all duration-500 rounded-t-2xl ${isActive ? 'w-full' : 'w-0 group-hover:w-1/3'}`} />

                            <div className="space-y-4 flex flex-col items-center text-center w-full">
                                {/* Profile Avatar Container */}
                                <div className="relative w-24 h-24 rounded-full border-2 border-black/10 p-1 bg-white/40 overflow-hidden shadow-sm mt-2 flex items-center justify-center">
                                <img 
                                    src={charImage} 
                                    alt={`${charName} configuration matrix`}
                                    className={`w-full h-full object-cover rounded-full transition-all duration-500 ${isActive ? 'grayscale-0 scale-105' : 'grayscale'}`}
                                    onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const fallbackNode = e.currentTarget.nextElementSibling;
                                    if (fallbackNode) fallbackNode.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden w-full h-full items-center justify-center text-[#bb3535]/70">
                                    <UserCircle className="w-12 h-12" />
                                </div>
                                </div>

                                <div className="space-y-1.5 w-full">
                                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 bg-[#bb3535]/10 border border-[#bb3535]/30 text-[#bb3535] rounded-md inline-block">
                                    {face.tag || "System Identity"}
                                </span>
                                <h3 className="text-2xl text-black font-black leading-tight tracking-tight mt-1">
                                    {charName}
                                </h3>
                                <p className="text-black/50 text-[10px] uppercase font-mono tracking-widest">
                                    {charArchetype}
                                </p>
                                <p className={`${BodyMd} text-black/70 text-xs leading-relaxed pt-2 px-1 max-w-xs mx-auto`}>
                                    {charDescription}
                                </p>
                                </div>
                            </div>
                            
                            <Button 
                                onClick={(e) => {
                                if (!isActive) {
                                    e.stopPropagation();
                                    const targetRotation = rotation - (offset * 120);
                                    setRotation(targetRotation);
                                    setActiveFace(i);
                                    return;
                                }
                                setCurrentSceneId(charId);
                                }}
                                className={`w-full text-white rounded-xl py-4 text-xs uppercase tracking-wider font-mono font-bold flex justify-between px-5 transition-all duration-300 ${
                                isActive 
                                    ? 'bg-[#bb3535] hover:bg-[#a32e2e] border border-transparent' 
                                    : 'bg-black/5 hover:bg-black/10 border border-black/10'
                                }`}
                            >
                                <span>Rent Script Identity</span> <ArrowRight size={14} />
                            </Button>
                            </div>
                        );
                        })}
                    </div>
                    </div>
                </Reveal>
                </section>

                <div className="h-px bg-white/5 mx-8 md:mx-20" />

              {/* SIMULATION FEATURES CONTAINER SECTION */}
              <StructuralFeaturesSection scrollY={scrollY || 0} />

              {/* ─── EXPERIMENTAL FRAMEWORK & CREDENTIALS SECTION ─── */}
                <div className="w-full relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 overflow-hidden">
                    <section className="py-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white relative">

                        {/* ✨ PARALLAX STAR 1: Top Right */}
                        <div className="absolute top-[5%] right-[-2%] pointer-events-none z-[0]" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
                            <img src="/assets/star.png" className="w-16 md:w-20 opacity-30 float-animation-slow" alt="floating background star" />
                        </div>

                        {/* ✨ PARALLAX STAR 2: Mid Left */}
                        <div className="absolute top-[45%] left-[-5%] pointer-events-none z-[0]" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
                            <img src="/assets/star.png" className="w-14 md:w-16 opacity-25 float-animation-slow" alt="floating background star" />
                        </div>

                        {/* Left & Middle Column: Core Project Theoretical Framework */}
                        <div className="md:col-span-2 space-y-4 text-left block relative z-10">
                            <Reveal>
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-white/20 border border-white/40 text-white px-2.5 py-1 rounded inline-block">
                                Project Foundation // Core Mechanics
                                </span>
                                <h3 className={`${HeaderSm} text-2xl font-black text-white tracking-tight`}>
                                Exploring Gender and Sexuality Matrix
                                </h3>
                                <p className={`${BodyMd} text-white/90 text-sm md:text-base leading-relaxed`}>
                                This project is an interactive simulation built to map and analyze systemic friction points in a heteronormative society.
                                </p>
                                <p className={`${BodyMd} text-white/80 text-xs md:text-sm leading-relaxed pt-2 border-l-2 border-white pl-4 italic`}>
                                By driving a dynamic <strong className="text-white font-semibold">Dual-Meter Engine</strong>, this simulation translates qualitative sociological concepts into a deeply personal, heartbreaking reality where balancing Social Approval against your own Authenticity is mathematically impossible. Inspired by a love for turning rigid cultural theories into lived, empathetic experiences, this framework utilizes an Intersectionality Lens to force players into the shoes of distinct characters navigating oppressive cultural double-binds. Moving sequentially through a Three-Act Structure—from the raw vulnerability of morning dress rituals to the suffocating pressure of public spaces and romantic intimacy—you are forced to feel the zero-sum compromises we make in isolation every single day. Ultimately, there are no shallow win or lose screens here; the matrix concludes with profound Systemic Payoffs and explicit sociological grades, leaving you with a hauntingly accurate reflection of what it truly costs to either fit into the machine or dare to break the script.            
                                </p>
                            </div>
                            </Reveal>
                        </div>

                        {/* Right Column: Developer Matrix Profile */}
                        <div className="relative z-10">
                            <Reveal delay={150}>
                            <div className="bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] transition-all relative overflow-hidden flex flex-col items-center text-center group">            
                                {/* 🖼️ Developer Image Slot */}
                                <div className="relative w-20 h-20 rounded-full border-2 border-[#bb3535] p-1 bg-black overflow-hidden shadow-inner">
                                <img 
                                    src="/assets/phoebe.png"
                                    alt="Nicole Phoebe Valentino profile configuration"
                                    className="w-full h-full object-cover rounded-full transition-all duration-500"
                                    onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    }}
                                />
                                </div>

                                <div className="space-y-1 mt-4">
                                <p className="text-xs text-white/50 uppercase tracking-widest font-mono">SYS_DEVELOPER</p>
                                <h4 className="text-md font-black text-white tracking-tight">Nicole Phoebe Valentino</h4>
                                <p className="text-xs text-white/80 font-small tracking-wide font-mono">BS Computer Science Batch 2023</p>
                                </div>

                                {/* 🌐 Credentials Matrix Links */}
                                <div className="grid grid-cols-2 gap-2 w-full pt-4 text-[10px] font-mono tracking-wider">
                                <a href="https://github.com/ngvalentino" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/30 text-white border border-white/20 py-2.5 rounded-xl transition-all text-center uppercase font-bold tracking-md">
                                    Github
                                </a>
                                <a href="https://facebook.com/NPV29" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/30 text-white border border-white/20 py-2.5 rounded-xl transition-all text-center uppercase font-bold tracking-md">
                                    Facebook
                                </a>
                                <a href="https://instagram.com/itspebey" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/30 text-white border border-white/20 py-2.5 rounded-xl transition-all text-center uppercase font-bold tracking-md">
                                    Instagram
                                </a>
                                <a href="mailto:ngvalentino@up.edu.ph" className="bg-white/10 hover:bg-white/30 text-white border border-white/20 py-2.5 rounded-xl transition-all text-center uppercase font-bold tracking-md">
                                    Email
                                </a>
                                </div>
                            </div>
                            </Reveal>
                        </div>
                    </section>
                </div>
              </div>
          </>
        ) : (
          /* ─── SCENE VIEW B: INTERACTIVE GAMEPLAY LAYOUT COMPONENT ─── */
          <section className="bg-[#bb3535] min-h-screen w-full pt-36 pb-20 px-4 transition-colors duration-500 animate-in fade-in">
            {/* 📦 Centering Wrapper Column */}
            <div className="max-w-4xl mx-auto w-full">
                
                {/* ✨ Premium Minimalist Container Panel */}
                <div className="bg-white rounded-[2rem] border border-stone-200/80 p-8 md:p-12 shadow-2xl shadow-black/10 transition-all relative overflow-hidden">
                    
                     {(() => {
                        // 🛡️ Safety check: If currentSceneId is missing, return fallback layout immediately
                        if (!currentSceneId) {
                            return (
                                <div className="absolute top-0 right-0 h-12 px-5 bg-stone-50 border-b border-l border-stone-100 flex items-center rounded-bl-xl select-none z-40">
                                    <p className="text-[10px] font-mono uppercase text-stone-400 tracking-widest">v2.06</p>
                                </div>
                            );
                        }

                        // 🧮 Explicitly cast lookups to gracefully map parameters
                        const currentFace = (FACES as any[]).find(f => currentSceneId.startsWith(f.id.split('_')[0]));
                        
                        const charName = currentFace?.name || currentFace?.role || "";
                        const charImage = currentFace?.image || "/assets/avatar.png";

                        return (
                            <div className="absolute top-0 right-0 h-14 pl-4 pr-6 flex items-center gap-3 rounded-bl-2xl select-none z-40">
                                <div className="w-7 h-7 rounded-full overflow-hidden bg-stone-100 shrink-0 hidden sm:block">
                                    <img 
                                        src={charImage} 
                                        alt="" 
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                    />
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-stone-800 leading-none">
                                        {charName}
                                    </p>
                                    <p className="text-[9px] font-mono uppercase text-stone-400 tracking-widest mt-0.5">
                                    </p>
                                </div>
                            </div>
                        );
                    })()}

                    {/* 📊 INTERACTIVE INLINE METER BARS GRAPHICS */}
                    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-stone-100 pb-8">
                    
                        {/* METER 1: CONFORMITY */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-semibold tracking-wider text-stone-500">
                                <span>Social Approval Index</span>
                                <span className="text-rose-600 font-bold">{socialApproval}%</span>
                            </div>
                            <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden p-0">
                                <div 
                                    className="h-full bg-rose-500 rounded-full transition-all duration-500 ease-out" 
                                    style={{ width: `${socialApproval}%` }} 
                                />
                            </div>
                        </div>

                        {/* METER 2: AUTONOMY */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-semibold tracking-wider text-stone-500">
                                <span>Authenticity Resource</span>
                                <span className="text-stone-800 font-bold">{authenticity}%</span>
                            </div>
                            <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden p-0">
                                <div 
                                    className={`h-full rounded-full transition-all duration-500 ease-out ${
                                        authenticity < 30 ? 'bg-amber-500 animate-pulse' : 'bg-stone-800'
                                    }`} 
                                    style={{ width: `${authenticity}%` }} 
                                />
                            </div>
                        </div>

                    </div>

                    {/* 📝 NARRATIVE AREA BLOCKS */}
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-3 py-1 rounded-full inline-block">
                            {currentSceneId.includes("ending") ? "Scenario Resolved" : "Active Event Frame"}
                        </span>
                        
                        <h2 className="text-2xl md:text-3xl text-stone-900 font-bold tracking-tight leading-snug pt-1">
                            {activeScene?.title}
                        </h2>
                        
                        <p className="text-stone-600 leading-relaxed text-base md:text-lg pt-1">
                            {activeScene?.narrative}
                        </p>
                    </div>

                    {/* ⚡ DYNAMIC CHOICE INTERACTION CONTEXT BUTTONS */}
                    <div className="mt-10 space-y-3">
                        {activeScene?.choices.map((choice: any, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => handleChoiceSelection(choice)}
                                className="w-full text-left p-5 rounded-2xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-800 hover:text-stone-950 font-medium text-sm md:text-base transition-all duration-200 shadow-sm hover:shadow flex justify-between items-center group active:scale-[0.99]"
                            >
                                <span className="pr-4 tracking-normal font-medium">{choice.text}</span>
                                <div className="flex items-center gap-2 shrink-0">
                                    <ArrowRight size={18} className="text-stone-400 group-hover:text-stone-800 transition-colors transform group-hover:translate-x-0.5 duration-200" />
                                </div>
                            </button>
                        ))}
                    </div>
                    </div>
                </div>
            </section>
        )}
      </main>


        {/* ─── FOOTER MODULE ─── */}
        <footer className="bg-[#bb3535] py-16 px-6 pb-20 text-white relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
            <div className="flex flex-col items-center text-center gap-6">
            <div className="space-y-3 max-w-xs flex flex-col items-center">
                <div className="flex items-center gap-3">
                <img src="/assets/logo/main_logo.png" alt="Breaking Scripts" className="h-8 w-auto brightness-0 invert" />
                <span className={`${HeaderSm} text-2xl tracking-tighter font-black`}>Breaking<span className="text-black/40">Scripts</span></span>
                </div>
                <p className="text-white/70 text-xs tracking-wider uppercase font-mono">Sosc3 Gender and Society Project Framework</p>
                <p className="text-black/40 text-xs italic font-black">"Breaking the Script Systematically."</p>
            </div>
            </div>
            <div className="pt-8 border-t border-white/20 text-center text-xs text-white/40 font-medium font-mono">
            © {new Date().getFullYear()} Breaking Scripts platform. Built for structural subversion.
            </div>
        </div>
        </footer>

      {/* GLOBAL SCROLL ANIMATION EFFECTS */}
      <style>
        {`
            html, body { background-color: #F4F5E1; scroll-behavior: smooth !important; }
            @keyframes cloudFloat { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(25px); } }
            @keyframes cloudFloatReverse { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(-20px); } }
            .float-animation { animation: cloudFloat 12s ease-in-out infinite; }
            .float-animation-reverse { animation: cloudFloatReverse 15s ease-in-out infinite; }
            .float-animation-slow { animation: cloudFloat 18s ease-in-out infinite; }
        `}
        </style>

    </div>
  );
}