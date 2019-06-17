import React from 'react';
import PhoneBook from "./PhoneBook";
import Search from "./Search";

export default class PhoneBookContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <Search/>
                </div>
                <div>
                    <PhoneBook contactValues={this.props.contactValues}/>
                </div>
            </div>
        )
    }


}