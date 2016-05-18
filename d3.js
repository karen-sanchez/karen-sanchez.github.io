    var margin = { top: 20, right: 10, bottom: 100, left: 40},
        width = 700 - margin.right - margin.left,
        height = 500 - margin.top - margin.bottom;

    var svg = d3.select("#skills")
        .append("svg")
        .attr({             
            "width"  : width + margin.right + margin.left,
            "height" : height + margin.top + margin.bottom

})    
        .append("g")
        .attr("transform", "translate(" + margin.left +',' + margin.right + ") ");

    var xScale = d3.scale.ordinal()
        .rangeRoundBands([0, width], 0.2, 0.2);

    var yScale = d3.scale.linear()
        .range([height, 0]);

// Define axis

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");          

     d3.csv("skills.csv", function(error, data) {
        if(error) console.log("Error: data not loaded");
       

     data.forEach(function(d) {
        d.level = +d.level; 
        d.skills = d.skills;
        console.log(d.level);
});    

// Sorting data from greatest to smallest

    data.sort(function(a, b) {
        return b.level - a.level;
});

// Specify the domains of the x and y scales

   xScale.domain(data.map(function(d) { return d.skills; }) );
   yScale.domain([0, d3.max(data, function(d) {  return d.level; }) ] );

// Draw the bars     
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("height", 0)
            .attr("y", height)
            .transition().duration(3000)
            .delay(function(d,i) {  return i * 200;} )
            .attr({
                'x': function(d) {  return xScale(d.skills); },
                'y': function(d) {  return yScale(d.level);  },
                'width': xScale.rangeBand(),
                'height': function(d) {  return height - yScale(d.level); }

})
           .style("fill", function(d,i) {  return 'rgb(100, 200, ' + ((i*30) + 100) +')'});

// Label the bars
        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text(function(d) {  return d.level; })
            .attr("x", function(d) {  return xScale(d.skills) + xScale.rangeBand()/2;})
            .attr("y", function(d) {  return yScale(d.level) + 12;  })
            .style("fill", "white")
            .style("text-anchor", "middle");

// Draw the x axis
         svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + height + ") " )
            .call(xAxis)
            .selectAll("text")
            .attr("transform", "rotate(-60)") 
            .attr("dx", "-.8em")
            .attr("dy", ".25em")
            .style("text-anchor", "end")
            .style("font-size", "12px");

// Draw the y axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)  
            .style("font-size", "12px");  
 });        

// var myColors = d3.scale.category10();     