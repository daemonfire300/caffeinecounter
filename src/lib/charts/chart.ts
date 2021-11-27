import * as d3 from "d3"

export interface DataPoint2D {
    label: string
    xValue: Date
    yValue: number
}

export function Plot(anchorNode: string, data: Array<DataPoint2D>) {
    const width = 960;
    const height = 480;

    let svg = d3.select(anchorNode)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    let plotMargins = {
        top: 30,
        bottom: 30,
        left: 150,
        right: 30
    };
    let plotGroup = svg.append('g')
        .classed('plot', true)
        .attr('transform', `translate(${plotMargins.left},${plotMargins.top})`);

    let plotWidth = width - plotMargins.left - plotMargins.right;
    let plotHeight = height - plotMargins.top - plotMargins.bottom;

    let xScale = d3.scaleTime()
        .range([0, plotWidth]);
    let xAxis = d3.axisBottom(xScale);
    let xAxisGroup = plotGroup.append('g')
        .classed('x', true)
        .classed('axis', true)
        .attr('transform', `translate(${0},${plotHeight})`)
        .call(xAxis);

    let yScale = d3.scaleLinear()
        .range([plotHeight, 0]);
    let yAxis = d3.axisLeft(yScale);
    let yAxisGroup = plotGroup.append('g')
        .classed('y', true)
        .classed('axis', true)
        .call(yAxis);

    let pointsGroup = plotGroup.append('g')
        .classed('points', true);

    let [minExtX, maxExtX] = d3.extent(data, d => d.xValue);
    minExtX = minExtX ?? new Date();
    maxExtX = maxExtX ?? new Date();
    let extY = d3.extent(data, d => d.yValue);
    xScale.domain([minExtX, maxExtX])
        .nice();
    xAxisGroup.call(xAxis);

    yScale.domain(extY)
        .nice();
    yAxisGroup.call(yAxis);
}