import React from 'react';

export default (props) => {
  let nums = props.nums;

  let sum = nums.reduce((agr, n) => agr + n, 0);
  let average = sum / nums.length;
  let median = nums[Math.floor((nums.length + 1) / 2) - 1];
  console.log('(nums.length + 1) / 2: ', (nums.length + 1) / 2);

  let mode = () => {
    let res = {};
    nums.forEach(n => {
      if (n in res) {
        res[n] += 1;
      } else {
        res[n] = 1;
      }
    });

    console.log('res:', res);
    return Object.keys(res).reduce((a, b) => {
      console.log('a:', a, 'b: ', b )
      console.log('res[a]:', res[a], 'res[b]: ', res[b] );
      console.log('res[a]:', res[a], 'res[b]: ', res[b] );
      return res[a] > res[b] ? a : b;
    });
  };

  let stdDev = Math.sqrt(nums.reduce((agr, n) => agr + (n - average)*(n - average), 0)/nums.length);

  return (
  <div>
    <h1>Statistics Component</h1>
    <h3>Sum = {sum}, Average  = {average}, Median = {median}, Mode = {mode()}, Std. Deviation = {stdDev}</h3>
  </div>
  );
}
