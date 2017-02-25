import React from 'react'
import { Motion, spring } from 'react-motion'
import { map, each, min, max } from 'lodash'
//import annotation from './annotation'
import d3Annotation from '../d3-annotation'
import { select } from 'd3-selection'
import svgLine from 'svg-line'

const line = svgLine()  
  .x((d) => d[0])
  .y((d) => d[1])

require('../style/index.css') 

const layouts = [
  [
    [100, 125, 'database'],
    [200, 125, 'model'],
    [200, 50, 'view'],
    [200, 75, 'controller'],
    [300, 75, 'client']
  ],
  [
    [75, 200, 'database'],
    [200, 200, 'model'],
    [170, 100, 'view'],
    [200, 300, 'controller'],
    [300, 175, 'client']
  ]
]

const allColors = [
  '#EF767A', '#456990', '#49BEAA', '#49DCB1', '#EEB868', '#EF767A', '#456990',
  '#49BEAA', '#49DCB1', '#EEB868', '#EF767A',
]

const links = [
  [0, 1],
  [3, 1],
  [3, 2],
  [4, 3]
]

const springSetting = { stiffness: 130, damping: 20 }

const radius = 20

class Stack extends React.Component{
  constructor() {
    super()
    this.state = { index: 0, textLengths: [] }
    this.labels = {}

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }


  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    const textLengths = map(
      this.labels, 
      (label) => label.node.getComputedTextLength()
    )
  
    this.setState({ textLengths })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown(e) {
    if (e.code === 'Enter') {
      console.log('enter')
      this.setState({ index: this.state.index + 1 })
    }
  }

  render() {
    console.log(this.state)
    const layout = layouts[this.state.index]
    const xs = map(layout, (node) => node[0])
    const ys = map(layout, (node) => node[1])
    const cx = center(max(xs), min(xs))
    const cy = center(max(ys), min(ys))

    return (
      <svg 
        id='diagram'
        viewBox="0 0 400 400"  
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
        <g id='links'>
          {
            map(links, ([start, end], i) => {

              return (
                <g key={i}>
                  <line 
                    x1={layout[start][0]}
                    x2={layout[end][0]}
                    y1={layout[start][1]}
                    y2={layout[end][1]}
                    strokeWidth={2}
                    stroke="black" 
                  />
                </g>
              )

            })
          }
        </g>
        <g id="entities" >
          {
            map(layout, ([x, y, text], i) => {
              const style = {
                tx: spring(x, springSetting),
                ty: spring(y, springSetting)
              }

              return (
                <Motion key={i} style={style} >
                  {({tx, ty}) => (
                    <circle 
                      filter='url(#dropshadow)'
                      key={i} 
                      cx={tx} 
                      cy={ty} 
                      r={radius} 
                      fill="red" />
                  )}
                </Motion >
              )
            })
          }
        </g>
        <g id="labels" >
          {
            map(layout, ([x, y, text], i) => {
              const textLength = this.state.textLengths[i] || 0
              const offset = getOffset(radius + 20, x, y, cx, cy, textLength)


              return (
                <g 
                  className='annotation'
                  key={i}
                  style={{
                    transform: `translate3d(${offset[0]}px, ${offset[1]}px, 0)`
                  }} >
                  <path d={line(connector(radius, x, y, cx, cy, textLength))} />
                   
                  <Label 
                    ref={(l) => { this.labels[i] = l }} 
                    text={text} 
                    x={x} 
                    y={y} />
                </g>
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
    const { x, y, text, offset } = this.props

    return (
      <g>
        <text 
          x={x}
          y={y}
          ref={(t) => this.node = t } 
          className="label">
            {text}
        </text>
      </g>
    )
  }
}


export default Stack

function center (max, min) {
  return (max + min) / 2
}

function getOffset (size, x, y, cx, cy, textLength) {
  let xOffset, yOffset

  if (x < cx) {
    xOffset = -size - textLength
  } else {
    xOffset = size
  }

  if (y < cy) {
    yOffset = -size
  } else {
    yOffset = size
  }

  return [xOffset, yOffset]
}

function connector (r, x, y, cx, cy, textLength) {
  let x1, y1, x2, y2, x3, y3 

  if (x < cx) {
    x1 = -r - 10
    x2 = x1 - 20
    x3 = x2 - textLength
  } else {
    x1 = r + 10
    x2 = x1 + 20
    x3 = x2 + textLength
  }

  if (y < cy) {
    y1 = -r - 10
    y2 = y3 = x1 - 20
  } else {
    y1 = r + 10
    y2 = y3 = y1 + 20
  }

  return [[x1, y1], [x2, y2], [y3, y3]]
}




