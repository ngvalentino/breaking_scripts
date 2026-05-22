import React from 'react';
import { UserCircle, Building2, ShieldCheck } from "lucide-react";

export interface Choice {
  text: string;
  effect: { sa: number; ae: number };
  next: string;
}

export interface Scene {
  title: string;
  narrative: string;
  choices: Choice[];
}

export const FACES = [
  {
    id: "maya_act1",
    role: "Maya",
    icon: <UserCircle className="w-10 h-10" />,
    image: "/assets/characters/maya.png", // Added semantic asset pathway
    title: "The Corporate Suite",
    desc: "Navigate a male-dominated STEM space. Experience the systemic Double-Bind where assertiveness challenges traditional femininity scripts.",
    accent: "#bb3535",
    bg: "bg-[#F1F8E9]",
    borderColor: "border-[#bb3535]/30", // Added explicit brutalist system design colors
    badgeBg: "bg-[#bb3535]/10",
    badgeText: "text-[#bb3535]",
    tag: "Intersectionality Focus"
  },
  {
    id: "alex_act1",
    role: "Alex",
    icon: <Building2 className="w-10 h-10" />,
    image: "/assets/characters/alex.png",
    title: "The Campus Commons",
    desc: "Step into the shoes of a non-binary student attempting to survive institutional spaces and forms constructed strictly within a rigid gender binary.",
    accent: "#D48806",
    bg: "bg-[#FFF8E1]",
    borderColor: "border-[#D48806]/30",
    badgeBg: "bg-[#D48806]/10",
    badgeText: "text-[#D48806]",
    tag: "Gender Binary Focus"
  },
  {
    id: "chris_act1",
    role: "Chris",
    icon: <ShieldCheck className="w-10 h-10" />,
    image: "/assets/characters/chris.png",
    title: "The Fraternity House",
    desc: "Examine peer policing and toxic masculinity expectations. Confront standard alpha scripts and heteronormative dating demands.",
    accent: "#C62828",
    bg: "bg-[#FFEBEE]",
    borderColor: "border-[#C62828]/30",
    badgeBg: "bg-[#C62828]/10",
    badgeText: "text-[#C62828]",
    tag: "Masculinity Focus"
  }
];

export const GAME_FEATURES = [
  { 
    icon: "mdi:account-switch-outline", 
    title: "Intersectionality Lens", 
    desc: "Choose from distinct characters navigating unique institutional demands and cultural double-binds.",
    glowColor: "group-hover:shadow-[0_0_15px_rgba(187,53,53,0.15)]"
  },
  { 
    icon: "mdi:scale-balance", 
    title: "Dual-Meter Equilibrium", 
    desc: "Balance Social Approval and Authenticity. Keeping both at 100% is mathematically designed to be impossible.",
    glowColor: "group-hover:shadow-[0_0_15px_rgba(212,136,6,0.15)]"
  },
  { 
    icon: "mdi:book-open-page-variant-outline", 
    title: "Three-Act Structure", 
    desc: "Live through morning dress rituals, afternoon structural spaces, and contemporary romantic intimacy layouts.",
    glowColor: "group-hover:shadow-[0_0_15px_rgba(198,40,40,0.15)]"
  },
  { 
    icon: "mdi:file-certificate-outline", 
    title: "Systemic Payoffs", 
    desc: "No shallow win/loss states. Receive explicit sociological grades reflecting systemic compromises.",
    glowColor: "group-hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
  }
];

export const storyData: Record<string, Scene> = {
  maya_act1: {
    title: "Maya - Act I: The Morning (Body Politics)",
    narrative: "You are getting ready for your major graduation thesis presentation. You want to wear comfortable flat shoes and loose slacks, but your family remarks that it doesn't look 'presentable, professional, or ladylike' enough.",
    choices: [
      { text: "Conform: Change into painful high heels and a restrictive, traditional skirt-suit.", effect: { sa: 15, ae: -15 }, next: "maya_act2" },
      { text: "Subvert: Stick to your comfortable slacks and loafers.", effect: { sa: -15, ae: 15 }, next: "maya_act2" }
    ]
  },
  maya_act2: {
    title: "Maya - Act II: The Afternoon (The Double-Bind)",
    narrative: "During the Q&A panel of your presentation, a male panelist cuts you off repeatedly. To defend your research, you need to assert your authority firmly.",
    choices: [
      { text: "Conform: Let him speak and talk softly afterwards to avoid being labeled 'aggressive' or 'difficult'.", effect: { sa: 20, ae: -20 }, next: "maya_act3" },
      { text: "Subvert: Interject firmly: 'Please let me finish my point first.'", effect: { sa: -20, ae: 20 }, next: "maya_act3" }
    ]
  },
  maya_act3: {
    title: "Maya - Act III: The Evening (Models of Love)",
    narrative: "You go on a celebratory dinner date. When the bill arrives, your date insists on paying completely, stating: 'A real man takes care of everything, you just sit back.'",
    choices: [
      { text: "Conform: Smile, acquiesce, and let them control the transaction.", effect: { sa: 15, ae: -15 }, next: "evaluate_ending" },
      { text: "Subvert: Insist on splitting it: 'I prefer an equal partnership in everything I do.'", effect: { sa: -10, ae: 20 }, next: "evaluate_ending" }
    ]
  },
  alex_act1: {
    title: "Alex - Act I: The Morning (The Binary Box)",
    narrative: "You are filling out a mandatory university registration form. The sheet only offers two checkboxes for gender: [ ] Male and [ ] Female.",
    choices: [
      { text: "Conform: Check your assigned sex at birth to bypass administrative hurdles.", effect: { sa: 15, ae: -15 }, next: "alex_act2" },
      { text: "Subvert: Leave it blank, cross it out, and write 'Non-Binary' in the margin.", effect: { sa: -15, ae: 15 }, next: "alex_act2" }
    ]
  },
  alex_act2: {
    title: "Alex - Act II: The Afternoon (Gendered Spaces)",
    narrative: "You need to use the restroom on campus, but there are only heavily policed, binary 'Men' and 'Women' facilities available.",
    choices: [
      { text: "Conform: Use the room matching your perceived presentation to avoid confrontation.", effect: { sa: 20, ae: -20 }, next: "alex_act3" },
      { text: "Subvert: Use the room you feel safest in, enduring the uncomfortable stares of bystanders.", effect: { sa: -20, ae: 20 }, next: "alex_act3" }
    ]
  },
  alex_act3: {
    title: "Alex - Act III: The Evening (Heteronormative Scripts)",
    narrative: "At a mixer event, a classmate tries to set you up, asking: 'So, do you prefer boyfriend or girlfriend dynamics?' forcing you into a heteronormative box.",
    choices: [
      { text: "Conform: Play along with a vague answer to keep the mood casual.", effect: { sa: 15, ae: -15 }, next: "evaluate_ending" },
      { text: "Subvert: Explicitly explain that you don't conform to traditional relationship scripts.", effect: { sa: -10, ae: 20 }, next: "evaluate_ending" }
    ]
  },
  chris_act1: {
    title: "Chris - Act I: The Morning (Toxic Masculinity)",
    narrative: "You wake up feeling intensely stressed and overwhelmed by upcoming exams. You start crying, but your roommate walks in and says, 'Dude, man up. Don't be soft.'",
    choices: [
      { text: "Conform: Wipe your face quickly, laugh it off, and suppress your anxiety.", effect: { sa: 15, ae: -15 }, next: "chris_act2" },
      { text: "Subvert: Own your emotions: 'Nah, I'm stressed out and it's perfectly normal to express it.'", effect: { sa: -15, ae: 15 }, next: "chris_act2" }
    ]
  },
  chris_act2: {
    title: "Chris - Act II: The Afternoon (Peer Policing)",
    narrative: "Your friend group starts making highly objectifying, misogynistic remarks about a female peer in your group chat to prove their 'locker room' status.",
    choices: [
      { text: "Conform: Drop a laughing emoji to remain one of the boys.", effect: { sa: 20, ae: -20 }, next: "chris_act3" },
      { text: "Subvert: Message back: 'Come on guys, that's completely out of line. Let's not do that.'", effect: { sa: -20, ae: 20 }, next: "chris_act3" }
    ]
  },
  chris_act3: {
    title: "Chris - Act III: The Evening (Egalitarian Intimacy)",
    narrative: "You are planning an anniversary night. Your friends tell you that to keep upper hand in relationships, you must make all decisions without asking her input.",
    choices: [
      { text: "Conform: Take unilateral control of the plans to project dominant authority.", effect: { sa: 15, ae: -15 }, next: "evaluate_ending" },
      { text: "Subvert: Sit down with her and collaboratively plan the night as equals.", effect: { sa: -10, ae: 20 }, next: "evaluate_ending" }
    ]
  },
  ending_perfect_script: {
    title: "Ending: 'The Perfect Script'",
    narrative: "You navigated the day flawlessly without making anyone uncomfortable. Society views you as an ideal, model citizen. However, your core self is entirely erased. You are completely exhausted, alienated, and unhappy. You kept the patriarchy comfortable at your own expense.",
    choices: [{ text: "Return to Script Marketplace", effect: { sa: 0, ae: 0 }, next: "landing" }]
  },
  ending_the_rebel: {
    title: "Ending: 'The Rebel'",
    narrative: "You stood your ground, actively dismantled heteronormativity, and lived unapologetically. While your psychological well-being and sense of liberation are thriving, you faced massive social friction, alienation, and hostility—proving how aggressively institutions police non-conformists.",
    choices: [{ text: "Return to Script Marketplace", effect: { sa: 0, ae: 0 }, next: "landing" }]
  },
  ending_strategic_subversion: {
    title: "Ending: 'The Strategic Subversion'",
    narrative: "You chose your battles systematically. You survived the institutional constraints of modern society where necessary, while identifying critical micro-spaces to push back and assert your identity. You realize that dismantling structural inequity is a marathon, not a sprint.",
    choices: [{ text: "Return to Script Marketplace", effect: { sa: 0, ae: 0 }, next: "landing" }]
  }
};