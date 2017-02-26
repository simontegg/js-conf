import { width, height, radius, padding } from './config'

export const layouts = [
  [
    [width / 8, height / 2, 1, 'database'],
    [width / 4, height / 2, 2, 'model'],
    [width / 4, height * (3 /8), 3, 'view'],
    [width * (3 / 8), height * (7 / 16), 4, 'controller'],
    [width * (5 / 8), height * (7 / 16), 5, 'client']
  ],
  [
    [width / 8, height / 2, 1, 'database'],
    [width / 4, height / 2, 2, 'knex.js / ORM'],
    [width * (3 / 8), height / 2, 4, 'JSON API'],
    [width * (5 / 8), height / 2, 3,'React.js']
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
  ]
]

