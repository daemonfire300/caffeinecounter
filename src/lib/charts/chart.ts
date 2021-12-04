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
        .append<SVGElement>('svg')
        .attr('width', width)
        .attr('height', height);

    let plotMargins = {
        top: 30,
        bottom: 30,
        left: 150,
        right: 30
    };
    let plotGroup = svg.append<SVGGElement>('g')
        .classed('plot', true)
        .attr('transform', `translate(${plotMargins.left},${plotMargins.top})`);

    let plotWidth = width - plotMargins.left - plotMargins.right;
    let plotHeight = height - plotMargins.top - plotMargins.bottom;

    let xScale = d3.scaleTime()
        .range([0, plotWidth]);
    let xAxis = d3.axisBottom(xScale);
    let xAxisGroup = plotGroup.append<SVGGElement>('g')
        .classed('x', true)
        .classed('axis', true)
        .attr('transform', `translate(${0},${plotHeight})`)
        .call(xAxis);

    let yScale = d3.scaleLinear()
        .range([plotHeight, 0]);
    let yAxis = d3.axisLeft(yScale);
    let yAxisGroup = plotGroup.append<SVGGElement>('g')
        .classed('y', true)
        .classed('axis', true)
        .call(yAxis);

    let pointsGroup = plotGroup.append<SVGGElement>('g')
        .classed('points', true);

    let extX = (d3.extent(data, d => d.xValue));
    xScale.domain([extX[0] ?? new Date(), extX[1] ?? new Date()])
        .nice();
    xAxisGroup.call(xAxis);

    let extY = d3.extent(data, d => d.yValue);
    yScale.domain([extY[0] ?? 0, extY[1] ?? 0])
        .nice();
    yAxisGroup.call(yAxis);

    let dataBound = pointsGroup.selectAll<SVGGElement, unknown>('.post')
        .data<DataPoint2D>(data);

    // delete extra points
    dataBound
        .exit()
        .remove();

    // add new points
    let enterSelection = dataBound
        .enter()
        .append<SVGGElement>('g')
        .classed('post', true);

    // update all existing points
    enterSelection.merge(dataBound)
        .attr('transform', (d) => `translate(${xScale(d.xValue)},${yScale(d.yValue)})`);
}