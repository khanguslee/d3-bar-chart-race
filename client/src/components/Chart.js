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
    return (
      <div className="box">
        <BarChart />
        <ChartSlider />
      </div>
    );
  }
}
