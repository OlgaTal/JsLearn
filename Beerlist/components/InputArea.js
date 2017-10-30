import React, { Component } from 'react';
class InputArea extends Component {
  render() {
    return <input/>
  }
}

// PropTypes make debugging a lot easier — not only
// when you're first writing a component,
// but also in the future when you're going to reuse it.
InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default InputArea;
