import React, {Component} from 'react';
import './Person.css'
class Person extends Component{
    render() {
        return (
            <div className="persons">
                <h1>Name: {this.props.name}</h1>
                <h3>Phone: {this.props.phone}</h3>
                <h3>Birth: {this.props.dob}</h3>
                <h3>Gender: {this.props.gender}</h3>
            </div>
        )
    }
}

export default Person;