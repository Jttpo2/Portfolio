import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectsSlideShow from './ProjectsSlideshow.js';

// const projectsPath = './projects/';
// const p5Path = 'p5/';
// const unityPath = 'unity/';
// const sketchNameStandard = 'index.html';
// const readmeNameStandard = "README.md";
// const sketches = [
// 	{
// 		name: 'perlin',
// 		folderPath: projectsPath + p5Path + 'perlin/',
// 		entryFileName: sketchNameStandard,
// 		readmeFileName: readmeNameStandard,
// 		description: 'Perlin noise pattern generating experiment'
// 	},
// 	{
// 		name: 'flowers',
// 		folderPath: projectsPath + p5Path + 'flowers/',
// 		entryFileName: sketchNameStandard,
// 		readmeFileName: readmeNameStandard,
// 		description: 'Simulation of tulips in the wind'
// 	},
// 	{
// 		name: 'flockheart',
// 		folderPath: projectsPath + unityPath + 'flockheart/',
// 		entryFileName: sketchNameStandard,
// 		readmeFileName: readmeNameStandard,
// 		description: 'Flockheart'
// 	},
// 	{
// 		name: 'blobs',
// 		folderPath: projectsPath + p5Path + 'blobs/',
// 		entryFileName: sketchNameStandard,
// 		readmeFileName: readmeNameStandard,
// 		description: 'Simple blob-eat-blob game'
// 	},
// 	{
// 		name: 'code-rain',
// 		folderPath: projectsPath + p5Path + 'code-rain/',
// 		entryFileName: sketchNameStandard,
// 		readmeFileName: readmeNameStandard,
// 		description: 'Matrix style code rain'
// 	}
// ];

// const testSketchPath = ;
// console.log(testSketchPath);

class App extends Component {
  constructor(props) {
    super(props);

    this.projects = [
      './projects/p5/perlin/index.html',
      'http://singit.netlify.com',
      'http://dadgad-tuner.netlify.com'
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
