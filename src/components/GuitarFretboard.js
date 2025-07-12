import React, { useState } from "react";
import "./GuitarFretboard.css";
import guitarNeck from "../assets/guitar-neck.png"; 


const strings = 6;
const frets = 13;

//  X
const fretPositions = [400, 470, 532, 590, 645, 700, 750, 795, 840, 880, 920, 960, 995];

// Y 
const stringPositions = [527, 512, 498, 486, 471 ,456];

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

const playSound = (string, fret) => {
  const key = `${string}-${fret}`;
  if (audioFiles[key]) {
    const audio = new Audio(audioFiles[key]);
    audio.play();
  }
};

const GuitarFretboard = () => {
  
  const [buttonsVisible, setButtonsVisible] = useState(false);

  return (
    <div className="fretboard"  id="guit">
      <img src={guitarNeck} alt="Гітарний гриф" className="guitar-neck" />

      {/*  <button className="toggle-button" onClick={() => setButtonsVisible(!buttonsVisible)}>
        {buttonsVisible ? "Приховати кнопки" : "Показати кнопки"} 
      </button>*/}

      {Array.from({ length: strings }).map((_, stringIdx) =>
        Array.from({ length: frets }).map((_, fretIdx) => {
          const width = 65 - fretIdx * 3.3; 
          const yOffset = stringIdx <= 2 ? fretIdx * 0.7 : 0; 

          return (
            <button
              key={`${stringIdx}-${fretIdx}`}
              className="fret-button"
              style={{
                left: `${fretPositions[fretIdx]}px`,
                top: `${stringPositions[stringIdx] + yOffset}px`,
                width: `${width}px`,
                backgroundColor: buttonsVisible ? "rgba(255, 200, 0, 0.9)" : "transparent",
                border: "none",
              }}
              onClick={() => playSound(strings - stringIdx, fretIdx)}
            />
          );
        })
      )}
    </div>
  );
};

export default GuitarFretboard;