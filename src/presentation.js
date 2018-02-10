// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import CodePane files
import id from './assets/id.js'
import classSelector from './assets/class.js'
import addRemoveClass from './assets/addRemoveClass.js'
import showHide from './assets/showHide.js'
import fetch from './assets/fetch.js'
import axios from './assets/axios.js'

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            You Don't Need jQuery
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
            Probably
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Disadvantages of jQuery
          </Heading>
          <List>
            <ListItem><em>File Size</em> - jQuery 3.3.1 minified is 85kb</ListItem>
            <ListItem><em>Abstraction</em> - jQuery expresses everything in a DOM-centric paradigm</ListItem>
            <ListItem><em>Performance</em> - Native JS will always be faster</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Things That jQuery Did That We Don't Need Anymore
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            ID Selector
          </Heading>
          <CodePane 
          lang='javascript' 
          source={id}
          />
          <Heading size={6} textColor="primary">
            Class Selector
          </Heading>
          <CodePane 
          lang='javascript' 
          source={classSelector}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Adding / Removing Classes
          </Heading>
          <CodePane 
          lang='javascript' 
          source={addRemoveClass}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Show / Hide Elements
          </Heading>
          <CodePane 
          lang='javascript' 
          source={showHide}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Replacing AJAX
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Fetch
          </Heading>
          <CodePane 
          lang='javascript' 
          source={fetch}
          />
          <Heading size={6} textColor="primary">
            Axios
          </Heading>
          <CodePane 
          lang='javascript' 
          source={axios}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} textColor="primary" fill>
            Attribution
        </Heading>
        <Link href="https://hackernoon.com/you-truly-dont-need-jquery-5f2132b32dd1" target="_blank">
              --Hackernoon Article by Doug Miller
        </Link>
        </Slide>
      </Deck>
    );
  }
}
