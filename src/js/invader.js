const grille = document.querySelector('.grille')
let width = 20
let direction = 1
let invadersId
let goingRight = true
let aliensRemoved = []

for (let i = 0; i < 400; i++) {
  const div = document.createElement('div')
  grille.appendChild(div)
}

const div = Array.from(document.querySelectorAll('.grille div'))

const alienInvaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

function draw() {
    alienInvaders.forEach(invader => {
      if (!aliensRemoved.includes(invader)) {
        div[invader].classList.add('alien');
      }
    });
  }

draw()

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    div[alienInvaders[i]].classList.remove('alien')
  }
}

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
  remove()

  if (rightEdge && goingRight) {
    console.log("rightEdge && goingRight");
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width +1
      direction = -1
      goingRight = false
    }
  }

  if(leftEdge && !goingRight) {
    console.log("leftEdge && goingRight");
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width -1
      direction = 1
      goingRight = true
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction
  }

  draw()
}
invadersId = setInterval(moveInvaders, 600)
