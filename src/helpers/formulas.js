export const checkCollision = (obj, laser) => {
  let rect1 = obj.getBoundingClientRect()
  let rect2 = laser.getBoundingClientRect()

  return !(rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top)

  }

  export const checkShieldHit = (obj, laser, shieldState) => {
    if (shieldState > 0) {
      let rect1 = obj.getBoundingClientRect()
      let rect2 = laser.getBoundingClientRect()

      return !(rect2.left > rect1.right ||
        rect2.right < rect1.left ||
        rect2.top > rect1.bottom ||
        rect2.bottom < rect1.top)
      }
      return false
    }
