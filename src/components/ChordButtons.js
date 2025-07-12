import React from "react";

const audioFiles = {
   "6-0": "/sounds/trimmed_E, 6.mp3",
  "6-1": "/sounds/trimmed_F, 6.mp3",
  "6-2": "/sounds/trimmed_F%23, 6.mp3",  
  "6-3": "/sounds/trimmed_G, 6.mp3",
  "6-4": "/sounds/trimmed_G%23, 6.mp3",  
  "6-5": "/sounds/trimmed_A, 6.mp3",
  "6-6": "/sounds/trimmed_A%23, 6.mp3",  
  "6-7": "/sounds/trimmed_B, 6.mp3",
  "6-8": "/sounds/trimmed_C, 6.mp3",
  "6-9": "/sounds/trimmed_C%23, 6.mp3",  
  "6-10": "/sounds/trimmed_D, 6.mp3",
  "6-11": "/sounds/trimmed_D%23, 6.mp3", 
  "6-12": "/sounds/trimmed_E2, 6.mp3",

  "5-0": "/sounds/trimmed_A, 5.mp3",
  "5-1": "/sounds/trimmed_A%23, 5.mp3",
  "5-2": "/sounds/trimmed_B, 5.mp3",  
  "5-3": "/sounds/trimmed_C, 5.mp3",
  "5-4": "/sounds/trimmed_C%23, 5.mp3",
  "5-5": "/sounds/trimmed_D, 5.mp3",
  "5-6": "/sounds/trimmed_D%23, 5.mp3",
  "5-7": "/sounds/trimmed_E, 5.mp3",
  "5-8": "/sounds/trimmed_F, 5.mp3",
  "5-9": "/sounds/trimmed_F%23, 5.mp3",
  "5-10": "/sounds/trimmed_G, 5.mp3",
  "5-11": "/sounds/trimmed_G%23, 5.mp3",
  "5-12": "/sounds/trimmed_A2, 5.mp3",

  "4-0": "/sounds/trimmed_D, 4.mp3",
  "4-1": "/sounds/trimmed_D%23, 4.mp3",
  "4-2": "/sounds/trimmed_E, 4.mp3",  
  "4-3": "/sounds/trimmed_F, 4.mp3",
  "4-4": "/sounds/trimmed_F%23, 4.mp3",
  "4-5": "/sounds/trimmed_G, 4.mp3",
  "4-6": "/sounds/trimmed_G%23, 4.mp3",
  "4-7": "/sounds/trimmed_A, 4.mp3",
  "4-8": "/sounds/trimmed_A%23, 4.mp3",
  "4-9": "/sounds/trimmed_B, 4.mp3",  
  "4-10": "/sounds/trimmed_C, 4.mp3",
  "4-11": "/sounds/trimmed_C%23, 4.mp3",  
  "4-12": "/sounds/trimmed_D2, 4.mp3",
  
  "3-0": "/sounds/trimmed_G, 3.mp3",
  "3-1": "/sounds/trimmed_G%23, 3.mp3",
  "3-2": "/sounds/trimmed_A, 3.mp3",  
  "3-3": "/sounds/trimmed_A%23, 3.mp3",
  "3-4": "/sounds/trimmed_B, 3.mp3",  
  "3-5": "/sounds/trimmed_C, 3.mp3",
  "3-6": "/sounds/trimmed_C%23, 3.mp3",
  "3-7": "/sounds/trimmed_D, 3.mp3",
  "3-8": "/sounds/trimmed_D%23, 3.mp3",
  "3-9": "/sounds/trimmed_E, 3.mp3",  
  "3-10": "/sounds/trimmed_F, 3.mp3",
  "3-11": "/sounds/trimmed_F%23, 3.mp3",
  "3-12": "/sounds/trimmed_G2, 3.mp3",

  "2-0": "/sounds/trimmed_B, 2.mp3",
  "2-1": "/sounds/trimmed_C, 2.mp3",
  "2-2": "/sounds/trimmed_C%23, 2.mp3",  
  "2-3": "/sounds/trimmed_D, 2.mp3",
  "2-4": "/sounds/trimmed_D%23, 2.mp3",  
  "2-5": "/sounds/trimmed_E, 2.mp3",
  "2-6": "/sounds/trimmed_F, 2.mp3",  
  "2-7": "/sounds/trimmed_F%23, 2.mp3",
  "2-8": "/sounds/trimmed_G, 2.mp3",
  "2-9": "/sounds/trimmed_G%23, 2.mp3",
  "2-10": "/sounds/trimmed_A, 2.mp3",
  "2-11": "/sounds/trimmed_A%23, 2.mp3",
  "2-12": "/sounds/trimmed_B2, 2.mp3",

  "1-0": "/sounds/trimmed_E, 1.mp3",
  "1-1": "/sounds/trimmed_F, 1.mp3",
  "1-2": "/sounds/trimmed_F%23, 1.mp3", 
  "1-3": "/sounds/trimmed_G, 1.mp3",
  "1-4": "/sounds/trimmed_G%23, 1.mp3", 
  "1-5": "/sounds/trimmed_A, 1.mp3",
  "1-6": "/sounds/trimmed_A%23, 1.mp3", 
  "1-7": "/sounds/trimmed_B, 1.mp3",
  "1-8": "/sounds/trimmed_C, 1.mp3",
  "1-9": "/sounds/trimmed_C%23, 1.mp3", 
  "1-10": "/sounds/trimmed_D, 1.mp3",
  "1-11": "/sounds/trimmed_D%23, 1.mp3",
  "1-12": "/sounds/trimmed_E2, 1.mp3",
};
const chords = {
  A: ["5-0", "4-2", "3-2", "2-2"],
  Am: ["5-0", "4-2", "3-2", "2-1"],
  B: ["5-2", "4-4", "3-4", "2-4", "1-2"],
  Bm: ["5-2", "4-4", "3-4", "2-3", "1-2"],
  C: ["5-3", "4-2", "3-0", "2-1"],
  Cm: ["5-3", "4-1", "3-0", "2-1", "1-3"], 
  G: ["6-3", "5-2", "4-0", "3-0", "2-3", "1-3"], 
  Gm: ["6-3", "5-5", "4-5", "3-3"],  
  D: ["4-0", "3-2", "2-3", "1-2"],
  Dm: ["4-0", "3-2", "2-3", "1-1"],        
  F: ["6-1", "5-3", "4-3", "3-2"],
  Fm: ["6-1", "5-3", "4-3", "3-1"],        
  E: ["6-0", "5-2", "4-2", "3-1", "2-0", "1-0"],
  Em: ["6-0", "5-2", "4-2", "3-0", "2-0", "1-0"],  
};



const playChord = (chord) => {
  if (!chords[chord]) return;

  chords[chord].forEach((noteKey) => {
    const note = audioFiles[noteKey];
    if (note) {
      const audio = new Audio(process.env.PUBLIC_URL + note);
      audio.play();
    }
  });
};


const ChordButtons = () => {
  return (
    <div className="chord-buttons">
      <div className="buttons">
        {Object.keys(chords).map((chord) => (
          <button key={chord} onClick={() => playChord(chord)}>
            {chord}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChordButtons;
