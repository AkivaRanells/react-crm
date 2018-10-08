import React, { Component } from 'react';
import './actionpage.css';
class AddClient extends Component {
    constructor(){
        //@ts-ignore
        super()
        this.state={
            name: "",
            surname: "",
            owner: "",
            country: ""
        }
    }
    handleChange=(e)=>{
        let change = { [e.target.id] : e.target.value };
        this.setState(change, function(){console.log(this.state)});
    }
    addClient=()=>{
        this.props.addClient(this.state);
    }
    render() {
        return (
            <div>
                <h3>Add Client</h3>
                <div className="update-client">
                    <label htmlFor="name" className="left">First name:</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                </div>
                <div className="update-client">
                    <label htmlFor="surname" className="left">Surname:</label>
                    <input type="text" id="surname" value={this.state.surname} onChange={this.handleChange} placeholder="Surname" />
                </div>
                <div className="update-client">
                    <label htmlFor="owner" className="left">Owner:</label>
                    <input type="text" id="owner" value={this.state.owner} onChange={this.handleChange} placeholder="Owner" />
                </div>
                <div className="update-client">
                    <label htmlFor="country" className="left">Country:</label>
                    <input id="country" value={this.state.country} onChange={this.handleChange} placeholder="Country" />
                </div>
                <button onClick={this.addClient} className="right">Add Client</button>
            </div>
        )
    }
}
export default AddClient;