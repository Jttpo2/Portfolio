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
        name:'Singit',
        url: 'https://singit.netlify.com',
        description: 'Distributed live karaoke helper'
      },
      {
        name:'Dadgad tuner',
        url:  'https://dadgad-tuner.netlify.com',
        description: 'Simple guitar tuner'
      },
      {
        name: 'Das Irischen Bände',
        url: 'https://dasirischenbande.netlify.com/',
        description: 'Band page for Das Irischen Bände, a Gothenburg based Irish trad group'
      },
    	{
    		name: 'Perlin',
    		url: this.projectsPath + this.p5Path + 'perlin/',
    		// entryFileName: this.sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Perlin noise pattern generating experiment'
    	},
    	{
    		name: 'Flowers',
    		url: this.projectsPath + this.p5Path + 'flowers/',
    		// entryFileName: this.sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Simulation of tulips shuddering in the wind'
    	},
    	{
    		name: 'Flockheart',
    		url: this.projectsPath + this.unityPath + 'flockheart/',
    		// entryFileName: this.sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Swarm simulation'
    	},
    	{
    		name: 'Blobs',
    		url: this.projectsPath + this.p5Path + 'blobs/',
    		// entryFileName: this.sketchNameStandard,
    		readmeFileName: this.readmeNameStandard,
    		description: 'Simple blob-eat-blob game'
    	},
    	{
    		name: 'Code rain',
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
