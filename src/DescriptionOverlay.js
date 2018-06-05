import React from 'react';
import styled from 'styled-components';

import Colors from './Colors.js';

export default class DescriptionOverlay extends React.Component {
  render() {
    return (
      <Container>
        <h2>
          {this.props.header}
        </h2>
        <p>
          {this.props.body}
        </p>
      </Container>
    );
  }
}

const Container = styled.div`
position: absolute;
top: 10px;
right: 10px;
width: 30%;
padding: 10px;
background: ${Colors.infoPanelBackground};
color: ${Colors.infoPanelText};
z-index: 10;
border-radius: 10px;

`;
