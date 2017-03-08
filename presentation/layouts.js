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
    [width / 4, height / 2, 2, 'knex'],
    [width * (3 / 8), height / 2, 4, 'JSON API'],
    [width * (13 / 16), height / 2, 3,'react']
  ],
  [
    [width / 8, height / 2, 1, 'database'],
    [width / 4, height / 2, 2, 'knex'],
    [width * (3 / 8), height / 2, 4, 'JSON API'],
    [width * (13 / 16), height / 2, 3, 'react'],
    [width * (10 / 16), height / 2, 6, 'actions'],
    [width * (10 / 16), height * (6 / 16), 7, 'reducer'],
    [width * (13 / 16), height * (6 / 16), 8, 'state']

  ],
  [
    [width / 8, height / 2, 1, 'database'],
    [width / 4, height / 2, 2, 'knex'],
    [width * (3 / 8), height / 2, 4, 'JSON API'],
    [width * (13 / 16), height / 2, 3, 'react'],
    [width * (10 / 16), height / 2, 6, 'actions'],
    [width * (10 / 16), height * (6 / 16), 7, 'reducer'],
    [width * (13 / 16), height * (6 / 16), 8, 'state'],
    [width * (13 / 16), height * (7 / 16), 9, 'react-redux'],
    [width * (10 / 16), height * (5 / 16), 10, 'react-router'],
    [width * (10 / 16), height * (4 / 16), 11, 'assets'],
    [width * (3 / 8), height * (4 / 16), 12, 'static-server']
  ],
  [
    [width / 8, height / 2, 1, 'database'],
    [width / 4, height / 2, 2, 'knex'],
    [width * (3 / 8), height / 2, 4, 'JSON API'],
    [width * (13 / 16), height / 2, 3, 'react'],
    [width * (10 / 16), height / 2, 6, 'actions'],
    [width * (10 / 16), height * (6 / 16), 7, 'reducer'],
    [width * (13 / 16), height * (6 / 16), 8, 'state'],
    [width * (13 / 16), height * (7 / 16), 9, 'react-redux'],
    [width * (10 / 16), height * (5 / 16), 10, 'react-router'],
    [width * (10 / 16), height * (4 / 16), 11, 'assets'],
    [width * (3 / 8), height * (4 / 16), 12, 'static-server']
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
    [4, 5],
    [5, 6],
    [6, 3],
    [3, 4],
  ],
  [
    [0, 1],
    [2, 1],
    [4, 2],
    [4, 5],
    [5, 6],
    [6, 3],
    [3, 4],
    [9, 10]
  ]
]

export const diagramTitles = [
  'THEY WERE SIMPLER TIMES',
  'NOW SERVING JSON',
  'CLIENT-SIDE STATE',
  'CHALLENGE #3: The modern stack'
]

const hour = width / 7
const start = 0
const y = height / 4
const h = 50

export const timelineData = [
  { 
    x1: start, 
    y1: y, 
    x2: start + hour,
    y2: y,
    stroke: 'black',
    id: 1, 
    label: 'intro',
    time: '9am'
  },
  { 
    x1: start + hour, 
    y1: y, 
    x2: start + (2 * hour),
    y2: y,
    stroke: 'black',
    id: 2, 
    label: 'toy app',
    time: '10am'
  },
  { 
    x1: start + (2 * hour), 
    y1: y, 
    x2: start + (3.5 * hour),
    y2: y,
    stroke: 'black',
    id: 3, 
    label: 'challenge',
    time: '11am'
  },
  { 
    x1: start + (5 * hour), 
    y1: y, 
    x2: start + (6 * hour),
    y2: y,
    stroke: 'black',
    label: 'mob',
    time: '2pm'
  },
  { 
    x1: start + (6 * hour), 
    y1: y, 
    x2: start + (7 * hour),
    y2: y,
    stroke: 'black',
    label: 'challenge',
    time: '3pm'
  },
  { 
    x1: start, 
    y1: y + (h * 2), 
    x2: start + (hour/ 2),
    y2: y + (h * 2), 
    stroke: 'black',
    id: 5, 
    label: 'recap'
  }
]




