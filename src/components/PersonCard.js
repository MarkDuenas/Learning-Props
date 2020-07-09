import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        }
    }

    celebrateBirthday = () => {
        this.setState((state) => ({
            age: state.age + 1
        }));
    }
    
    render() {
        const { firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h1> { lastName }, { firstName }  </h1>
                <p> Age : { this.state.age } </p>
                <p> Hair Color: { hairColor }</p>
                <button onClick = { this.celebrateBirthday }> Celebrate {firstName}'s' Birthday!</button>
            </div>

        );
    }
}

export default PersonCard;