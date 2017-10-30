import React from 'react';

class Seat extends React.Component{
  constructor(props){
    super(props);
    console.log('props.seat', props.seat);
    this.state = {seat: props.seat};
    // this.purchaseSeat = this.purchaseSeat.bind(this);
  }

  purchaseSeat(chair) {
    console.log('chair number', chair);

    let seat = this.state.seat;
    seat.taken.push(chair);
    console.log('seat', seat);

    // save to DB
    this.updateSeatDataToDB(seat);

    // do render:
    this.setState({ seat });
  }


  updateSeatDataToDB(seat) {
    console.log('SAVE SEATS');
    const url = '//localhost:3333/seats/purchase';
    const id = '#bal_' + seat._id;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(seat),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then(response => {
      response.text().then(responseText => {
        console.log(responseText);
        // update balance :
        const data = JSON.parse(responseText);

        console.log('SUCCESS:',data);

        $(id).text(data.balance);
      })
    }, error => {
      console.log(error.message); //=> String
    })
  }


  render() {
    console.log('this.state.seat', this.state.seat);
    const quantity = this.state.seat.quantity;
    const taken = this.state.seat.taken;
    let chairs = [];
    let colors = [];
    for (let i = 1; i <= quantity; i++) {

      if (taken.find(t => t === i)) {
        chairs.push(<button name={i} key={i} style={{color: 'black', backgroundColor: 'red', margin: '10px'}}>{i}</button>);
      } else {
        chairs.push(<button name={i} key={i} onClick={this.purchaseSeat.bind(this, i)} style={{margin: '10px'}}>{i}</button>);
      }
    }

    return (
      <div style={{border: 'thin solid black', margin: '20px'}}>
        <h4>{this.state.seat.type}: ${this.state.seat.price}/ seat,
            Total: <span id={'bal_' + this.state.seat._id}>{this.state.seat.balance}</span></h4>
            {chairs.map(c => c)}
      </div>
    );
  }
}

export default Seat;

// {chairs.map((c,idx) => <button name={idx} key={idx} ref={{chair:{c}}} onClick={this.purchaseSeat.bind(this, c)}>{c}</button>)}
