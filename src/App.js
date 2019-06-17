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
    return (
        <tbody>
        <tr className="contact">
            <td>{contactValues[0].name}</td>
            <td>{contactValues[0].phoneNumber}</td>
        </tr>
        </tbody>
    )
}

class App extends React.Component {
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

        {
            contacts()
        }

    </table>
    </div>
    );
    };
    }

    export default App;
