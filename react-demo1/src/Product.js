import React from 'react';

export default (props) => {
  let name = props.name;
  let price = props.price;
  let discount = props.discount;

  let salePrice = price - price * (discount *.01);

  return(
    <div>
      <div> {name} ${price}, discount {discount}%, sale price ${salePrice} </div>
    </div>
  );
};
