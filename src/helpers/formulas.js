export const checkCollision = (el1, el2) => {
  let rect1 = el1.getBoundingClientRect()
  let rect2 = el2.getBoundingClientRect()

  return !(rect2.left > rect1.right ||
          rect2.right < rect1.left ||
          rect2.top > rect1.bottom ||
          rect2.bottom < rect1.top)
}

// export const moveElement = (id) => {
//   let el = document.getElementById(`#${id}`)
// }
