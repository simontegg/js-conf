import React from "react"
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text } from "spectacle"
import preloader from "spectacle/lib/utils/preloader"
import createTheme from "spectacle/lib/themes/default"
import Stack from './stack'

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css")


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images)

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} theme={theme}>
        <Slide bgColor="tertiary">
          <Heading size={1} >Graduate Tech</Heading>
          <ul style={{listStyle: 'none'}}> 
            <li style={{fontSize: '4em'}}> C# / .Net </li>
            <li style={{fontSize: '2.5em'}}> Ruby/Rails </li>
            <li style={{fontSize: '2.5em'}}> Node </li>
            <li style={{fontSize: '2em'}} > Frontend JS </li>
            <li style={{fontSize: '1.5em'}}> PHP </li>
          </ul> 
        </Slide>
        <Slide bgColor="primary">
          <Stack />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Ability precedes understanding, which precedes representation</Quote>
            <Cite>David Chapman (stole it from Feynmen)</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
