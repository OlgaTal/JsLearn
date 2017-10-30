import React from 'react';
import Venue from './Venue';
import Seat from './Seat';

class Concert extends React.Component{

  constructor(props) {
    super(props);
    this.handleChildClick = this.handleChildClick.bind(this);
    // this.handleChildClick = this.handleChildClick.bind(this);
  }

  componentDidMount() {
    console.log('DID Mount');

    // get data from DB:
    // 1. quantity/type/price per section &
    // 2. an array of taken/empty seats
    this.getSeatsDataFromDB();
  }

  handleChildClick() {
    console.log('PARENT');
    const refs = this.refs.venue.refs;

    const quantity = refs.quantity.value;
    const type = refs.type.value;
    const price = refs.price.value;
    refs.quantity.value = '';
    refs.type.value = '';
    refs.price.value = '';

    // save data in DB and return the array/list of seats sections
    this.saveSeatDataToDB(quantity, type, price);
    this.getSeatsDataFromDB();

    // do render:
    this.setState({ quantity, type, price });
  }

  getSeatsDataFromDB() {
    console.log('GET SEATS');
    const url = '//localhost:3333/seats';
    fetch(url, {
      method: "GET",
      // body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then(response => {
       response.text().then(responseText => {
         const data = JSON.parse(responseText);
         console.log(data);
         this.setState({ seats: data.seats });
        })
    }, error => {
      console.log(error.message); //=> String
    })
  }

  saveSeatDataToDB(quantity, type, price) {
    console.log('SAVE SEATS');
    const url = '//localhost:3333/seats';
    const data = { quantity, type, price };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then(function(response) {
      response.status     //=> number 100–599
      response.statusText //=> String
      response.headers    //=> Headers
      response.url        //=> String

      response.text().then(responseText => {
        console.log(responseText);
       })
    }, error => {
      console.log(error.message); //=> String
    })
  }

  render() {
    console.log('RENDER');
    console.log('AAA this.state.seats:', this.state);
    let data = '';
    if (this.state) {
      data = this.state.seats.map((seat, index) => <Seat key={index} seat={seat} />);
    }
    return (
      <div>
        <Venue ref="venue" onClick={this.handleChildClick} />
        { data }
      </div>
    );
  }
}

export default Concert;
