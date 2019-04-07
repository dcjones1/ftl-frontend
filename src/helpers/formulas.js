export const checkCollision = (obj, lasers) => {
  for(let i = 0; i < lasers.length; i++) {
    let rect1 = obj.getBoundingClientRect()
    let rect2 = lasers[i].getBoundingClientRect()

    return !(rect2.left > rect1.right ||
            rect2.right < rect1.left ||
            rect2.top > rect1.bottom ||
            rect2.bottom < rect1.top)
  }
}
