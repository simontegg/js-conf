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
    this.getTextProps()
  }

  getTextProps() {
    const textLengths = reduce(
      this.labels, 
      (memo, label, id) => {
        if (label) memo[id] = label.node.getComputedTextLength()
        return memo
      },
      {}
    )

    const textHeights = reduce(
      this.labels,
      (memo, label, id) => {
        if (label) {
          memo[id] = parseInt(window.getComputedStyle(label.node).fontSize, 10)
        }
        return memo
      },
      {}
    )

    this.setState({ textLengths, textHeights })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      this.getTextProps()
    }
  }

  handleKeyDown(e) {
    const index = this.state.index

    if (e.code === 'Enter') this.setState({ index: index + 1 })
    if (e.code === 'Backspace') this.setState({ index: index - 1 })
  }

  render() {
    console.log(this.state, this.props)
    this.labels = {}
    const { width, height, radius, padding, layouts, links } = this.props
    const layout = layouts[this.state.index]
    const edges = links[this.state.index]
    const xs = map(layout, (node) => node[0])
    const ys = map(layout, (node) => node[1])
    const cx = center(max(xs), min(xs))
    const cy = center(max(ys), min(ys))
    const size = radius + padding + 10

    return (
      <div>
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
            map(edges, ([start, end], i) => {
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
            map(layout, ([x, y, id]) => {
              const style = {
                tx: spring(x, springSetting),
                ty: spring(y, springSetting)
              }

              return (
                <Motion key={id} style={style} >
                  {({tx, ty}) => (
                    <circle 
                      filter='url(#dropshadow)'
                      cx={tx} 
                      cy={ty} 
                      r={radius} 
                      fill={allColors[id]} />
                  )}
                </Motion >
              )
            })
          }
        </g>
        <g id="labels" >
          {
            map(layout, ([x, y, id, text]) => {
              const l = this.state.textLengths[id] || 0
              const h = this.state.textHeights[id] || 0
              const [xO, yO] = getTextOffset(size, x, y, cx, cy, l, h)
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
                <Motion key={id} style={style} >
                  {({tx, ty, txO, tyO, tx1, tx2, tx3, ty1, ty2, ty3}) => (
                    <g 
                      className='annotation'
                      style={{
                        transform: `translate3d(${tx}px, ${ty}px, 0)`
                      }} >
                      <path d={line([[tx1, ty1], [tx2, ty2], [tx3, ty3]])} />
                       
                      <Label 
                        ref={(label) => { this.labels[id] = label }} 
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
      <h1 
        style={{
          position: 'absolute',
          top: 30
        }} >
        { 'THEY WERE SIMPLER TIMES' }
      </h1> 
      </div>
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
    xOffset = -size - l - 10
  } else {
    xOffset = size + 10
  }

  if (y < cy) {
    yOffset = -size - 5
  } else {
    yOffset = size + h
  }

  return [xOffset, yOffset]
}

function connector (r, x, y, cx, cy, textLength) {
  let x1, y1, x2, y2, x3, y3 
  console.log('textLength', textLength)

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


