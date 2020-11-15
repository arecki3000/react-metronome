import React, { useState } from "react";
import "./Metronome.css";

const Metronome = () => {
  const [bpm, setBpm] = useState(100);
  let playing = false;

  const handleChange = (e) => {
    const bpm = e.target.value;
    setBpm((prevBpm) => bpm);
  };

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input
          type="range"
          min="60"
          max="240"
          value={bpm}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button>{playing ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Metronome;
