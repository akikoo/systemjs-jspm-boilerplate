'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import 'compiled/components/Card/CardComponent.css!';

export default class CardComponent extends React.Component {
  render() {
    return (
      <div className="card-component">
        <h3 className="card-component__title">{this.props.title}</h3>
        <div className="card-component__content">
          <p>I am a very simple card.</p>
        </div>
      </div>
    );
  }
}
