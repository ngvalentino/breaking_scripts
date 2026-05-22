export interface GameEffect {
  sa: number;      // Social Approval metric modifier (e.g., +10 or -15)
  ae: number;      // Authenticity metric modifier (e.g., +5 or -20)
}

export interface GameChoice {
  text: string;     // What is written on the choice selection button
  effect: GameEffect; // The numerical consequence of picking this option
  nextSceneId: string; // The ID of the narrative node this choice jumps to
}

export interface GameScene {
  id: string;       // Unique identifier (e.g., "maya_act1_dilemma")
  title: string;    // Location or context banner header
  narrative: string;// The story prose describing the sociological constraint
  choices: GameChoice[]; // List of options available to the player
}

export interface CharacterProfile {
  name: string;
  role: string;
  bio: string;
  startSceneId: string;
}