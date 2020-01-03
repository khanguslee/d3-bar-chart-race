import React from 'react';

import BarChart from './BarChart';
import ChartSlider from './ChartSlider';

import mockData from '../test/mockData';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      time: 0,
    };
  }
  componentDidMount() {
    // TODO: Fetch data from actual API
    this.setState({
      data: mockData,
    });
  }

  chartSliderHandler = timeValue => {
    this.setState({ time: timeValue });
  };

  render() {
    const { data, time } = this.state;
    const chartData = data ? data[time][1] : [];
    const chartSliderMax = data ? data.length - 1 : 1;
    return (
      <div className="box">
        <BarChart data={chartData} />
        <ChartSlider
          min={0}
          max={chartSliderMax}
          onChangeHandler={this.chartSliderHandler}
        />
      </div>
    );
  }
}
