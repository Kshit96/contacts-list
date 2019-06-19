import React from 'react';
import {shallow, mount} from 'enzyme';
import PhoneBook,{MoreDetails} from "./PhoneBook";
import { MemoryRouter  } from 'react-router'
import { Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import App from "../App";

describe('phoneBook',()=> {
    it('displays two rows of name', () => {
        const contactValues= [
            { name: 'Peter', phoneNumber: 9920826255 },
            { name: "Leo", phoneNumber: 8369576889}
        ];
        const wrapper = shallow(<PhoneBook contactValues={contactValues}/>);
        expect(wrapper.find('.contact')).toHaveLength(2);


    });

    it('should render MoreDetails component when routed to it', ()=>{
        const contactValues= [
            {
                name: "Peter",
                phoneNumber: 9920826255
            },
            {
                name: "Leo",
                phoneNumber: 8369576889
            },
            {
                name: "Connie",
                phoneNumber: 9920520220
            }
        ];
        const component= mount(<MemoryRouter initialEntries = {['/more-details']}>
            <PhoneBook contactValues={contactValues} />
        </MemoryRouter>);

        expect(component.find(MoreDetails)).toHaveLength(1);
    });

})