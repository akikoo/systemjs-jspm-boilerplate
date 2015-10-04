import React from 'react'

class MyComponent extends React.Component {
  render() {
    return <p>Hi!</p>;
  }
}

React.render(<MyComponent />, document.getElementById('app'));