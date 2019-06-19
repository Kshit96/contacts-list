import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default class PhoneBook extends React.Component {

  getLink (contact, index) {
    const link = `/more-details/${contact.name}`
    return (
      <tr key={index} className="contact">
        <td><Link to={link}>
          {contact.name}
        </Link>
        </td>
      </tr>
    )
  }

  render () {
    const contacts = this.props.contactValues
    return (
      <div>
          <table>
            <thead>
            <tr>
              <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map(this.getLink)}
            </tbody>
          </table>
          <Route path={`/more-details/:name`} render={(props) => <MoreDetails
            contacts={contacts} {...props} />}/>
      </div>
    )
  }

}

export class MoreDetails extends React.Component {
  render () {
    // const currentContact = JSON.parse(this.props.location.state)
    const currentContact = this.props.contacts.find(
      (contact) => contact.name === this.props.match.params.name) || {}

    return <p className={'WOW'}>{currentContact.name} has phone
      number: {currentContact.phoneNumber}</p>
  }
}

//
// PhoneBook.propTypes = {
//     contactValues: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: isNotEmpty,
//             phoneNumber: isNotEmpty,
//         })).isRequired,
// }
//
// function isNotEmpty(props, propName, componentName) {
//     let error;
//     let message = '';
//     const prop = props[propName];
//
//     if (propName === 'name') {
//         if (typeof prop !== 'string') {
//             message = message + propName + ' is not of type String\n';
//         }
//     }
//     if (propName === 'phoneNumber') {
//         if (typeof prop !== 'number') {
//             message = message + propName + ' is not of type Number\n';
//         }
//     }
//     if (prop.length === 0) {
//         message = message + propName + ' cannot have empty value in ' + componentName;
//     }
//     if (message.length !== 0) {
//         error = new Error(message);
//     }
//     return error;
// }
