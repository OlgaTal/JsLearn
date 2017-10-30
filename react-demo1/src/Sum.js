import React from 'react';

export default (props) => {
  const x = props.x;
  const y = props.y;
  return(
    <div>
      <div>Sum {x} + {y} = {x + y}</div>
    </div>
  );
};
