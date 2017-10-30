/* eslint-disable react/prop-types, max-len, no-useless-constructor, react/no-string-refs */
import React from 'react';


export default class Displayer extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonClicked() {
    this.props.pushedMethod(this.refs.name.value, this.refs.category.value, this.refs.due.value);
  }

  render() {
    return (
      <div>
        <h2>Tasks:</h2>
        <div className="row">
          <div className="col-xs-2">ID #</div>
          <div className="col-xs-2">Category</div>
          <div className="col-xs-2">Task Name</div>
          <div className="col-xs-2">Due Date</div>
          <div className="col-xs-2">Completed?</div>
        </div>
        {this.props.tasks.map(r =>
          <div className="row">
            <div className="col-xs-2">{r.id}</div>
            <div className="col-xs-2">{r.category}</div>
            <div className="col-xs-2">{r.name}</div>
            <div className="col-xs-2">{r.due}</div>
            <div className="col-xs-2">{r.complete}</div>
          </div>
        )}
      </div>
    );
  }}
