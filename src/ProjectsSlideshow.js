import React from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';
import Project from './Project.js';

export default class ProjectsSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjectIndex: 0
    };
  }

  next() {
    this.goTo(this.state.currentProjectIndex + 1);
  }

  previous() {
    this.goTo(this.state.currentProjectIndex - 1);
  }

  goTo(index) {
    let newIndex = index < 0 ? this.props.projects.length - 1 : index;
    newIndex = index >= this.props.projects.length ? 0 : index;
    this.setState({
      currentProjectIndex: newIndex
    });
  }

  render() {
    return (
      <Container>
        <Gui>
          <NavButtons>
            <PrevButton onClick={() => this.previous()}>&#8249;</PrevButton>
            <NextButton onClick={() => this.next()}>&#8250;</NextButton>
          </NavButtons>
        </Gui>
        <Projects>
          <Project
          src={this.props.projects[this.state.currentProjectIndex]}
          fullScreen={true}
        />
      </Projects>
    </Container>
  );
}
}

const Container = styled.div`
height: 100%;

`;

const Projects = styled.div`
position: absolute;
`;

const Gui = styled.div`
position: absolute;
height: 100%;
width: 100%;

display: flex;
flex-flow: column;
justify-content: center;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;

`;

const NavButton = styled.button`
border: none;
position: absolute;
background-color: ${Colors.navButtonBackground};

border-radius: 10px;

display: flex;
flex-flow: column;
justify-content: center;

padding: 1rem; // 0.2em;

z-index: 10;

cursor: pointer;

transition: all .2s ease-in-out;

font-family: Times;
font-size: 3rem;
text-decoration: none;
color: ${Colors.navButtonTextColor};

:focus {
  outline: none;
}

:hover {
  background-color: ${Colors.navButtonBackgroundHover};
  color: ${Colors.navButtonTextColorHover};
}
`;

const PrevButton = NavButton.extend`
left: 10px;
`;

const NextButton = NavButton.extend`
right: 10px;
`;
