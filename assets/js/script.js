let colors = ["blue", "green", "red", "pink"]
let currentColor = 0
let lis = document.querySelectorAll("#chevsId li")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}

setInterval(changeColor, 1000)

function load() {
  console.log("load event detected!");
}
window.onload = load;