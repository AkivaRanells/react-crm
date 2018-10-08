import React, { Component } from 'react';
import UpdateClient from './UpdateClient';
import ClientInput from './ClientInput';
import AddClient from './AddClient';
import './actionpage.css';
class ActionPage extends Component {
    constructor(){
        //@ts-ignore
        super()
        this.state={
            personData: {}
        }
    }
    selectedName=(name)=>{
        let person = this.props.data.filter(p=>p.name===name)[0];
        this.setState({personData: person});
    }
    render() {
        return (
            <div>
                <ClientInput data={this.props.data} selectedName={this.selectedName}/>
                <UpdateClient data={this.props.data} person={this.state.personData} editClients={this.props.editClients} />
                <hr/>
                <AddClient data={this.props.data} addClient={this.props.addClient} />
            </div>
        )
    }
}
export default ActionPage