var data = [[800, 5.70],
            [3100, 2.85],
            [9600, 2.49],
            [25300, 1.57],
            [40000, 1.78]];

var table = d3.select('body')
  .append('svg')
  .attr('width', 700)
  .attr('height', 400)
          
var xScale = d3.scaleLinear()
  .domain([0, 40000])
  .range([0, 500]);

var yScale = d3.scaleLinear()
  .domain([0, 6])
  .range([300, 0]);

table.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', (d) => {
    return xScale(d[0])
  })
  .attr('cy', (d) => {
    return yScale(d[1])
  })
  .attr('r', 5);

var xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(10);

table.append("g")
  .attr("transform", "translate(0, 300)")
  .call(xAxis);

var yAxis = d3.axisLeft()
  .scale(yScale)

table.append("g")
  .call(yAxis);