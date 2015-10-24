'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import '../compiled/shared/styles/base.css!';

import CardComponent from './components/Card/CardComponent.js';

class MainComponent extends React.Component {
  render() {
    return <CardComponent title="Card Title" />;
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));