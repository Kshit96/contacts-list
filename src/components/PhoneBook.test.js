import React from 'react';
import {shallow} from 'enzyme';
import PhoneBook from "./PhoneBook";



describe('phoneBook',()=> {
    it('displays two rows of name', () => {
        const contactValues= [
            { name: 'Peter', phoneNumber: 9920826255 },
            { name: "Leo", phoneNumber: 8369576889}
        ];
        const wrapper = shallow(<PhoneBook contactValues={contactValues}/>);
        expect(wrapper.find('.contact')).toHaveLength(2);
    });

})