import React from 'react';
import PropTypes from 'prop-types';
import ContactsContainer from "../containers/ContactsContainer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


export default class PhoneBook extends React.Component {


    render() {
        const contacts = this.props.contactValues;
        return <div>
            <Router>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact, index) => ((
                        <tr key={index} className="contact">
                            <td><Link to={{
                                pathname:`/more-details/${contact.name}`,
                                state: JSON.stringify(contact)
                            }}>
                                {contact.name}
                            </Link>
                            </td>
                        </tr>
                    )))}
                    </tbody>
                </table>
                <Route path={'/more-details/:name'} render={(props) => <MoreDetails contacts={this.props.contactValues} {...props} />}/>
            </Router>
        </div>
    }


}

 export class MoreDetails extends React.Component {
    render(){
        // const currentContact = JSON.parse(this.props.location.state)
        const currentContact = this.props.contacts.filter((contact)=>contact.name===this.props.match.params.name)
        console.log(this.props)
         console.log(this.props.match.params.name)
         console.log(this.props.location.state)
        console.log(currentContact[0])
        return <p className={"WOW"}>{currentContact.name} has phone number: {currentContact.phoneNumber}</p>;
    }
}

PhoneBook.propTypes = {
    contactValues: PropTypes.arrayOf(
        PropTypes.shape({
            name: isNotEmpty,
            phoneNumber: isNotEmpty,
        })).isRequired,
}

function isNotEmpty(props, propName, componentName) {
    let error;
    let message = '';
    const prop = props[propName];

    if (propName === 'name') {
        if (typeof prop !== 'string') {
            message = message + propName + ' is not of type String\n';
        }
    }
    if (propName === 'phoneNumber') {
        if (typeof prop !== 'number') {
            message = message + propName + ' is not of type Number\n';
        }
    }
    if (prop.length === 0) {
        message = message + propName + ' cannot have empty value in ' + componentName;
    }
    if (message.length !== 0) {
        error = new Error(message);
    }
    return error;
}
