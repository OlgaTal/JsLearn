import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import InputArea from '../components/InputArea';

describe('InputArea', () => {
  // Populating the InputArea
  it('should contain an input and a button', () => {
    const wrapper = shallow(<InputArea/>);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <button>Add</button>
    ])).to.equal(true);
  });
});
