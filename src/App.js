import React from 'react';
import logo from './logo.svg';
import './App.css';

const contactValues = [{
    name: "Peter",
    phoneNumber: 9920826255
},
    {
        name: "Leo",
        phoneNumber: 8369576889
    }];

function contacts() {
    return contactValues.map((contact, index) => ((

        <tr key={index} className="contact">
            <td>{contact.name}</td>
            <td>{contact.phoneNumber}</td>
        </tr>

    )))
}

export default class App extends React.Component {


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
                        contacts()
                    }</tbody>

                </table>
            </div>
        );
    };
}
