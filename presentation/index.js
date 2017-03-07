import React from "react"
import {
  Appear,
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text } from "spectacle"
import preloader from "spectacle/lib/utils/preloader"
import createTheme from "spectacle/lib/themes/default"
import { map, filter } from 'lodash'

import Diagram from './diagram'
import InterLeaving from './interleaving'
import Timeline from './timeline'

import { width, height, radius, padding } from './config'
import { layouts, links, timelineData } from './layouts'

const stackProps = { width, height, radius, padding, layouts, links }
const interleavingProps = { width: 1000, height, padding }

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")

const images = {
  homer: require('../assets/homer.gif'),
  collage: require('../assets/eda-collage2.jpg'),
  edaGroup: require('../assets/eda-group.jpg'),
  roNJosh: require('../assets/eda-group-ro-josh.jpg'),
  karateKid: require('../assets/karatekidbdcap4_original.jpg'),
  aladdin: require('../assets/1992-Aladdin.jpg'),
  ygritte: require('../assets/ygritte-callbacks.jpg'),
  ygritteYet: require('../assets/ygritte-callbacks-yet.jpg')
}

preloader(images)

const theme = createTheme({
  primary: 'black',
  secondary: "#2d2d2d",
  tertiary: "#ccc",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} theme={theme}>

        // identity
        <Slide 
          transitionDuration={1} 
          bgColor="secondary" 
          notes="blah">
            <CodePane
              style={{
                transform: 'scale(1.5)'
              }}
              lang="js"
              source={require("raw-loader!../assets/stereotype.example")}
              margin="20px auto"
            />
        </Slide>  

        <Slide 
          transitionDuration={1} 
          bgColor="secondary" 
          notes="blah">
            <CodePane
              style={{
                transform: 'scale(1.5)'
              }}
              lang="js"
              source={require("raw-loader!../assets/refactor.example")}
              margin="20px auto"
            />
        </Slide>  

        <Slide bgImage={images.collage} bgDarken={0.7}>
          <Heading> Challenge #1 </Heading>
          <Heading> Different starting points</Heading>
        </Slide>
      
        <Slide>
          <Heading> Challenge #2 </Heading>
          <Heading size={1} >Job market tech: </Heading>
          <ul style={{listStyle: 'none'}}> 
            <li style={{fontSize: '4em'}}> C# / .Net </li>
            <li style={{fontSize: '2.5em'}}> Ruby/Rails </li>
            <li style={{fontSize: '2.5em'}}> Node </li>
            <li style={{fontSize: '2em'}} > Frontend JavaScript </li>
            <li style={{fontSize: '1.5em'}}> PHP </li>
          </ul> 
        </Slide>

        <Slide maxWidth={1500} bgColor="tertiary">
          <Diagram {...stackProps}  />
        </Slide>

        <Slide textColor='tertiary' >
          <BlockQuote>
            <Quote 
              textColor='#191919'
              textSize={50} >
              the individual attempts to understand life
events as systematically related .... [so that] one's present identity is thus not
a sudden and mysterious event, but a sensible result of a life story </Quote>
            <Cite>Gergen and Gergen, 1988</Cite>
          </BlockQuote>
        </Slide >


        <Slide 
          transitionDuration={3000} 
          bgImage={images.karateKid} />

        <Slide
          margin={0}
          bgDarken={0.7}
          transitionDuration={1} 
          bgImage={images.karateKid} >
          <Heading textSize={80} >Pedagogy of </Heading>
          <Heading margin={30} textSize={80} >
            <S type='italic'>The Karate Kid</S>
          </Heading>
          <Appear>
            <Text textColor='white' textSize={45} >No lectures (✔️️)</Text>
          </Appear>
          <Appear>
            <Text textColor='white' textSize={45} >
              Practice your low-level primitives (✔️️)
            </Text>
          </Appear>
          <Appear>
            <Text textColor='white' textSize={45} >Mentor-Mentee (✔️️)</Text>
          </Appear>
          <Appear>
            <Text textColor='white' textSize={45} >
              Very frustrating! (?)
            </Text>
          </Appear>
          <Appear>
            <Text textColor='white' textSize={45} >
              Solid foundations before moving on (?)
            </Text>
          </Appear>
        </Slide>

        <Slide maxWidth={2000} >
          <Text textColor='white' textSize={45} >
            Ability ➡️️ Understanding ➡️️ Representation
          </Text>
          <Appear>
          <Text textColor='white' textSize={45} >
            Representation ➡️️ Understanding ➡️️ Ability
          </Text>
          </Appear>
        </Slide>

        <Slide maxWidth={1200} bgColor="quartenary">
          <Heading> a new concept </Heading>
          <Timeline />
        </Slide>

        <Slide>
          <Heading > Read + Write </Heading>
          <Text style={{paddingBottom: 40}} textColor='white' textSize={45} >
            extend existing codebase
          </Text>
          <Heading > Write </Heading>
          <Text textColor='white' textSize={45} >
            user stories ➡️️ app from scratch
          </Text>
        </Slide>

        <Slide>
          <Heading> Teacher participation </Heading>
          <Image src={images.homer} height={300} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <InterLeaving {...interleavingProps} />
        </Slide>

        <Slide transition={["fade"]} textColor="tertiary" bgImage={images.ygritte}>
        </Slide>
        <Slide transition={["fade"]} textColor="tertiary" bgImage={images.ygritteYet}>
        </Slide>
      </Deck>
    )
  }
}




//        <Slide 
//          transitionDuration={1} 
//          bgImage={images.edaGroup} textColor='tertiary'/>
//
//        <Slide 
//          transitionDuration={1} 
//          bgImage={images.roNJosh} 
//          textColor='tertiary' />
