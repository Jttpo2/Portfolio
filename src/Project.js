import React from 'react';

import styled from 'styled-components';

const defaultWidth = 500;
const defaultHeight = 300;

export default class Project extends React.Component {
  render() {
    return (
      <BorderlessIframe
        src={this.props.project.url}
        width={this.props.fullScreen ? window.innerWidth : defaultWidth}
        height={this.props.fullScreen ? window.innerHeight : defaultHeight}/>
    );
  }
}

const BorderlessIframe = styled.iframe`
  border: none;
`;
