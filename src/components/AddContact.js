import React from 'react';

export default class AddContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phoneNumber: '',
        }
        this.onNameUpdate = this.onNameUpdate.bind(this);
        this.onNumberUpdate = this.onNumberUpdate.bind(this);
    }

    onNameUpdate(event) {
        this.setState({name: event.target.value});
    }

    onNumberUpdate(event) {
        this.setState({phoneNumber: event.target.value});
    }


    render() {
        return (
            <div>
                <input
                    type="text"
                    className="name"
                    placeholder="Name"
                    onChange={this.onNameUpdate}/>
                <input
                    type="text"
                    className="phone-number"
                    placeholder="Phone Number"
                    onChange={this.onNumberUpdate}/>
                <button className={'submit'} onClick={() => this.props.addContact(this.state.name, this.state.phoneNumber)}
                        value={"Submit"}>Submit
                </button>
            </div>
        );
    }

}