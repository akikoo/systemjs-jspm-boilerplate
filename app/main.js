import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return <p>Hi!</p>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));