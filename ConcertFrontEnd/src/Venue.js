import React from 'react';

class Venue extends React.Component{
  render() {
    const style = {marginRight:'20px'};
    return (
      <div>
        <h3>Seats</h3>
        <label for='quantity' style={style}>Quantity </label>
        <input ref='quantity' type='text' id='quantity'/><br/>

        <label for='type' style={style}>Seat Type </label>
        <select ref='type' id='type'>
          <option>Floor</option>
          <option>General</option>
          <option>Balcony</option>
        </select><br/>

        <label for='price' style={style}>Price per seat: $</label>
         <input ref='price' type='text' id='price' /><br/><br/>
        <button onClick={this.props.onClick} style={{margin: '0px 0px 0px 20px'}}>Create</button>
      </div>
    );
  }
}

export default Venue;
