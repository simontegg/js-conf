import { width, height, radius, padding } from './config'

export const layouts = [
  [
    [width / 4, height / 2, 1, 'database'],
    [width * (3 / 8), height / 2, 2, 'model'],
    [width * (3 / 8), height * (3 /8), 3, 'view'],
    [width / 2, height * (7 / 16), 4, 'controller'],
    [width * (3 / 4), height * (7 / 16), 5, 'client']
  ],
  [
    [width / 4, height / 2, 1, 'database'],
    [width * (3 / 8), height / 2, 2, 'knex.js'],
    [width / 2, height / 2, 4, 'JSON API'],
    [width * (3 / 4), height / 2, 3,'React.js']
  ],
  [
    [width / 4, height / 2, 1, 'database'],
    [width * (3 / 8), height / 2, 2, 'knex.js'],
    [width / 2, height / 2, 4, 'JSON API'],
    [width * (7 / 8), height / 2, 3, 'react'],
    [width * (3 / 4), height / 2, 6, 'actions'],
    [width * (3 / 4), height * (6 / 16), 7, 'reducer'],
    [width * (7 / 8), height * (6 / 16), 8, 'state']

  ]
]

export const links = [
  [
    [0, 1],
    [3, 1],
    [3, 2],
    [4, 3]
  ],
  [
    [0, 1],
    [2, 1],
    [3, 2],
  ],
  [
    [0, 1],
    [2, 1],
    [4, 2],
  ]
]

