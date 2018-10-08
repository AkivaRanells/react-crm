import React, { Component } from 'react';
class ClientInput extends Component {
    constructor() {
        //@ts-ignore
        super()
        this.state = {
            nameValue: ""
        }
    }
    nameInput = (event) => {
        this.setState({ nameValue: event.target.value }, function () { this.props.selectedName(this.state.nameValue) });
    }
    render() {
        return (
            <div>
                <h3>Update</h3>
                <div className="client-select">
                    <label htmlFor="clients">Client:</label> <input type="text" onChange={this.nameInput} list="clients" placeholder="Client Name" /><datalist id="clients">{this.props.data.map(d => <option value={d.name} key={d._id} />)}</datalist>
                </div>
            </div>
        )
    }
}
export default ClientInput;