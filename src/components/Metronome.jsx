import React, { useState } from "react";
import "./Metronome.css";

const Metronome = () => {
  const [metronomeState, setMetronomeState] = useState({
    bpm: 100,
    playing: false
  });

  const handleChangeBpm = (e) => {
    const bpm = e.target.value;
    setMetronomeState((prevState) => {
      return {
        ...prevState,
        bpm
      };
    });
  };

  const handleChangePlaying = (e) => {
    setMetronomeState((prevState) => {
      return {
        ...prevState,
        playing: !prevState.playing
      };
    });
  };

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{metronomeState.bpm} BPM</div>
        <input
          type="range"
          min="60"
          max="240"
          value={metronomeState.bpm}
          onChange={(e) => handleChangeBpm(e)}
        />
      </div>
      <button onClick={(e) => handleChangePlaying(e)}>
        {metronomeState.playing ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Metronome;
