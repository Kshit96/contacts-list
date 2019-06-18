import React from 'react';
import PropTypes from 'prop-types';
import ContactsContainer from "../containers/ContactsContainer";

export default class PhoneBook extends React.Component {


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

PhoneBook.propTypes = {
    contactValues: PropTypes.arrayOf(
        PropTypes.shape({
            name: isNotEmpty,
            phoneNumber: isNotEmpty,
        })),
}

function isNotEmpty(props, propName, componentName) {
    let error;
    let message='';
    const prop = props[propName];

    if(propName === 'name'){
        if(typeof prop !== 'string' ){
            message = message+ propName + ' is not of type String\n';
        }
    }
    if(propName === 'phoneNumber'){
        if(typeof prop !== 'number'){
            message = message + propName + ' is not of type Number\n';
        }
    }
    if (prop.length === 0) {
        message = message + propName + ' cannot have empty value in ' + componentName;
    }
    if(message.length !== 0){
        error = new Error(message);
    }
    return error;
}
