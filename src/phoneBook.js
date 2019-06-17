import React from 'react';

export default function phoneBook(contactValues) {
    return contactValues.map((contact, index) => ((
        <tr key={index} className="contact">
            <td>{contact.name}</td>
            <td>{contact.phoneNumber}</td>
        </tr>

    )))
}