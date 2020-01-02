import React from "react";

import "bulma-slider/dist/css/bulma-slider.min.css";
import bulmaSlider from "bulma-slider/dist/js/bulma-slider.min.js";

// TODO: Props to set min, max and starting value
export default function ChartSlider() {
  return (
    <input
      className="slider is-fullwidth"
      step="1"
      defaultValue="0"
      min="0"
      max="100"
      type="range"
      onChange={() => {}}
    />
  );
}
