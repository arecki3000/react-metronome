import React, { useState } from "react";
import "./Metronome.css";
import click1 from "../sounds/click1.wav";
import click2 from "../sounds/click2.wav";

const Metronome = () => {
  const [metronomeState, setMetronomeState] = useState({
    bpm: 100,
    playing: false,
    count: 0
  });

  const sound1 = new Audio(click1);
  const sound2 = new Audio(click2);

  const playClick = () => {
    if (metronomeState.count % 2 === 0) {
      sound1.play();
    } else {
      sound2.play();
    }

    setMetronomeState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1
      };
    }, console.log("add count"));
  };

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
    let interval;
    if (metronomeState.playing) {
      clearInterval(interval);
      setMetronomeState((prevState) => {
        return {
          ...prevState,
          playing: false
        };
      });
    } else {
      interval = setInterval(() => {
        playClick();
      }, (60 / metronomeState.bpm) * 1000);
      setMetronomeState((prevState) => {
        return {
          ...prevState,
          playing: true
        };
      });
    }
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
