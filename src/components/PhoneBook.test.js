import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import PhoneBook from "./PhoneBook";



describe('phoneBook',()=> {
    it('displays two rows of name', () => {
        const contactValues= [
            { name: 'Peter', phoneNumber: 9920826255 },
            { name: "Leo", phoneNumber: 8369576889}
        ];
        const wrapper = shallow(<PhoneBook contactValues={contactValues}/>);
        expect(wrapper.find('.contact')).to.have.lengthOf(2);
    });

})