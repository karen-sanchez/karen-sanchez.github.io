$(document).ready(function() {


    $('.hola').hide().show(1000);
    	$('.top').hide().show(2000);
            $('.middle').hide().show(4000);
                $('.bottom').hide().show(8000);

    setTimeout(function() {
        $('.hola').css('color', '#f2f2f2');
    }, 3000);

    setTimeout(function() {
        $('.top').css('color', '#f2f2f2');
    }, 4000);

    setTimeout(function() {
        $('.middle').css('color', '#f2f2f2');
    }, 6000);

    setTimeout(function() {
        $('.bottom').css('color', '#f2f2f2');
    }, 8000);

    $('#bio h3').css('display', 'block');

     // $('#skills').hover(function() {
     //    $('#skills').css("background-color", "red");
     // })
})

//     d3.csv("skills.csv", function (myArrayOfObjects) {
//     myArrayOfObjects.forEach(function (d) {
//         console.log(d.skills + "," + d.level);
//     });
// });
// var scale = d3.scale.linear()
//     .domain([1, 5])
//     .range([0, 200]);

// var svg = d3.select("body").append("svg")
//     .attr("width", 250)
//     .attr("height", 250);

//     function render(data, color) {

//         // Bind data
//         var rects = svg.selectAll("rect").data(data);

//         // Enter
//         rects.enter().append("rect")
//             .attr("y", 50)
//             .attr("width", 20)
//             .attr("height", 20)
            
//          // Update
//          rects
//             .attr("x", scale) 
//             .attr("fill", color); 

//          // Exit   
//         rects.exit().remove();
//     }   

// setTimeout(   function (){ render([1, 2, 2.5],          "red");     }, 1000);
// setTimeout(   function (){ render([1, 2, 3, 4, 5],      "blue");    }, 2000);
// setTimeout(   function (){ render([1, 2],               "green");   }, 3000);
// setTimeout(   function (){ render([3, 4, 5],            "cygan");   }, 4000);
// setTimeout(   function (){ render([4, 5],               "magenta"); }, 5000);

    // var svg = d3.select("body").append("svg")
    //     .attr("width", 250)
    //     .attr("height", 250);

    // var outerWidth = 350;
    // var outerHeight = 250;

    // var margin = { left: 30, top: 30, right: 30, bottom: 30};

    //        function render(data){

    //         // Bind data
    //         var circles = svg.selectAll("circle").data(data);

    //         // Enter
    //         circles.enter().append("circle")
    //             .attr("r", 10);
            
    //         // Update
    //         circles
    //             .attr("cx", function (d){  return d.x; } )
    //             .attr("cy", function (d){  return d.y; } );

    //          // Exit
    //          circles.exit().remove();        
    //    } 

    //         function type(d){
    //             d.x = +d.x
    //             d.y = +d.y;
    //             return d;
    //         }

    //         d3.csv("skills.csv", type, render);

// var xColumn = "skills";
// var yColumn = "level";
// 










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
           .style("fill", function(d,i) {  return 'rgb(100, 20, ' + ((i*30) + 100) +')'});

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