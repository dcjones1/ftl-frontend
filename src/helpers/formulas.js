export const calculateNextPosition = (x, y, angle, divisor = 300) => {
  const realAngle = (angle * -1) + 90
  const stepsX = radiansToDegrees(Math.cos(degreesToRadian(realAngle))) / divisor
  const stepsY = radiansToDegrees(Math.sin(degreesToRadian(realAngle))) / divisor
  return {
    x: x + stepsX,
    y: y - stepsY,
  }
}
