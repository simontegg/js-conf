import React from 'react'
import { Motion, Spring } from 'react-motion'
import { map } from 'lodash'

require('../style/index.css') 

const layout = [
  [50, 200, 'database'],
  [150, 200, 'model'],
  [150, 100, 'view'],
  [200, 175, 'controller'],
  [300, 175, 'client'],
]

const links = [
  [0, 1],
  [3, 1],
  [3, 2],
  [4, 3]
]

const radius = 20



const Stack = React.createClass({
  getInitialState() {
    return { step: 0 }
  },

  render() {


    return (
      <svg 
        viewBox="0 0 400 400"  
        xmlns="http://www.w3.org/2000/svg" >      
        <g id='links'>
          {
            map(links, ([start, end]) => (
              <g>
                <line 
                  x1={layout[start][0]}
                  x2={layout[end][0]}
                  y1={layout[start][1]}
                  y2={layout[end][1]}
                  strokeWidth={2}
                  stroke="black" 
                />
              </g>

            ))
          }
        </g>
        <g id="entitities" >
          {
            map(layout, ([x, y, text], i) => (
              <g>
                <circle key={i} cx={x} cy={y} r={radius} fill="red" />
              </g>
            ))
          }
        </g>
        <g id="labels" >
          {
            map(layout, ([x, y, text], i) => (
              <g>
                <Label text={text} x={x} y={y} />
              </g>
            ))
          }
        </g>
      </svg>
    )
  }
})

const Label = ({text, x, y}) => (
  <foreignObject x={x} y={y} width={40} height={20} >
    <div className="label" xmlns="http://www.w3.org/1999/xhtml">
      {text}
    </div>
  </foreignObject>
)


export default Stack
