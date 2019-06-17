import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {expect} from 'chai';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {mount} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays two rows of name', ()=>{
    const wrapper= shallow(<App />);
    expect(wrapper.find('.contact')).to.have.lengthOf(2);
});
