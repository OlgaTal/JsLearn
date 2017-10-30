import React from 'react';

export default (props) => {
  const title = props.title;
  const arr = props.arr;

  const sum = arr.reduce((acc, n) => acc + n * 1, 0);

  return(
      <div style={{float: 'left', margin: '0px 20px 0px 20px'}}>
        <h4>{title}</h4>
        <ul>
          {arr.map((el, index) => <li key={ index }>{el}</li>)}
        </ul>
        <div>------------------</div>
        <div>{sum}</div>
      </div>
  );
};
