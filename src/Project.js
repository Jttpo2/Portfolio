import React from 'react';

import styled from 'styled-components';

const defaultWidth = 500;
const defaultHeight = 300;

export default class Project extends React.Component {
  constructor(props) {
    super(props);

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);

    this.frame.onload = () => {
      console.log('Frame loaded');
      this.frame.contentWindow.focus();
    };
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    this.forceUpdate();
  }

  render() {
    return (
      <BorderlessIframe
        src={this.props.project.url}
        width={this.props.fullScreen ? window.innerWidth : defaultWidth}
        height={this.props.fullScreen ? window.innerHeight : defaultHeight}
        ref={(f) => this.frame = f}/>
      );
    }
  }

  const BorderlessIframe = styled.iframe`
  border: none;
  `;
