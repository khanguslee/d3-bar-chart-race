import React from 'react';

import BarChart from './BarChart';
import ChartSlider from './ChartSlider';

import mockData from '../test/mockData';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    // TODO: Fetch data from actual API
    this.setState({
      data: mockData,
    });
  }

  render() {
    const { data } = this.state;
    const chartData = data ? data[0][1] : [];
    const chartSliderMax = data ? data.length - 1 : 1;
    return (
      <div className="box">
        <BarChart data={chartData} />
        <ChartSlider min={0} max={chartSliderMax} />
      </div>
    );
  }
}
