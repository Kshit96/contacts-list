import React from 'react';
import { shallow } from 'enzyme';
import AddContact from "./AddContact";



describe('AddContact',()=> {
    it('should callback addContact when values given', () => {
        const add =jest.fn();
        const wrapper =shallow(<AddContact addContact={add}/>);
        wrapper.setState({name: 'Leon'});
        wrapper.setState({phoneNumber: 9969004087});
        wrapper.state.phoneNumber=9969004987;
        const contact={name: 'Leon',phoneNumber: 9969004087};
        const button=wrapper.find('.submit');


        button.simulate('click');

        expect(add).toHaveBeenCalledWith('Leon',9969004087);

    });
})