import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectsSlideShow from './ProjectsSlideshow.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.projectsPath = './projects/';
    this.p5Path = 'p5/';
    this.unityPath = 'unity/';
    this.sketchNameStandard = 'index.html';
    this.readmeNameStandard = "README.md";

    this.projects = [
      {
        name:'singit',
        url: 'http://singit.netlify.com',
        description: 'Distributed live karaoke helper'
      },
      {
        name:'dadgad-tuner',
        url:  'http://dadgad-tuner.netlify.com',
        description: 'Simple guitar tuner'
      },
    	{
    		name: 'perlin',
    		url: this.projectsPath + this.p5Path + 'perlin/',
    		// entryFileName: this.sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Perlin noise pattern generating experiment'
    	},
    	{
    		name: 'flowers',
    		url: this.projectsPath + this.p5Path + 'flowers/',
    		// entryFileName: this.sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Simulation of tulips in the wind'
    	},
    	{
    		name: 'flockheart',
    		url: this.projectsPath + this.unityPath + 'flockheart/',
    		// entryFileName: this.sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Flockheart'
    	},
    	{
    		name: 'blobs',
    		url: this.projectsPath + this.p5Path + 'blobs/',
    		// entryFileName: this.sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Simple blob-eat-blob game'
    	},
    	{
    		name: 'code-rain',
    		url: this.projectsPath + this.p5Path + 'code-rain/',
    		// entryFileName: sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Matrix style code rain'
    	}
    ];
  }

  render() {
    return (
      <Container className="App">
        <ProjectsSlideShow projects={this.projects}/>
      </Container>
    );
  }
}

const Container = styled.div`
height: 100%;
`;

export default App;
