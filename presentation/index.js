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
import { layouts, links, timelineData, diagramTitles } from './layouts'

const stackProps = { 
  width, 
  height, 
  radius, 
  padding, 
  layouts, 
  links, 
  diagramTitles 
}

const interleavingProps = { width: 1000, height, padding }

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")

const images = {
  intro: require('../assets/mix-t4nt.jpg'),
  pairing: require('../assets/josh-focus.jpg'),
  mob: require('../assets/mob-programming.jpg'),
  class: require('../assets/class.png'),
  demo: require('../assets/student-demo.jpg'),
  iamdevloper: require('../assets/iamdevloper.png'),
  homer: require('../assets/homer.gif'),
  collage: require('../assets/eda-collage2.jpg'),
  concepts: require('../assets/concepts.jpg'),
  edaGroup: require('../assets/eda-group.jpg'),
  roNJosh: require('../assets/eda-group-ro-josh.jpg'),
  karateKid: require('../assets/karatekidbdcap4_original.jpg'),
  cobraKai: require('../assets/cobra-kai.jpg'),
  karateKidApp: require('../assets/karate-kid-application.jpg'),
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
  secondary: "Montserrat"
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} theme={theme}>

        <Slide maxWidth={1500} >
          <Heading textSize={120}>Mutable Identity</Heading>
          <Heading textSize={120}>Challenges</Heading>
          <Heading textSize={120}>Teaching</Heading>
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
              source={require("raw-loader!../assets/stereotype.example")}
              margin="20px auto"
            />
        </Slide>  
        
        <Slide textColor='tertiary' >
          <BlockQuote>
            <Quote 
              textColor='white'
              textSize={50} >
              the individual attempts to understand life
events as systematically related .... [so that] one's present identity is thus not
a sudden and mysterious event, but a sensible result of a life story </Quote>
            <Cite>Gergen and Gergen, 1988</Cite>
          </BlockQuote>
        </Slide >

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

        <Slide>
          <Image src={images.iamdevloper} width={700} />
        </Slide>
        
        <Slide maxWidth={1500} >
          <Heading textSize={120} textColor='grey'>Mutable Identity</Heading>
          <Heading textSize={120}>Challenges</Heading>
          <Heading textSize={120} textColor='grey'>Teaching</Heading>
        </Slide>

        <Slide bgImage={images.collage} bgDarken={0.7}>
          <Heading> Challenge #1 </Heading>
          <Heading> Different starting points</Heading>
        </Slide>
      
        <Slide bgColor='primary'>
          <Heading textColor='white' size={2} >
            Challenge #2:
          </Heading>
          <Text textSize={120} textColor='white' >
            C# / .NET
          </Text>
          <Text textSize={70} textColor='white' >
            Ruby / Rails
          </Text>
          <Text textSize={60} textColor='white' >
            Node
          </Text>
          <Text textSize={50} textColor='white' >
            Frontend JavaScript
          </Text>
          <Text textSize={40} textColor='white' >
            PHP
          </Text>
        </Slide>

        <Slide maxWidth={1500} bgColor="tertiary">
          <Diagram {...stackProps}  />
        </Slide>
        
        <Slide bgImage={images.collage} bgDarken={0.7}>
          <Heading> Challenge #4:</Heading>
          <Heading>People</Heading>
          <Heading>- harder than code</Heading>
        </Slide>

        <Slide maxWidth={1500} >
          <Heading textSize={120} textColor='grey'>Mutable Identity</Heading>
          <Heading textSize={120} textColor='grey' >Challenges</Heading>
          <Heading textSize={120} >Teaching</Heading>
        </Slide>

        <Slide
          maxWidth={1500}
          bgDarken={0.7}
          bgImage={images.karateKid} >
          <Heading textColor='white' textSize={80} margin={30} >Pedagogy of <S type='italic'>The Karate Kid</S>
          </Heading>
          <Appear>
            <Text textColor='white' textSize={45} >No lectures, demo (✔️️)</Text>
          </Appear>
          <Appear>
            <Text textColor='white' textSize={45} >
              Practice your low-level primitives (✔️️)
            </Text>
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
          <Appear>
            <Text textColor='white' textSize={45} >Mentor-Mentee (✔️️)</Text>
          </Appear>
          <Text style={{opacity: 0}}  textColor='white' textSize={45} >
            Application (✔️️)
          </Text>
        </Slide>

        <Slide
          maxWidth={1500}
          bgDarken={0.7}
          transitionDuration={1} 
          bgImage={images.cobraKai} >
          <Heading textColor='white' textSize={80} margin={30} >Pedagogy of <S type='italic'>The Karate Kid</S>
          </Heading>
          <Text textColor='white' textSize={45} >No lectures, demo (✔️️)</Text>  
          <Text textColor='white' textSize={45} >
            Practice your low-level primitives (✔️️)
          </Text>
          <Text textColor='white' textSize={45} >
            Very frustrating! (?)
          </Text>
          <Text textColor='white' textSize={45} >
            Solid foundations before moving on (?)
          </Text>
          <Text textColor='white' textSize={45} >Mentor-Mentee (✔️️)</Text>
          <Text style={{opacity: 0}}  textColor='white' textSize={45} >
            Application (✔️️)
          </Text>
        </Slide>

        <Slide
          maxWidth={1500}
          bgDarken={0.7}
          transitionDuration={1} 
          bgImage={images.karateKidApp} >
          <Heading textColor='white' textSize={80} margin={30} >Pedagogy of <S type='italic'>The Karate Kid</S>
          </Heading>
          <Text textColor='white' textSize={45} >No lectures, demo (✔️️)</Text>  
          <Text textColor='white' textSize={45} >
            Practice your low-level primitives (✔️️)
          </Text>
          <Text textColor='white' textSize={45} >
            Very frustrating! (?)
          </Text>
          <Text textColor='white' textSize={45} >
            Solid foundations before moving on (?)
          </Text>
          <Text textColor='white' textSize={45} >Mentor-Mentee (✔️️)</Text>
          <Text textColor='white' textSize={45} >Application (✔️️)</Text>
        </Slide>

        <Slide bgImage={images.concepts} bgDarken={0.7}  maxWidth={2000} >
          <Heading textSize={100} margin={30} > The big assumption</Heading>
          <Text textColor='white' textSize={45} margin={20} >
            Representation ➡️️ Understanding ➡️️ Ability ?
          </Text>
          <Text textColor='white' textSize={45} >
            Ability ➡️️ Understanding ➡️️ Representation ?
          </Text>
        </Slide>

        <Slide bgColor='secondary'>
          <Image src={images.class} width={600} />
        </Slide>

        <Slide bgColor='secondary'>
          <Heading> Students ask Teacher questions </Heading>
        </Slide>

        <Slide bgColor='secondary'>
          <Heading> Teacher asks Students questions </Heading>
        </Slide>

        <Slide maxWidth={1200} bgImage={images.intro} bgDarken={0.6}>
          <Heading textSize={150} >9am:</Heading>
          <Heading textSize={120} >a new concept </Heading>
          <Heading textSize={120} style={{opacity: 0}} >a hidden heading</Heading>
        </Slide>
        
        <Slide maxWidth={1200} bgImage={images.pairing} bgDarken={0.7}>
          <Heading textSize={150} >10-12.30:</Heading>
          <Heading textSize={120} >toy example</Heading>
          <Heading textSize={120} >+ challenge </Heading>
        </Slide>

        <Slide maxWidth={1500} bgImage={images.mob} bgDarken={0.6}>
          <Heading textSize={150} >2-3pm:</Heading>
          <Heading textSize={120} >mob programming</Heading>
          <Heading textSize={120} > || pair presentations </Heading>
        </Slide>

        <Slide maxWidth={1200} bgImage={images.pairing} bgDarken={0.6}>
          <Heading textSize={150} >3-5pm:</Heading>
          <Heading textSize={120}>the challenge</Heading>
          <Heading textSize={120}>continues</Heading>
        </Slide>
        
        <Slide maxWidth={1200} bgImage={images.intro} bgDarken={0.6}>
          <Heading textSize={150} >Next day:</Heading>
          <Heading textSize={120} >Recap</Heading>
          <Heading textSize={120} > + next concept</Heading>
        </Slide>
        
        <Slide maxWidth={1200} bgImage={images.demo} bgDarken={0.6}>
          <Heading textSize={140} >[Wed, Thur], Fri:</Heading>
          <Heading textSize={120} >Group projects</Heading>
          <Heading textSize={120} style={{opacity: 0}} >a hidden heading</Heading>
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
