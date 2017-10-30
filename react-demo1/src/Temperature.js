import React from 'react';

export default (props) => {
  let f = props.tempf;
  let c = props.tempc;
  let city = props.city.split('').map((l, idx) => {
    if (idx === 0) return l.toUpperCase();
    return l;
  }).join('');

  if (f) {
    c = (f-32) * 5 / 9;
  } else {
    f = (c * 9 / 5) / (c + 32);
  }

  return (
  <div>
    <h1>Temperature Component</h1>
    <h3>{city} {f} deg F, {c} deg C</h3>
  </div>
  );
}
