import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import BeerListContainer from '../components/BeerlistContainer';
import InputArea from '../components/InputArea';
import BeerList from '../components/BeerList';

describe('BeerListContainer', () => {
  // basic code to render
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer/>);
    console.log('ul:', wrapper.find('ul'));
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>
    ])).to.equal(true);
  });

  // Testing the Container State
  it('should start with an empty list', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.state('beers')).to.deep.equal([]);
  });

  // Adding an Item
  it('adds items to the list', () => {
    const wrapper = shallow(<BeerListContainer/>);
    wrapper.instance().addItem('Sam Adams');
    expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  });

  // Passing Down the Function
  it('passes addItem to InputArea', () => {
    const wrapper = shallow(<BeerListContainer/>);
    const inputArea = wrapper.find(InputArea);
    const addItem = wrapper.instance().addItem;
    expect(inputArea.prop('onSubmit')).to.eql(addItem);
  });

  // verifying the binding
  it('passes a bound addItem function to InputArea', () => {
    const wrapper = shallow(<BeerListContainer/>);
    const inputArea = wrapper.find(InputArea);
    inputArea.prop('onSubmit')('Sam Adams');
    expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  });
});
