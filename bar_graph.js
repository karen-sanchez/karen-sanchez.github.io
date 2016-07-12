// Setting the general space for the graph
var outerWidth = 900;
      var outerHeight = 650;
      var margin = { left: 150, top: 60, right: 20, bottom: 175 };
      var barPadding = 0.1; // The higher the #, the thinner the bars
      var xColumn = "level";
      var yColumn = "skills";


// Then define width and height as the inner dimensions of the chart area.
      var innerWidth  = outerWidth  - margin.left - margin.right;
      var innerHeight = outerHeight - margin.top  - margin.bottom;

// Defining svg var
      var svg = d3.select(".chart").append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight);

// Appending the SVG group element, as represented by "g"
// This is used to group all SVG elements together, it is an element container that contains all child SVG
//  elements defined inside of it
      var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      var xAxisG = g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + innerHeight + ")")
      var yAxisG = g.append("g")
        .attr("class", "y axis");
      var xScale = d3.scale.linear().range(      [0, innerWidth]);
      var yScale = d3.scale.ordinal().rangeBands([0, innerHeight], barPadding);
      var color = d3.scale.category20();
      var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
        .ticks(5)                   // Use approximately 5 ticks marks.
        .tickFormat(d3.format("s")) // Use intelligent abbreviations, e.g. 5M for 5 Million
        .outerTickSize(0);          // Turn off the marks at the end of the axis.
      var yAxis = d3.svg.axis().scale(yScale).orient("left")
        .outerTickSize(0);          // Turn off the marks at the end of the axis.

      function render(data){

// So this is not the right way to have x,y axis display non-integers, what is the right way?
        // xScale.domain(data.map(function (d){ return d[xColumn]; }));
        // yScale.domain(data.map( function (d){ return d[yColumn]; }));

        xScale.domain([0, d3.max(data, function (d){ return d[xColumn]; })]);
        yScale.domain(       data.map( function (d){ return d[yColumn]; }));


        xAxisG.call(xAxis);
        yAxisG.call(yAxis);


// Specify the domains of the x and y scales
        var bars = g.selectAll("rect").data(data);
        bars.enter().append("rect")
          .transition()
          .attr("height", yScale.rangeBand())
          .ease("exp")
          .duration(200)
          .delay(function(d, i) {  return i * 200;} )

        bars
          .attr("x", 0)
          .attr("y",     function (d){ return yScale(d[yColumn]); })
          .attr("width", function (d){ return xScale(d[xColumn]); })
          .attr("fill", function (d) { return color(d.level); })
        bars.exit().remove();
      }


      function type(d){
        d.level = +d.level;
        return d;
        console.log(d.level);
      }

        d3.csv("skills.csv", type, render);
