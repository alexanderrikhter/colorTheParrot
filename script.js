let colors = ["blue", "red", "yellow","green"]
let currentColor = 0
let colorButton = document.querySelector('.colorButton')
let modeButton = document.querySelector('.changeMode')
function getRandom (list) {
  return list[Math.floor((Math.random()*list.length))];
};

let buttons = document.querySelector('.controls');

let parts = [
  /*body*/document.querySelectorAll('.parrot,.wing,.wing-color2-inner'),
  /*wing*/document.querySelector('.wing-color1'),
  /*wing highlight*/document.querySelector('.wing-color2'),
  /*upper beak*/document.querySelector('.beak-upper'),
  /*lower beak*/document.querySelector('.beak-lower'),
  /*claw*/document.querySelector('.leg'),
  /*tail wing*/document.querySelectorAll('.tail-wing'),
  /*head wing*/document.querySelector('.feather'),
  /*eye patch*/document.querySelector('.eye-patch'),
  /*eye*/document.querySelector('.eye'),
];
let currentEl = 0
function chooseMode() {
  switch(modeButton.innerText) {
    case "Mode:Rand": 
      colorButton.style = "display: none"
      return getRandom(colors)
    case "Mode:Loop":
      colorButton.style = "display: none"
      if (currentColor < colors.length-1) currentColor+=1 
      else currentColor = 0
      return colors[currentColor]
    case "Mode:Input":
      colorButton.style = "display: block"
      return colorButton.value
  }
}

buttons.addEventListener('click', x=> {
  let color = chooseMode()
  for (let i=0;i < parts.length; i++) {
    if (x.target.id == buttons.children[i].id) {
      switch (i) {
        case 0:  
          parts[i][0].style.backgroundColor = color
          parts[i][1].style.backgroundColor = color
          parts[i][2].style.borderTopColor = color
        case 2:
          parts[i].style.borderTopColor = color
        case 6: 
          parts[i][0].style.backgroundColor = color
          parts[i][1].style.backgroundColor = color
        default:
          parts[i].style.backgroundColor = color
      }
    }
  }
})
  
modeButton.addEventListener('click', function() {
  if      (modeButton.innerHTML=="Mode:Rand") modeButton.innerHTML = "Mode:Loop"
  else if (modeButton.innerHTML=="Mode:Loop") modeButton.innerHTML = "Mode:Input"
  else    modeButton.innerHTML = "Mode:Rand"
})





