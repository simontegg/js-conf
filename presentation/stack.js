import React from 'react'
import { Motion, spring } from 'react-motion'
import { map, each, min, max } from 'lodash'
//import annotation from './annotation'
import d3Annotation from '../d3-annotation'
import { select } from 'd3-selection'
import svgLine from 'svg-line'
require('../style/index.css') 

const line = svgLine()  
  .x((d) => d[0])
  .y((d) => d[1])

const width = 920
const height = 800
const radius = 25
const padding = 10


const layouts = [
  [
    [width / 8, height / 2, 'database'],
    [width / 4, height / 2, 'model'],
    [width / 4, height * (3 /8), 'view'],
    [width * (3 / 8), height * (7 / 16), 'controller'],
    [width * (5 / 8), height * (7 / 16), 'client']
  ],
  [
    [width / 8, height / 4, 'database'],
    [width / 4, height / 2, 'model'],
    [width / 4, height * (3 /8), 'view'],
    [width * (3 / 8), height * (7 / 16), 'controller'],
    [width * (5 / 8), height * (7 / 16), 'client']
  ],
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

class Stack extends React.Component{
  constructor() {
    super()
    this.state = { index: 0, textLengths: [], textHeights: [] }
    this.labels = {}

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    const textLengths = map(
      this.labels, 
      (label) => label.node.getComputedTextLength()
    )

    const textHeights = map(
      this.labels,
      (label) => parseInt(window.getComputedStyle(label.node).fontSize, 10)
    )

    this.setState({ textLengths, textHeights })
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
        <g id='links'>
          {
            map(links, ([start, end], i) => {
              const [x1, y1] = layout[start]
              const [x2, y2] = layout[end]

              const style = {
                x1: spring(x1, springSetting),
                x2: spring(x2, springSetting),
                y1: spring(y1, springSetting),
                y2: spring(y2, springSetting)
              }

              return (
                <Motion key={i} style={style}>
                  {({x1, x2, y1, y2}) => (
                    <line 
                      x1={x1}
                      x2={x2}
                      y1={y1}
                      y2={y2}
                      strokeWidth={2}
                      stroke="grey" 
                    />
                  )}
                </Motion>
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
                      fill={allColors[i]} />
                  )}
                </Motion >
              )
            })
          }
        </g>
        <g id="labels" >
          {
            map(layout, ([x, y, text], i) => {
              const l = this.state.textLengths[i] || 0
              const h = this.state.textHeights[i] || 0
              const [xO, yO] = getTextOffset(radius + 20, x, y, cx, cy, l, h)
              const [
                [x1, y1], 
                [x2, y2], 
                [x3, y3]] = connector(radius, x, y, cx, cy, l)
              
              const style = {
                tx: spring(x, springSetting),
                ty: spring(y, springSetting),
                txO: spring(xO, springSetting),
                tyO: spring(yO, springSetting),
                tx1: spring(x1, springSetting),
                tx2: spring(x2, springSetting),
                tx3: spring(x3, springSetting),
                ty1: spring(y1, springSetting),
                ty2: spring(y2, springSetting),
                ty3: spring(y3, springSetting)
              }

              return (
                <Motion key={i} style={style} >
                  {({tx, ty, txO, tyO, tx1, tx2, tx3, ty1, ty2, ty3}) => (
                    <g 
                      className='annotation'
                      style={{
                        transform: `translate3d(${tx}px, ${ty}px, 0)`
                      }} >
                      <path d={line([[tx1, ty1], [tx2, ty2], [tx3, ty3]])} />
                       
                      <Label 
                        ref={(label) => { this.labels[i] = label }} 
                        text={text} 
                        x={xO} 
                        y={yO} />
                    </g>
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
    const { x, y, text } = this.props

    return (
      <g>
        <text 
          x={x}
          y={y}
          ref={(t) => this.node = t } 
          className="label san-serif">
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

function getTextOffset (size, x, y, cx, cy, l, h) {
  let xOffset, yOffset

  if (x < cx) {
    xOffset = -size - l - padding
  } else {
    xOffset = size + padding
  }

  if (y < cy) {
    yOffset = -size + h
  } else {
    yOffset = size + h
  }

  return [xOffset, yOffset]
}

function connector (r, x, y, cx, cy, textLength) {
  let x1, y1, x2, y2, x3, y3 

  if (x < cx) {
    x1 = -r
    x2 = x1 - 20
    x3 = x2 - textLength - 10
  } else {
    x1 = r
    x2 = x1 + 20
    x3 = x2 + textLength + 10
  }

  if (y < cy) {
    y1 = -r
    y2 = y3 = y1 - 20
  } else {
    y1 = r
    y2 = y3 = y1 + 20
  }

  return [[x1, y1], [x2, y2], [x3, y3]]
}




