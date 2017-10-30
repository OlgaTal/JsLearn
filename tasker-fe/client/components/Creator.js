/* eslint-disable react/prop-types, max-len, no-useless-constructor, react/no-string-refs */
import React from 'react';


export default class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    this.props.pushedMethod(this.refs.name.value, this.refs.category.value, this.refs.due.value);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
          <label htmlFor="name">Name</label><br />
          <input type="text" name="name" ref="name" />
        </div>
        <div className="col-xs-3">
          <label htmlFor="category">Category</label><br />
          <input type="text" name="category" ref="category" />
        </div>
        <div className="col-xs-3">
          <label htmlFor="due">Due Date</label><br />
          <input type="date" name="due" ref="due" />
        </div>
        <div className="col-xs-3">
          &nbsp;<br />
          <button onClick={this.buttonClicked} type="button" name="create" className="btn btn-primary">Create</button>
        </div>
      </div>
    );
  }}

// onClick={() => this.appSelected(app)}
