import React from 'react';
import {shallow} from 'enzyme';
import ContactsContainer from "./ContactsContainer";



describe('ContactContainer',()=> {
    it('renders PhoneBook', () => {
        const wrapper = shallow(<ContactsContainer/>);

        expect(wrapper.find('PhoneBook')).toHaveLength(1);
    });

    it('renders FilterContainer', () => {
        const wrapper = shallow(<ContactsContainer/>);

        expect(wrapper.find('FilterContainer')).toHaveLength(1);
    });
    it('renders AddContact component', () => {
        const wrapper = shallow(<ContactsContainer/>);

        expect(wrapper.find('AddContact')).toHaveLength(1);
    });
})