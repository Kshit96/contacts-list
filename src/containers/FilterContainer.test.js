import React from 'react';
import {shallow} from 'enzyme';
import FilterContainer from "./FilterContainer";



describe('FilterContainer',()=> {
    it('renders PhoneBook', () => {
        const wrapper = shallow(<FilterContainer/>);

        expect(wrapper.find('Filter')).toHaveLength(1);
    });

    it('renders FilterContainer', () => {
        const wrapper = shallow(<FilterContainer/>);

        expect(wrapper.find('PhoneBook')).toHaveLength(1);
    });
})