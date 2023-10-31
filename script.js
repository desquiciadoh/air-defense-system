// html creating

const main = document.querySelector('div')

let width = 20
let height = 10

for (let i = 0; i < height; i++) {
  const row = document.createElement('div')
  row.classList = 'row'
  for (let j = 0; j < width; j++) {
    const div = document.createElement('div')
    row.append(div)
  }
  main.append(row)
}

for (let i = 0; i < height; i++) {
  for (let j = 0; j <= i + 3; j++) {
    main.children[i].children[(width - 1) - j].style.border = '1px solid lightgreen'
  }
}

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (main.children[i].children[j].style.border !== '1px solid lightgreen') {
      main.children[i].children[j].style.border = '1px solid red'
    }
  }
}

for (let i = 0; i < width; i++) {
  main.children[height - 1].children[i].style.border = '1px solid grey'
}

function fire () {
  let x = width - 1 
  let y = height - 2
  let rx = Math.floor(Math.random() * x)
  let ry = Math.floor(Math.random() * y)
  let rocket = main.children[ry].children[rx]
  rocket.style.backgroundImage = 'url(aircraft.png)'
  const sam = main.children[y].children[x]
  sam.style.backgroundImage = 'url(ry.png)'
  if (main.children[ry].children[rx].style.border == '1px solid red') {
    console.log('Уничтожение цели маловероятно')    
  }
  let interval = setInterval(() => {
    if (rx === 0 && x > 0) {
      main.children[y].children[x].style.backgroundImage = 'url(exp.png)'
      setTimeout(() => {
        main.children[y].children[x].style.backgroundImage = 'none'
      }, 1500)
      main.children[ry].children[rx].style.backgroundImage = 'none'
      clearInterval(interval)
      console.log('Не удалось уничтожить цель')
      fire()
    } else if (x === rx && y === ry) {
      main.children[y].children[x].style.backgroundImage = 'url(exp.png)'
      setTimeout(() => {
        main.children[y].children[x].style.backgroundImage = 'none'
      }, 1500)
      clearInterval(interval)
      console.log('Цель успешно уничтожена')
      fire()
    } else if (rx === 0 && ry === 0 || x === 0 && y === 0) {
      clearInterval(interval)
      main.children[y].children[x].style.backgroundImage = 'url(exp.png)'
      setTimeout(() => {
        main.children[y].children[x].style.backgroundImage = 'none'
      }, 1500)
    } else {
      main.children[ry].children[rx].style.backgroundImage = 'none'
      rx -= 1
      main.children[ry].children[rx].style.backgroundImage = 'url(aircraft.png)'
      if (y === ry) {
        main.children[y].children[x].style.backgroundImage = 'none'
        x -= 2
        main.children[y].children[x].style.backgroundImage = 'url(rx.png)'
      } else {
        if (y - 1 === ry) {
          main.children[y].children[x].style.backgroundImage = 'none'
          y -= 1
          main.children[y].children[x].style.backgroundImage = 'url(ry.png)'
        } else {
          main.children[y].children[x].style.backgroundImage = 'none'
          y -= 2
          main.children[y].children[x].style.backgroundImage = 'url(ry.png)'
        }
      }
    }
  }, 750);
} 

fire()
