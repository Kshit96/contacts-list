import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {expect} from 'chai';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {mount} from 'enzyme';
import PhoneBook from "./components/PhoneBook";
import Filter from "./components/Filter";


describe('phoneBook',()=> {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('displays two rows of name', () => {
        const contactValues= [
            { name: 'Peter', phoneNumber: 9920826255 },
            { name: "Leo", phoneNumber: 8369576889}
            ];
        const wrapper = shallow(<PhoneBook contactValues={contactValues}/>);
        expect(wrapper.find('.contact')).to.have.lengthOf(2);
    });

    it('has a filter input text box', () => {
        const wrapper = shallow(<Filter/>);
        expect(wrapper.find('.filter')).to.have.lengthOf(1);
    });
})