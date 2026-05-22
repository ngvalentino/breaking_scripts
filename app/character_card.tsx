import React from 'react';
import { UserCircle, Building2, ShieldCheck } from "lucide-react";

// 1. Export the matching interface that character_card.tsx expects
export interface CharacterDetails {
  id: string;
  name: string;
  archetype: string;
  lensDescription: string;
  baseSA: number;
  baseAE: number;
  genderScript: "binary-f" | "binary-m" | "non-binary";
  
  // Keep your custom UI parameters from earlier!
  image: string;
  accent: string;
  bg: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
}

// 2. Align your FACES array parameters perfectly
export const FACES: CharacterDetails[] = [
  {
    id: "maya_act1",
    name: "Maya",
    archetype: "Cisgender Woman in STEM",
    lensDescription: "Navigate a male-dominated STEM space. Experience the systemic Double-Bind where assertiveness challenges traditional femininity scripts.",
    baseSA: 50,
    baseAE: 50,
    genderScript: "binary-f",
    image: "/assets/characters/maya.png",
    accent: "#bb3535",
    bg: "bg-[#F1F8E9]",
    borderColor: "border-[#bb3535]/30",
    badgeBg: "bg-[#bb3535]/10",
    badgeText: "text-[#bb3535]"
  },
  {
    id: "alex_act1",
    name: "Alex",
    archetype: "Non-Binary Student",
    lensDescription: "Step into the shoes of a non-binary student attempting to survive institutional spaces and forms constructed strictly within a rigid gender binary.",
    baseSA: 50,
    baseAE: 50,
    genderScript: "non-binary",
    image: "/assets/characters/alex.png",
    accent: "#D48806",
    bg: "bg-[#FFF8E1]",
    borderColor: "border-[#D48806]/30",
    badgeBg: "bg-[#D48806]/10",
    badgeText: "text-[#D48806]"
  },
  {
    id: "chris_act1",
    name: "Chris",
    archetype: "Cisgender Man in Greek Life",
    lensDescription: "Examine peer policing and toxic masculinity expectations. Confront standard alpha scripts and heteronormative dating demands.",
    baseSA: 50,
    baseAE: 50,
    genderScript: "binary-m",
    image: "/assets/characters/chris.png",
    accent: "#C62828",
    bg: "bg-[#FFEBEE]",
    borderColor: "border-[#C62828]/30",
    badgeBg: "bg-[#C62828]/10",
    badgeText: "text-[#C62828]"
  }
];