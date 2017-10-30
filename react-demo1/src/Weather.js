import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {city: 'chicago' };
    this.update = this.update.bind(this);
  }

  update(){
    console.log('UPDATE');
    const city = this.refs.city.value;

    console.log('city1: ', city);

    this.getTemp(city);
  }

  getTemp(city){
    $.get('http://api.openweathermap.org/data/2.5/weather?appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial&q=' + city)
      .then((rsp) => {
        console.log('rsp:', rsp);

        this.setState({ temp: rsp.main.temp, city});
      });
  }

  componentWillMount() {
    console.log('WILL');
  }

  componentDidMount() {
    console.log('DID');

    const city = this.state.city;

    console.log('city2: ', city);

    this.getTemp(city);
  }

  render(){
    console.log('RENDER');

    return (
      <div>
        <h3>Weather</h3>
        <div>
          <input ref='city' type='text' />
          <button onClick={this.update} style={{margin: '0px 0px 0px 20px'}}>Update</button>
          <div>{this.state.city}</div>
          <div>{this.state.temp}</div>
        </div>
      </div>
    );
  }
}

export default Weather;
