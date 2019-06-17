import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneBook from './PhoneBook';
import PhoneBookContainer from "./PhoneBookContainer";


export default class App extends React.Component {

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
                }]
        }
    }

    render() {
        return (
            <div>
                <div>
                    <PhoneBookContainer contactValues={this.state.contactValues} />
                </div>
            </div>
        );
    };
}
