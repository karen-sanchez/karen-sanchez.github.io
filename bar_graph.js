// Setting the general space for the graph
var outerWidth = 900;
      var outerHeight = 450;
      var margin = { left: 300, top: 60, right: 20, bottom: 60 };
      var barPadding = 0.1; // The higher the #, the thinner the bars

      var xColumn = "level";
      var yColumn = "skills";
      // var xAxisLabelText = "Level";
// Get the current coordinates of the first element, or set the coordinates of every element, 
// in the set of matched elements, relative to the document. 
      // var xAxisLabelOffset = 55;

// Then define width and height as the inner dimensions of the chart area.
      var innerWidth  = outerWidth  - margin.left - margin.right;
      var innerHeight = outerHeight - margin.top  - margin.bottom;

// Defining svg var
      var svg = d3.select("#skills").append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight);

// Appending the SVG group element, as represented by "g"     
// This is used to group all SVG elements together, it is an element container that contains all child SVG
//  elements defined inside of it    
      var g = svg.append("g")

// This moves the entire graph to it's specified coordinates
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

       
      var xAxisG = g.append("g")

// Don't know what this is  
// Seems to make x, y lines thicker    
        .attr("class", "x axis")
        // .selectAll("text")
         // .attr("transform", "rotate(-60)") 

// Why do I need two transforms?        
        .attr("transform", "translate(0," + innerHeight + ")")
        // .attr("transform", "rotate(-60)") 
      // var xAxisLabel = xAxisG.append("text")
      //   .style("text-anchor", "middle")
        // .attr("x", innerWidth / 2)
        // .attr("y", xAxisLabelOffset)
        // .attr("class", "label")
        // .text(xAxisLabelText);
      var yAxisG = g.append("g")
        .attr("class", "y axis");



// ORDINAL SCALES
// This is another type of scale that you will find your­self using quite often. 
// Thats because our data may not always con­sist of num­bers. It may con­tain other 
// things — the best exam­ple of which is — alpha­bets. Alpha­bets are ordi­nal val­ues,
// i.e. they can be arranged in an order, but you can­not derive one alpha­bet from 
// the other unlike numbers(which usu­ally fol­low an incre­men­tal sequence).
// Ordinal scales have a discrete domain, such as a set of names or categories.
// Constructs a new linear scale with the default domain [0,1] and the default range
// [0,1]. Thus, the default linear scale is equivalent to the identity function for 
// numbers; for example linear(0.5) returns 0.5.
// In other words linear is used for integers
      var xScale = d3.scale.linear().range([0, innerWidth]);
      var yScale = d3.scale.ordinal().rangeBands([0, innerHeight], barPadding);

      var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
        .ticks(10)                   // Use approximately 5 ticks marks.
        // .tickFormat(d3.format("s")) // Use intelligent abbreviations, e.g. 5M for 5 Million
        // .outerTickSize(0);          // Turn off the marks at the end of the axis.
      var yAxis = d3.svg.axis().scale(yScale).orient("left")
        // .outerTickSize(0);          // Turn off the marks at the end of the axis.

      function render(data){

        xScale.domain([0, d3.max(data, function (d){ return d[xColumn]; })]);
        yScale.domain(       data.map( function (d){ return d[yColumn]; }));

        xAxisG.call(xAxis);
        yAxisG.call(yAxis);


// Specify the domains of the x and y scales

   // xScale.domain(data.map(function(d) { return d.skills; }) );
   // yScale.domain([0, d3.max(data, function(d) {  return d.level; }) ] );


        var bars = g.selectAll("rect").data(data);
        bars.enter().append("rect")
          .attr("height", yScale.rangeBand())
          // .transition().duration(1000)
          // .delay(function(d, i) {  return i * 200;} )
          //            .style("fill", function(d,i) {  return 'rgb(200, 455, ' + ((i*30) + 100) +')'})
          //             .attr({
          //       'x': function(d) {  return xScale(d.level); },
          //       'y': function(d) {  return yScale(d.skills);  },
                
          //    })              
        bars
          .attr("x", 0)
          .attr("y",     function (d){ return yScale(d[yColumn]); })
          .attr("width", function (d){ return xScale(d[xColumn]); });
        bars.exit().remove();
      }


      function type(d){
        d.level = +d.level;
        return d;
        console.log(d.level);
      }

        d3.csv("skills.csv", type, render);
