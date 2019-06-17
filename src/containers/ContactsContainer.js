import React from "react";

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


}