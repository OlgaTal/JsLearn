import React from 'react';

export default (props) => {
  return (
  <div>
    <h1>hello 1 </h1>
    <h2>hello 2</h2>
    <h3>{props.x + props.y}</h3>
  </div>
  );
}
