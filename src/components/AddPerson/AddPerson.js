import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageChangeHandler = (event) => {
        this.setState({age: event.target.value});
    }

    render(){
        return(
            <div className="AddPerson">
                <input 
                    type="text" 
                    onChange={this.nameChangeHandler} 
                    value={this.state.name} 
                    placeholder="Name" />
                <input 
                    type="number" 
                    onChange={this.ageChangeHandler}
                    value={this.state.age} 
                    placeholder="Age" />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}   


export default AddPerson;