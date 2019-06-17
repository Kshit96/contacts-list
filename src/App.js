import React from 'react';
import './App.css';
import ContactsContainer from "./containers/ContactsContainer";


export default class App extends React.Component {



    render() {
        return (
            <div>
                <div>
                    <ContactsContainer />
                </div>
            </div>
        );
    };
}
