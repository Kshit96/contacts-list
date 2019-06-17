import React from "react";
import Filter from "../components/Filter";
import PhoneBook from "../components/PhoneBook";
import FilterContainer from "./FilterContainer";

export default class ContactsContainer extends React.Component {
    constructor(props) {
        super(props)

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
                    phoneNumber: 8364566889
                }
            ],
        }
    }

    render() {
        return (
            <div>
                <PhoneBook contactValues={this.state.contactValues}/>
                <FilterContainer contactValues={this.state.contactValues}/>
            </div>
        )
    }


}