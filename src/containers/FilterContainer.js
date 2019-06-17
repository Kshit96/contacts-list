import React from 'react';
import PhoneBook from "../components/PhoneBook";
import Filter from "../components/Filter";

export default class FilterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactValues: [{
                name: "Peter",
                phoneNumber: 9920826255
            },
                {
                    name: "Leo",
                    phoneNumber: 8369576889
                }],
            filteredContacts: []
        }

    }

    filterByName(name){
        const filteredContact = this.state.contactValues.filter((contact)=>{
            if(contact.name.startsWith(name)) return true;

            return false;
        });

        this.setState({filteredContacts: filteredContact});
    }

    render() {
        return (
            <div>
                    <Filter filterByName={this.filterByName.bind(this)}/>
                    <PhoneBook contactValues={this.state.filteredContacts}/>

            </div>
        )
    }


}