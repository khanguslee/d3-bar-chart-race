import React from 'react';

import 'bulma-slider/dist/css/bulma-slider.min.css';
import bulmaSlider from 'bulma-slider/dist/js/bulma-slider.min.js';

function ChartSlider(props) {
  return (
    <input
      className="slider is-fullwidth"
      step="1"
      defaultValue="0"
      onChange={props.onChangeHandler}
      min={props.min}
      max={props.max}
      type="range"
    />
  );
}

ChartSlider.defaultProps = {
  min: 0,
  max: 1,
  onChangeHandler: () => {},
};

export default ChartSlider;
