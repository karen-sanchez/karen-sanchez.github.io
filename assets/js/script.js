// chevrons
let colors = ["blue", "green", "red", "pink"]
let currentColor = 0
let lis = document.querySelectorAll("#chevsId li")

// this function takes in the elements that we want to change and adds a specified class to all of them

function addClass(elements, myClass) {

  // if there are no elements, we're done
  if (!elements) { return; }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }

  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }

  // add class to all chosen elements
  for (var i=0; i<elements.length; i++) {

    // if class is not already found
    if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {

      // add class
      elements[i].className += ' ' + myClass;
    }
  }
}

// color transition
setTimeout(function(){ 
  addClass(document.querySelector('.jumbotron'),'colorTrans');
}, 1000); 

// chevron colors transition
setTimeout(function(){ 

  function changeColor() {
    --currentColor
    if (currentColor < 0) currentColor = colors.length -1
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.color = colors[(currentColor +i) % colors.length]
    }
  }

  setInterval(changeColor, 1000)
}, 4000); 