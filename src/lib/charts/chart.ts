import * as d3 from "d3"

export interface DataPoint2D {
    label: string
    xValue: Date
    yValue: number
}

export function Plot(anchorNode: any, data: Array<DataPoint2D>) {
    const width = 200;
    const height = 100;

    const svg = d3.select(anchorNode)
        .append<SVGElement>('svg')
        .attr('width', width)
        .attr('height', height);

    const plotMargins = {
        top: 10,
        bottom: 30,
        left: 30,
        right: 10
    };
    const plotGroup = svg.append<SVGGElement>('g')
        .classed('plot', true)
        .attr('transform', `translate(${plotMargins.left},${plotMargins.top})`);

    const plotWidth = width - plotMargins.left - plotMargins.right;
    const plotHeight = height - plotMargins.top - plotMargins.bottom;

    const xScale = d3.scaleTime()
        .range([0, plotWidth]);
    const xAxis = d3.axisBottom(xScale);
    const xAxisGroup = plotGroup.append<SVGGElement>('g')
        .classed('x', true)
        .classed('axis', true)
        .attr('transform', `translate(${0},${plotHeight})`)
        .call(xAxis);

    const yScale = d3.scaleLinear()
        .range([plotHeight, 0]);
    const yAxis = d3.axisLeft(yScale);
    const yAxisGroup = plotGroup.append<SVGGElement>('g')
        .classed('y', true)
        .classed('axis', true)
        .call(yAxis);

    const pointsGroup = plotGroup.append<SVGGElement>('g')
        .classed('points', true);

    const extX = (d3.extent(data, d => d.xValue));
    xScale.domain([extX[0] ?? new Date(), extX[1] ?? new Date()])
        .nice();
    xAxisGroup.call(xAxis);

    const extY = d3.extent(data, d => d.yValue);
    yScale.domain([extY[0] ?? 0, extY[1] ?? 0])
        .nice();
    yAxisGroup.call(yAxis);

    const dataBound = pointsGroup.selectAll<SVGGElement, unknown>('.post')
        .data<DataPoint2D>(data);

    // delete extra points
    dataBound
        .exit()
        .remove();

    // add new points
    const enterSelection = dataBound
        .enter()
        .append<SVGGElement>('g')
        .classed('post', true);

    // update all existing points
    enterSelection.merge(dataBound)
        .attr('transform', (d) => `translate(${xScale(d.xValue)},${yScale(d.yValue)})`);
    enterSelection.append('circle')
        .attr('r', 2)
        .style('fill', 'red');
}