import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectsSlideShow from './ProjectsSlideshow.js';

const projects = [
  'http://singit.netlify.com',
  'http://dadgad-tuner.netlify.com'
]

class App extends Component {
  render() {
    return (
      <Container className="App">
        <ProjectsSlideShow projects={projects}/>
      </Container>
    );
  }
}

const Container = styled.div`
height: 100%;
`;

export default App;
