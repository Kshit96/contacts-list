import React from 'react';
import './App.css';
import ContactsContainer from "./containers/ContactsContainer";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
