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

import { width, height, radius, padding } from './config'
import { layouts, links, timelineData, diagramTitles } from './layouts'

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")

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
const images = {
  conversation: require('../assets/conversation.jpg'),
  end: require('../assets/my-work-here-is-done.jpg'),
  chineseRoom: require('../assets/ChineseRoom2009_CRset.jpg'),
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

const boxStyle = { 
  padding: 25,
  background: 'rgba(0,0,0,.7)'
}

const Presentation = () => (
  <Deck 
    progress='none'
    controls={false}
    transitionDuration={0} 
    transition={['fade']} 
    textColor='white' 
    theme={theme}>
    
    <Slide maxWidth={1500} >
      <Heading margin={50} textSize={100}>{'"Mutable Identities and Coupled Concepts"'}</Heading>
      <Heading margin={50} textSize={50}>Teaching a FullStack JavaScript Bootcamp</Heading>
      <Heading textSize={35}>@simontegg</Heading>
    </Slide>

    <Slide maxWidth={1500} >
      <Heading textSize={100}>Mutable Identity</Heading>
      <Heading textSize={100}>Challenges</Heading>
      <Heading textSize={100}>Teaching</Heading>
    </Slide>
    
    <Slide maxWidth={1500} >
      <Heading textSize={100}>Mutable Identity</Heading>
      <Heading textColor='grey' textSize={100}>Challenges</Heading>
      <Heading textColor='grey' textSize={100}>Teaching</Heading>
    </Slide>

    <Slide 
      transitionDuration={1} 
      bgColor='black'
      notes={`
        indulge developer stereotype;  
        squishy human problems in code; 
        diversity in tech
        take our experiences -> cohesivve story
        self-limiting;  
        sometimes others define our identity for us;
        sometime we believe them;
        global problem
        one approach is to critique and deconstruct global sterotype;
        
        `}>
        <CodePane
          style={{
            transform: 'scale(1.5)',
            marginLeft: 100
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
          {`
            the individual attempts to understand life
            events as systematically related .... one's present     
            identity is thus not a sudden and mysterious event, but a sensible
            result of a life story
            `}
          </Quote>
        <Cite>Gergen and Gergen, 1988</Cite>
      </BlockQuote>
    </Slide >

    <Slide 
      bgColor='black' 
      notes={`
        add experiences;  
        extremely challenging and succeeded;  
        more than a for loop; 
        
        `}>
        <CodePane
          style={{
            transform: 'scale(1.5)',
            marginLeft: 100
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
      <Heading textSize={100} textColor='grey'>Mutable Identity</Heading>
      <Heading textSize={100}>Challenges</Heading>
      <Heading textSize={100} textColor='grey'>Teaching</Heading>
    </Slide>

    <Slide bgImage={images.collage} bgDarken={0.6}>
      <div style={boxStyle} >
        <Heading> Challenge #1: </Heading>
        <Heading> Different starting points</Heading>
      </div>
    </Slide>
  
    <Slide bgColor='primary'>
      <Heading textColor='white' size={2} >
        Challenge #2:
      </Heading>
      <Text textSize={100} textColor='white' >
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
    
    <Slide bgImage={images.collage} bgDarken={0.6}>
      <div style={boxStyle} >
        <Heading> Challenge #4:</Heading>
        <Heading textSize={80} >People</Heading>
        <Heading textSize={80} >- harder than code</Heading>
      </div>
    </Slide>

    <Slide maxWidth={900}>
      <Text margin={20} textSize={50} textColor='white'>https://beepboopbot.com/</Text>
      <Text margin={20} textSize={50} textColor='white'>https://goflat.co.nz/</Text>
      <Text margin={20} textSize={50} textColor='white'>https://enspiral-sim-academy.firebaseapp.com/</Text>
      <Text margin={20} textSize={50} textColor='white'>https://topoftheflops.github.io/</Text>


    </Slide>

    <Slide maxWidth={1500} >
      <Heading textSize={100} textColor='grey'>Mutable Identity</Heading>
      <Heading textSize={100} textColor='grey' >Challenges</Heading>
      <Heading textSize={100} >Teaching</Heading>
    </Slide>
    
    <Slide textColor='white' maxWidth={1500} >
      <Text textColor='white' textSize={70} > The mysterious case of the disappearing teacher </Text>
      <Text style={{opacity: 0}} textSize={70} >What came first the ability or the concept?</Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} > Any sufficiently abstract layer is indistinguishable from magic</Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} >{`Stack 'em high and keep 'em coming`}</Text>
    </Slide>
    
    <Slide textColor='white' maxWidth={1500} >
      <Text style={{opacity: 0}} textColor='white' textSize={70} > The mysterious case of the disappearing teacher </Text>
      <Text  textColor='white' textSize={70} >What came first? - the ability or the concept ?</Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} > Any sufficiently abstract layer is indistinguishable from magic</Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} >{`Stack 'em high and keep 'em coming`}</Text>
    </Slide>
   
    <Slide textColor='white' maxWidth={1500} >
      <Text style={{opacity: 0}} textColor='white' textSize={70} > The mysterious case of the disappearing teacher </Text>
      <Text style={{opacity: 0}}  textColor='white' textSize={70} >What came first? - the ability or the concept ?</Text>
      <Text textColor='white' textSize={70} > Any sufficiently abstract layer is indistinguishable from magic</Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} >{`Stack 'em high and keep 'em coming`}</Text>
    </Slide>

    <Slide textColor='white' maxWidth={1500} >
      <Text style={{opacity: 0}} textColor='white' textSize={70} > The mysterious case of the disappearing teacher </Text>
      <Text style={{opacity: 0}}  textColor='white' textSize={70} >What came first? - the ability or the concept ?</Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} > Any sufficiently abstract layer is indistinguishable from magic</Text>
      <Text  textColor='white' textSize={70} >{`Stack 'em high and keep 'em coming`}</Text>
    </Slide>

    <Slide textColor='white' maxWidth={1500} >
      <Text textColor='white' textSize={70} > The mysterious case of the disappearing teacher </Text>
      <Text textColor='white' textSize={70} >What came first? - the ability or the concept ?</Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} > Any sufficiently abstract layer is indistinguishable from magic</Text>
      <Text  style={{opacity: 0}} textColor='white' textSize={70} >{`Stack 'em high and keep 'em coming`}</Text>
    </Slide>

    <Slide maxWidth={1200} bgImage={images.intro} bgDarken={0.6}>
      <div style={boxStyle}>
        <Heading textSize={150} >9am:</Heading>
        <Heading textSize={100} >a new concept </Heading>
        <Heading textSize={100} style={{opacity: 0}} >a hidden heading</Heading>
      </div>
    </Slide>
    
    <Slide transition={['slide']} maxWidth={900} bgImage={images.pairing} bgDarken={0.7}>
      <div style={boxStyle}>
        <Heading textColor='white' textSize={150} >10-12.30:</Heading>
        <Heading textColor='white' textSize={100} >toy example</Heading>
        <Heading textColor='white'  textSize={100} >+ challenge </Heading>
      </div>
    </Slide>

    <Slide 
      textColor='white'
      maxWidth={1500} 
      padding={50} 
      bgImage={images.mob} 
      bgDarken={0.7}
      notes={`
        set a timer;  
        nowhere to hide;  
        active role;  
        collective problem solving;  
      
      
      `}>
      <div style={boxStyle}>
        <Heading textSize={150} >2-3pm:</Heading>
        <Heading textSize={100} >mob programming</Heading>
        <Heading textSize={100} > || pair show-and-tell </Heading>
      </div>
    </Slide>

    <Slide>
      <Text textColor='white' textSize={70} > The mysterious case of the disappearing teacher </Text>
      <Image src={images.homer} height={300} />
    </Slide>

    <Slide bgColor='black'>
      <Heading> Students ask Teacher questions </Heading>
    </Slide>

    <Slide bgColor='black'>
      <Heading> Teacher asks Students questions </Heading>
    </Slide>

    <Slide maxWidth={1200} bgImage={images.pairing} bgDarken={0.7}>
      <div style={boxStyle}>
        <Heading textSize={150} >3-5pm:</Heading>
        <Heading textSize={100}>the challenge</Heading>
        <Heading textSize={100}>continues</Heading>
      </div>
    </Slide>
    
    <Slide maxWidth={1200} bgImage={images.intro} bgDarken={0.5}
      notes={`
        Socratic method;  
        draw it out of them;  
        relate back to yesterdays intro;  
        students create representations;  
        teacher adjusts and asks questions;  

        
        `}>
      <div style={boxStyle}>
        <Heading textSize={120} >next day:</Heading>
        <Heading textSize={100} >recap</Heading>
        <Heading textSize={100} > + next concept</Heading>
      </div>
    </Slide>
    
    <Slide maxWidth={1200} bgImage={images.demo} bgDarken={0.7}>
      <div style={boxStyle}>
        <Heading textSize={120} >[wed, thur], fri:</Heading>
        <Heading textSize={100} >Group projects</Heading>
      </div>
    </Slide>

    <Slide textColor='white' maxWidth={1500} >
      <Text textColor='white' textSize={70} >What came first? - the ability or the concept ?</Text>
    </Slide>

    <Slide bgImage={images.concepts} bgDarken={0.7}  maxWidth={1500} >
      <div style={boxStyle}>
        <Text textColor='white' textSize={70} >
          Ability ➡️️ Concept ?
        </Text>
        <Heading textSize={100} margin={30} > OR </Heading>
        <Text textColor='white' textSize={70} margin={20} >
          Concept ➡️️ Ability ?
        </Text>
      </div>
    </Slide>

    <Slide bgColor='black'>
      <Image src={images.class} width={600} />
    </Slide>

    <Slide textColor='white' maxWidth={1500} >
      <Text style={{opacity: 0}} textColor='white' textSize={70} > The mysterious case of the disappearing teacher </Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} >What came first? - the ability or the concept ?</Text>
      <Text textColor='white' textSize={70} > Any sufficiently abstract layer is indistinguishable from magic</Text>
      <Text style={{opacity: 0}} textColor='white' textSize={70} >{`Stack 'em high and keep 'em coming`}</Text>
    </Slide>

    <Slide 
      bgColor='black' 
      notes={`
        
        `}>
        <CodePane
          style={{
            transform: 'scale(1.5)',
            marginLeft: 100
          }}
          lang="js"
          source={require("raw-loader!../assets/abstraction.example")}
          margin="20px auto"
        />
    </Slide>  
    

    <Slide>
      <Text  textColor='white' textSize={70} >{`Stack 'em high and keep 'em coming`}</Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary"
      notes={`
        
        story about final week realization;  

        `}>
      <InterLeaving {...interleavingProps} />
    </Slide>

    <Slide transition={["fade"]} textColor="tertiary" bgImage={images.ygritte}>
    </Slide>
    <Slide transition={["fade"]} textColor="tertiary" bgImage={images.ygritteYet}>
    </Slide>

    <Slide bgImage={images.conversation} bgDarken={0.5}>

    </Slide>

    <Slide bgImage={images.end} bgDarken={0.5}>
      <div style={boxStyle} >
        <Text textColor='white' textSize={70} >my work here is done</Text>
        <Text textColor='white' margin={30}  >@simontegg</Text>
      </div>
    </Slide>

  </Deck>
)

export default Presentation

