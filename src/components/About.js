import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="glass-card">
          <h2>About the project</h2>
          <p>
           This is an interactive guitar that has finished notes and ear training. You can tap on the frets and strings to hear the corresponding sound.

          </p>
          <h3>How to get used to it?</h3>
          <ul>
            <li>•Press the fret until it barely reaches a note.</li>
            <li>•Choose the "Show Buttons" button for visualization.</li>
            <li>•Play the notes in the following table below.</li>
          </ul>
         <button className="download-btn" onClick={() => window.open("/notes.pdf", "_blank")}>Open PDF With Sheet Music
</button>
        </div>

        
       <div className="glass-card">
  <h2>Note theory</h2>
  <p>The following notes are used on the guitar:</p>
  <ul>
    <li>• E (Mi)</li>
    <li>• A (La)</li>
    <li>• D (Re)</li>
    <li>• G (Sol)</li>
    <li>• B (Si)</li>
    <li>• e (mі)</li>
  </ul>
  <p>These notes form the standard guitar tuning</p>

  <button 
    className="download-btn" 
    onClick={() => window.open("https://www.musictheory.net/lessons", "_blank")}
  >
    Learn more...
  </button>
</div>


       <div className="glass-card">
  <h2>Learn TABs</h2>
  <p>The most popular tablatures on the site (and in general all tabs on the server):</p>
  <ul>
    <li>• KINO - Pack of Cigarettes</li>
    <li></li>
    <li></li>  
    <li>• Marilyn Manson - Sweet Dreams</li>
    <li></li>
    <li>• Metallica - Nothing Else Matters</li>
  </ul>
  <p>Try each one, choose what you like and play on our virtual guitar, or on a real one if you have one!</p>

  <button 
    className="download-btn" 
    onClick={() => {
      document.getElementById("tabs-section").scrollIntoView({ behavior: "smooth" });
    }}
  >
    Go to the TABs
  </button>
</div>

      </div>
    </section>
  );
};

export default About;
