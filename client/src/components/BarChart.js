import React from 'react';
import d3 from 'd3';

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
    const margin = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 60,
    };
    this.state = {
      width: 960 - margin.left - margin.right,
      height: 500 - margin.top - margin.bottom,
      margin,
    };
  }
  componentWillMount() {
    const { margin, width, height } = this.state;
    const svg = d3
      .select('#bar-chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g');
  }

  render() {
    return <div id="bar-chart"></div>;
  }
}
