import React from 'react'
import { Motion, spring } from 'react-motion'
import { map, each, min, max, reduce } from 'lodash'
import svgLine from 'svg-line'
require('../style/index.css') 

const line = svgLine()  
  .x((d) => d[0])
  .y((d) => d[1])

const allColors = [
  '#EF767A', '#456990', '#49BEAA', '#49DCB1', '#EEB868', '#EF767A', '#456990',
  '#49BEAA', '#49DCB1', '#EEB868', '#EF767A',
]

const layouts = [
  [
    [100, 450, 1, 'Functions', 'blank']
  ],
  [
    [100, 450, 1, 'Functions', 'blank'],
    [200, 450, 2, 'Functions', 'blank-ability'],
    [200, 350, 3, 'Objects', 'blank']
  ],
  [
    [100, 450, 1, 'Functions', 'blank'],
    [200, 450, 2, 'Functions', 'blank-ability'],
    [200, 350, 3, 'Objects', 'blank'],
    [300, 450, 4, 'Functions', 'ability'],
    [300, 350, 5, 'Objects', 'blank-ability'],
    [300, 250, 6, 'Assertions', 'blank'],
  ],
  [
    [100, 450, 1, 'functions', 'blank'],
    [200, 450, 2, 'functions', 'blank-ability'],
    [200, 350, 3, 'objects', 'blank'],
    [300, 450, 4, 'functions', 'ability'],
    [300, 350, 5, 'objects', 'blank-ability'],
    [300, 250, 6, 'assertions', 'blank'],
    [400, 450, 7, 'functions', 'ability-understanding'],
    [400, 350, 8, 'objects', 'ability'],
    [400, 250, 9, 'assertions', 'blank-ability'],
    [400, 150, 10, 'callbacks', 'blank']
  ],
  [
    [100, 450, 1, 'functions', 'blank'],
    [200, 450, 2, 'functions', 'blank-ability'],
    [200, 350, 3, 'objects', 'blank'],
    [300, 450, 4, 'functions', 'ability'],
    [300, 350, 5, 'objects', 'blank-ability'],
    [300, 250, 6, 'assertions', 'blank'],
    [400, 450, 7, 'functions', 'ability-understanding'],
    [400, 350, 8, 'objects', 'ability'],
    [400, 250, 9, 'assertions', 'blank-ability'],
    [400, 150, 10, 'callbacks', 'blank'],
    [500, 450, 11, 'functions', 'understanding'],
    [500, 350, 12, 'objects', 'ability-understanding'],
    [500, 250, 13, 'assertions', 'ability'],
    [500, 150, 14, 'callbacks', 'blank-ability'],
    [500, 50, 15, 'promises', 'blank']
  ]
]


const labels = [
  [
    { x: 205, y: 500, text: 'functions', id: 1, className: 'concept' },
    { x: 135, y: 575, text: '1', id: 6, className: 'concept' },
    { x: 135, y: 575, text: '1', id: 7, className: 'concept' }

  ],
  [
    { x: 305, y: 500, text: 'functions', id: 1, className: 'concept' },
    { x: 305, y: 400, text: 'objects', id: 2, className: 'concept' },
    { x: 135, y: 575, text: '1', id: 6, className: 'concept grey' },
    { x: 235, y: 575, text: '2', id: 7, className: 'concept' },
    { x: 235, y: 575, text: '2', id: 8, className: 'concept hidden' },
  ],
  [
    { x: 405, y: 500, text: 'functions', id: 1, className: 'concept' },
    { x: 405, y: 400, text: 'objects', id: 2, className: 'concept' },
    { x: 405, y: 300, text: 'assertions', id: 3, className: 'concept' },
    { x: 135, y: 575, text: '1', id: 6, className: 'concept grey' },
    { x: 235, y: 575, text: '2', id: 7, className: 'concept grey' },
    { x: 335, y: 575, text: '3', id: 8, className: 'concept' },
    { x: 335, y: 575, text: '3', id: 9, className: 'concept hidden' }
  ],
  [
    { x: 505, y: 500, text: 'functions', id: 1, className: 'concept' },
    { x: 505, y: 400, text: 'objects', id: 2, className: 'concept' },
    { x: 505, y: 300, text: 'assertions', id: 3, className: 'concept' },
    { x: 505, y: 200, text: 'callbacks', id: 4, className: 'concept' },
    { x: 135, y: 575, text: '1', id: 6, className: 'concept grey' },
    { x: 235, y: 575, text: '2', id: 7, className: 'concept grey' },
    { x: 335, y: 575, text: '3', id: 9, className: 'concept grey' },
    { x: 435, y: 575, text: '4', id: 10, className: 'concept' },
    { x: 435, y: 575, text: '4', id: 11, className: 'concept hidden' }
  ],
  [
    { x: 605, y: 500, text: 'functions', id: 1, className: 'concept' },
    { x: 605, y: 400, text: 'objects', id: 2, className: 'concept' },
    { x: 605, y: 300, text: 'assertions', id: 3, className: 'concept' },
    { x: 605, y: 200, text: 'callbacks', id: 4, className: 'concept' },
    { x: 605, y: 100, text: 'express API', id: 5, className: 'concept' },
    { x: 135, y: 575, text: '1', id: 6, className: 'concept grey' },
    { x: 235, y: 575, text: '2', id: 7, className: 'concept grey' },
    { x: 335, y: 575, text: '3', id: 9, className: 'concept grey' },
    { x: 435, y: 575, text: '4', id: 10, className: 'concept grey' },
    { x: 535, y: 575, text: '5', id: 11, className: 'concept' }
  ]
]

const springSetting = { stiffness: 130, damping: 20 }

class Interleaving extends React.Component{
  constructor() {
    super()
    this.state = { index: 0, textLengths: [], textHeights: [] }
    this.labels = {}

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown(e) {
    const index = this.state.index

    if (e.code === 'Enter') this.setState({ index: index + 1 })
    if (e.code === 'Backspace') this.setState({ index: index - 1 })
  }

  render() {
    console.log(this.state, this.props)
    const { width, height, radius, padding } = this.props
    const layout = layouts[this.state.index]
    const ls = labels[this.state.index]

    return (
      <svg
        style={{
          transform: `scale(1)`
        }}
        id='diagram'
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg" >      
        <defs xmlns="http://www.w3.org/2000/svg">
          <filter id="dropshadow" width='150%' height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/> 
            <feOffset dx="-1" dy="2" result="offsetblur"/> 
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>
        <g id='building blocks'>
          {
            map(layout, ([x, y, id, text, className]) => {
              return (
                <g
                  key={id}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }} >
                  <rect 
                    className={className + ' fade-in'}
                    stroke='black'
                    strokeWidth={3}
                    shapeRendering='geometricPrecision'
                    fill='black'
                    x={0}
                    y={0}
                    width={90}
                    height={90} />
                </g>
              )
            })
          }
        </g>
        <g id='labels' >
          {
            map(ls, ({x, y, text, id, className}) => {
              const style = {
                tx: spring(x, springSetting),
                ty: spring(y, springSetting)
              }

              return (
                <Motion key={id} style={style} >
                  {({tx, ty}) => (
                    <Label x={tx} y={ty} text={text} className={className} />
                  )}
                </Motion>
              )
            })
          }
        </g>
      </svg>
    )
  }
}

class Label extends React.Component{
  render() {
    const { x, y, text, className } = this.props
    console.log(this.props)

    return (
      <g>
        <text 
          x={x}
          y={y}
          ref={(t) => this.node = t } 
          className={className}>
            {text}
        </text>
      </g>
    )
  }
}

export default Interleaving

function center (max, min) {
  return (max + min) / 2
}

function getTextOffset (size, x, y, cx, cy, l, h) {
  let xOffset, yOffset

  if (x < cx) {
    xOffset = -size - l - 10
  } else {
    xOffset = size + 10
  }

  if (y < cy) {
    yOffset = -size + h 
  } else {
    yOffset = size + h
  }

  return [xOffset, yOffset]
}



