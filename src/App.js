import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneBook from './components/PhoneBook';
import FilterContainer from "./containers/FilterContainer";


export default class App extends React.Component {



    render() {
        return (
            <div>
                <div>
                    <FilterContainer />
                </div>
            </div>
        );
    };
}
