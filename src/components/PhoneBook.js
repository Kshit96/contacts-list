import React from 'react';
import PropTypes from 'prop-types';

export default class PhoneBook extends React.Component {

    componentDidMount(){

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

PhoneBook.propTypes={
    name: PropTypes.string,
    phoneNumber: PropTypes.number
}