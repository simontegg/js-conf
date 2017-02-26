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
    [0, 550, 1, 'Functions', 'blank']
  ],
  [
    [0, 550, 1, 'Functions', 'blank'],
    [100, 550, 1, 'Functions', 'blank-ability'],
    [100, 450, 1, 'Objects', 'blank']
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
        <g id='building blocks'>
          {
            map(layout, ([x, y, text, className]) => {
              return (
                <g
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0)`
                  }} >
                  <rect 
                    x={0}
                    y={0}
                    width={90}
                    height={90} />
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



