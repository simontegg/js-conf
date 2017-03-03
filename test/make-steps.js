const test = require('tape')
const makeSteps = require('../lib/make-steps')

test('makes an array of coordinates arranged in a step pattern', (t) => {
  const expected = [
    [100, 450, 1, 'fill-opacity-0'],
    [200, 450, 2, 'fill-opacity-20'],
    [200, 350, 3, 'fill-opacity-0'],
    [300, 450, 4, 'fill-opacity-40'],
    [300, 350, 5,'fill-opacity-20' ],
    [300, 250, 6, 'fill-opacity-0'],
    [400, 450, 7, 'fill-opacity-60'],
    [400, 350, 8, 'fill-opacity-40'],
    [400, 250, 9, 'fill-opacity-20'],
    [400, 150, 10, 'fill-opacity-0'],
    [500, 450, 11, 'fill-opacity-80'],
    [500, 350, 12, 'fill-opacity-60'],
    [500, 250, 13, 'fill-opacity-40'],
    [500, 150, 14, 'fill-opacity-20'],
    [500, 50, 15, 'fill-opacity-0']
  ]


  const classes = [ 
    'fill-opacity-0',
    'fill-opacity-20',
    'fill-opacity-40',
    'fill-opacity-60',
    'fill-opacity-80'
  ]

  const actual = makeSteps(5, 100, 450, 100, classes)

  t.deepEqual(actual, expected)
  t.end()

})
