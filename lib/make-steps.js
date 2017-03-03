
function makeSteps (n, startX, startY, increment, classes) {
  const steps = []
  let id = 1
  let x = 0

  for (let i = 0; i < n; i++) {
    steps.push([
      startX + (i * increment),
      startY,
      id, 
      classes[i] || ''
    ])

    id ++

    for (let j = 1; j <= x; j++) {
      steps.push([
        startX + (i * increment),
        startY - (j * increment),
        id,
        classes[i-j] || ''
      ])

      id ++
    }
    
    x ++
  }

  return steps
}

module.exports = makeSteps
