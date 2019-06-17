import React from 'react';
import logo from './logo.svg';
import './App.css';
import phoneBook from './phoneBook';


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
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        phoneBook(this.state.contactValues)
                    }</tbody>

                </table>
            </div>
        );
    };
}
