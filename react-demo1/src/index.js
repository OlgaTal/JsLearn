import Counter from './Counter';
import Sum from './Sum';
import Product from './Product';
import Temperature from './Temperature';
import Statistics from './Statistics';
import Like from './Like';
import Greeting from './Greeting';
import Bucket from './Bucket';
import Weather from './Weather';

import React from 'react';
import { render } from 'react-dom';

let tags = [];
for (let i = 0; i < 10; i++) {
  let rnd1 = Math.floor(Math.random() * 100);
  let rnd2 = Math.floor(Math.random() * 100);
  let tag = <Sum key={i} x={rnd1} y={rnd2} />;
  tags.push(tag);
}


render(
  <div>
    <div>
      <Weather city={'chicago'}  />
    </div>
  </div>

  , document.getElementById('root'));

  // render(
  //   <div>
  //     <div>
  //       <Bucket />
  //     </div>
  //   </div>
  //
  //   , document.getElementById('root'));

  // render(
  //   <div>
  //     <div>
  //       <Greeting />
  //     </div>
  //     <div>
  //       <Like />
  //     </div>
  //   </div>
  //
  //   , document.getElementById('root'));

  // render(
  //   <div>
  //
  //     <div>
  //       <Counter start={15} />
  //       <Counter start={0} />
  //       <Counter start={-15} />
  //     </div>
  //
  //     <div>
  //       {tags}
  //     </div>
  //
  //     <div>
  //       <Temperature city='chicago' tempf={95} />
  //     </div>
  //
  //     <div>
  //       <Product name='ipad' price={1000} discount={10} />
  //     </div>
  //
  //     <div>
  //       <Statistics nums={[1,2,3,4,5,6,7,8,9]} />
  //     </div>
  //
  //   </div>
  //
  //   , document.getElementById('root'));
