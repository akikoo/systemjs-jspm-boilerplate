'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import CardComponent from './CardComponent.js';

class MainComponent extends React.Component {
  render() {
    return <CardComponent title="Card Title" />;
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));