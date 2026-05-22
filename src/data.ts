import { GameScene, CharacterProfile } from './types';

export const CHARACTERS: Record<string, CharacterProfile> = {
  maya: {
    name: "Maya",
    role: "The Corporate Climber",
    bio: "Navigating intense algorithmic performance metrics at a high-pressure tech firm.",
    startSceneId: "maya_act1"
  },
  alex: {
    name: "Alex",
    role: "The Gig Worker",
    bio: "Balancing multiple digital platform delivery scripts just to make rent.",
    startSceneId: "alex_act1"
  },
  chris: {
    name: "Chris",
    role: "The Student Maverick",
    bio: "Confronting automated grading rubrics and institutionally forced compliance standards.",
    startSceneId: "chris_act1"
  }
};

export const GAME_SCENES: Record<string, GameScene> = {
  // --- MAYA'S STORYLINE ---
  "maya_act1": {
    id: "maya_act1",
    title: "The Morning Performance Metric",
    narrative: "Your manager asks you to log your tasks using an automated activity-tracking software that takes random webcam snapshots to prove focus. Your team values absolute corporate submission, but it kills your creative workflow.",
    choices: [
      {
        text: "Smile and comply perfectly with the tracker.",
        effect: { sa: 15, ae: -20 },
        nextSceneId: "maya_act2"
      },
      {
        text: "Spoof the tracker data using a looping video background to work in peace.",
        effect: { sa: -25, ae: 20 },
        nextSceneId: "maya_act2"
      }
    ]
  },
  "maya_act2": {
    id: "maya_act2",
    title: "The Review Room",
    narrative: "Act II choice node placeholder... Your actions catch up to you during the quarterly evaluation sync.",
    choices: [
      { text: "Accept the evaluation outcome.", effect: { sa: 10, ae: -5 }, nextSceneId: "game_over" }
    ]
  },

  // --- GENERAL ENDING ENGINE ---
  "game_over": {
    id: "game_over",
    title: "Simulation Terminated",
    narrative: "You have reached the end of the script track layout. Check your dashboard profile tab to see your final sociological metric scores.",
    choices: []
  }
};