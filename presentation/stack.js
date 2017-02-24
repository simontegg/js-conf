import React from 'react'
import { Motion, spring } from 'react-motion'
import { map } from 'lodash'

require('../style/index.css') 

const layouts = [
  [
    [50, 200, 'database'],
    [150, 200, 'model'],
    [150, 100, 'view'],
    [200, 175, 'controller'],
    [300, 175, 'client']
  ],
  [
    [75, 200, 'database'],
    [200, 200, 'model'],
    [170, 100, 'view'],
    [200, 300, 'controller'],
    [300, 175, 'client']
  ]
]


const links = [
  [0, 1],
  [3, 1],
  [3, 2],
  [4, 3]
]

const springSetting = { stiffness: 70, damping: 5 }

const radius = 20



class Stack extends React.Component{
  constructor() {
    super()
    this.state = { index: 0 }

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    console.log('mounted')
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown(e) {
    if (e.code === 'Enter') {
      console.log(this.state.index ++)
      this.setState({ index: this.state.index ++ })
    }
  }

  render() {
    console.log(this.state)
    const layout = layouts[this.state.index]

    return (
      <div>
      <svg 
        viewBox="0 0 400 400"  
        xmlns="http://www.w3.org/2000/svg" >      
        <g id='links'>
          {
            map(links, ([start, end]) => {

              return (
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
              )

            })
          }
        </g>
        <g id="entitities" >
          {
            map(layout, ([x, y, text], i) => {
              const style = {
                tx: spring(x, springSetting),
                ty: spring(y, springSetting)
              }

              return (
                <Motion key={i} style={style} >
                  {({tx, ty}) => (
                    <circle key={i} cx={tx} cy={ty} r={radius} fill="red" />
                  )}
                </Motion >
              )
            })
          }
        </g>
      </svg>
      </div>
    )
  }
}

const Label = ({text, x, y}) => (
  <foreignObject x={x} y={y} width={40} height={20} >
    <div className="label" xmlns="http://www.w3.org/1999/xhtml">
      {text}
    </div>
  </foreignObject>
)


export default Stack



 //       <g id="labels" >
 //         {
 //           map(layout, ([x, y, text], i) => (
 //             <g>
 //               <Label text={text} x={x} y={y} />
 //             </g>
 //           ))
 //         }
 //       </g>
