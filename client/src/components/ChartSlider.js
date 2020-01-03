import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import 'bulma-slider/dist/css/bulma-slider.min.css';
import bulmaSlider from 'bulma-slider/dist/js/bulma-slider.min.js';

import './ChartSlider.css';

function ChartSlider(props) {
  const [isPlaying, setPlaying] = useState(false);
  const [counter, setCounter] = useState(0);

  const playPauseHandler = () => {
    const isCurrentlyPlaying = !isPlaying;
    setPlaying(isCurrentlyPlaying);

    if (isCurrentlyPlaying) {
      // TODO: Create a 1 second timer that iterates through the slider
    }
  };

  const sliderHandler = event => {
    const sliderValue = event.target.value;
    setCounter(sliderValue);
    props.onChangeHandler(sliderValue);
  };

  return (
    <nav className="level">
      <div className="level-item">
        <div className="font-awesome-container" onClick={playPauseHandler}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </div>

        <input
          className={'slider is-fullwidth ' + (isPlaying ? 'is-success' : ' ')}
          step="1"
          defaultValue="0"
          onChange={sliderHandler}
          min={props.min}
          max={props.max}
          type="range"
        />
      </div>
    </nav>
  );
}

ChartSlider.defaultProps = {
  min: 0,
  max: 1,
  onChangeHandler: () => {},
};

export default ChartSlider;
