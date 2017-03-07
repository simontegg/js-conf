import React from 'react'
import { map, filter } from 'lodash'

import { timelineData } from './layouts'
import { height } from './config'

const Timeline = () => (
   <svg 
     id='diagram'
     width={1200}
     height={height}
     xmlns="http://www.w3.org/2000/svg" >      
     <g id='blocks'>
       {
         map(timelineData, ({x1, y1, x2, y2, stroke}) => (
           <line 
             x1={x1} 
             y1={y1} 
             x2={x2 - 7} 
             y2={y2} 
             className='time-line' /> 
         ))
       }
     </g>
     <g id='labels'>
       {
         map(timelineData, ({x1, y1, label}) => (
           <text className='timeline-label' x={x1 + 2} y={y1 + 28} > 
             {label}
           </text>
         ))
       }
     </g>
     <g id='times'>
       {
         map(filter(timelineData, 'time'), ({x1, y1, time}) => (
           <text className='timeline-time' x={x1} y={y1 - 10} > 
             {time}
           </text>
         ))
       }
     </g>
   </svg>
)

export default Timeline
