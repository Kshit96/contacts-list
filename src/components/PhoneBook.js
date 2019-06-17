import React from 'react';

export default class phoneBook extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const contacts = this.props.contactValues;
        return <div>
            <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact, index) => ((
                <tr key={index} className="contact">
                    <td>{contact.name}</td>
                    <td>{contact.phoneNumber}</td>
                </tr>
            )))}
            </tbody>
        </table>
        </div>
    }


}