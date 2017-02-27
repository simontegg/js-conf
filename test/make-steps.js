const test = require('tape')
const makeSteps = require('../lib/make-steps')

test('makes an array of coordinates arranged in a step pattern', (t) => {
  const expected = [
    [100, 450, 1],
    [200, 450, 2],
    [200, 350, 3],
    [300, 450, 4], 
    [300, 350, 5], 
    [300, 250, 6],
    [400, 450, 7],
    [400, 350, 8], 
    [400, 250, 9],
    [400, 150, 10],
    [500, 450, 11],
    [500, 350, 12],
    [500, 250, 13],
    [500, 150, 14],
    [500, 50, 15]
  ]

  const actual = makeSteps(5, 100, 450)

  t.deepEqual(actual, expected)
  t.end()

})
