import React, { useState } from "react";
import "./About.css";

const melody = [
  // "3-4", "3-5", "1-7", "1-5", "2-5", "3-5","0-0", "2-8", "2-5", "3-5", "3-7", "0-0", "1-5", "2-7", "3-5", "3-4", "1-7", "1-5", "2-5", "3-5", "2-8", "2-5", "3-5", "3-7","0-0", "1-5", "2-7", "3-5", "3-4"
  "5-3","5-3","4-5","5-3","4-6","5-3","4-5","5-3", "6-4", "6-4", "5-6", "5-8", "6-3", "6-3", "5-5", "5-6", "5-3","5-3","4-5","5-3","4-6","5-3","4-5","5-3", "6-4", "6-4", "5-6", "5-8", "6-3", "6-3", "5-5", "5-6",
];


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

  "0-0": "/sounds/silent.mp3",
};
const MelodyPlayer = () => {
  const [activeNote, setActiveNote] = useState(null);

  const playMelody = async () => {
  for (let note of melody) {
    setActiveNote(note); 

    const audio = new Audio(process.env.PUBLIC_URL + audioFiles[note]);
    await audio.play();
    await new Promise(resolve => setTimeout(resolve, 400)); 

    setActiveNote(null); 
  }
};


 return (
  <div className="melody-container">
    <button className="download-btn" onClick={playMelody}>
      Play a test melody
    </button>
  </div>
);
};


export default MelodyPlayer;
