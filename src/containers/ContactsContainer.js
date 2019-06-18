import React from "react";
import PhoneBook from "../components/PhoneBook";
import FilterContainer from "./FilterContainer";
import AddContact from "../components/AddContact";
import PropTypes from 'prop-types';

export default class ContactsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.addContact=this.addContact.bind(this);
        this.state = {
            contactValues: [
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
                    phoneNumber: 9930520220
                }
            ],
        }

    }

    addContact = (name,phoneNumber)=>{
        const newContact= {name: name, phoneNumber: phoneNumber};
        const existingContact=this.state.contactValues;
        existingContact.push(newContact);
        this.setState({contactValues: existingContact});
    }
    render() {
        return (
            <div>
                <AddContact addContact={this.addContact}/>
                <PhoneBook contactValues={this.state.contactValues}/>
                <FilterContainer contactValues={this.state.contactValues}/>
            </div>
        )
    }


}

ContactsContainer.propTypes={
    contactValues: PropTypes.exact({
        name:PropTypes.string,
        phoneNumber:PropTypes.number
    }),
}