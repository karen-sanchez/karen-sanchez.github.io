$(document).ready(function() {


    $('.hola').hide().show(1000);
    	$('.top').hide().show(2000);
            $('.middle').hide().show(4000);
                $('.bottom').hide().show(8000);

    setTimeout(function() {
        $('.hola').css('color', '#A9A9A9');
    }, 3000);

    setTimeout(function() {
        $('.top').css('color', '#FF3B3F');
    }, 4000);

    setTimeout(function() {
        $('.middle').css('color', '#A9A9A9');
    }, 6000);

    setTimeout(function() {
        $('.bottom').css('color', '#FF3B3F');
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



