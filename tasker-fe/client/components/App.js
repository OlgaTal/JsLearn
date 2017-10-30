/* eslint-disable react/prop-types, max-len, no-useless-constructor, react/no-string-refs */

import React from 'react';
import axios from 'axios';
import moment from 'moment';

import Nav from './Nav';
import Creator from './Creator';
import Displayer from './Displayer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.createPushed = this.createPushed.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:9001/api/tasks')
    .then((rsp) => {
      // console.log('Data retrieved is:', rsp.data.content);
      this.setState({ tasks: rsp.data.content });
    });
  }

  createPushed(name, category, due) {
    console.log('We got:', name, category, due);

    axios.post('http://localhost:9001/api/tasks', { name, category, due })
          .then((rsp) => {
            console.log('HI:', rsp);

            const updatedTask = rsp.data;
            updatedTask.due = moment(rsp.data.due).utc().format('YYYY-MM-DD');
            this.setState({ tasks: [...this.state.tasks, updatedTask] });
          });
  }

  render() {
    console.log('App is rendering');
    return (
      <div>
        <Nav />

        <div className="container">
          <Creator pushedMethod={this.createPushed} />
          <Displayer tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}
