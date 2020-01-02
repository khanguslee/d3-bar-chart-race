import React from 'react';
import * as d3 from 'd3';

import './BarChart.css';

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.barChart = React.createRef();
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

  componentDidMount() {
    this.renderBarChart();
  }

  componentDidUpdate() {
    this.renderBarChart();
  }

  renderBarChart() {
    const { margin, width, height } = this.state;
    const dataMax = d3.max(this.props.data, function(d) {
      return d.value;
    });
    const dataName = this.props.data.map(function(d) {
      return d.city;
    });
    const x = d3
      .scaleLinear()
      .range([0, width])
      .domain([0, dataMax]);

    const y = d3
      .scaleBand()
      .range([height, 0])
      .domain(dataName)
      .padding(0.1);

    const xAxis = d3
      .axisBottom(x)
      .ticks(5)
      .tickSizeInner([-height]);

    const yAxis = d3.axisLeft(y);

    const chart = d3
      .select(this.barChart.current)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Render axis
    chart
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    chart
      .append('g')
      .attr('class', 'y axis')
      .call(yAxis);

    // Render bars
    chart
      .selectAll('.bar')
      .data(this.props.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('height', y.bandwidth())
      .attr('y', function(d) {
        return y(d.city);
      })
      .attr('width', function(d) {
        return x(d.value);
      });
  }

  render() {
    const { margin, width, height } = this.state;

    return (
      <svg
        ref={this.barChart}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      ></svg>
    );
  }
}
