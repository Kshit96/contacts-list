import React from 'react';
import PhoneBook from "../components/PhoneBook";
import Filter from "../components/Filter";

export default class FilterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredContacts: []
        }

    }

    filterByName(name){
        const filteredContact = this.props.contactValues.filter((contact)=>{
            if(name!=="" && contact.name.startsWith(name)) return true;

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