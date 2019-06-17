import React from 'react';
import { shallow } from 'enzyme';
import Filter from "./Filter";



describe('phoneBook',()=> {
    it('should have a filter button', () => {
        const wrapper =shallow(<Filter/>);
        expect(wrapper.find('.filter').type()).toBe('input');
    });

    it('should do a call back when filter value changed', () => {
        const filter=jest.fn();
        const wrapper = shallow(<Filter filterByName={filter}/>);
        const searchFilter='P';

        wrapper.find('.filter').simulate('change',{target:{value: searchFilter}});
        expect(filter).toHaveBeenCalledWith(searchFilter);
    });

})