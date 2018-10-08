import React, { Component } from 'react';
import './actionpage.css';
class UpdateClient extends Component {
    constructor() {
        //@ts-ignore
        super()
        this.state = {
            owner: "",
            email: ""
        }
    }
    ownerState = (event) => {
        this.setState({ owner: event.target.value });
    }
    emailState = (event) => {
        this.setState({ email: event.target.value })
    }
    getOwnerList = () => {
        let ownerList = this.props.data.map(d => d.owner);
        let uniqueOwnerList = ownerList.filter(this.getUnique);
        return uniqueOwnerList;
    }
    getUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    changeOwner = () => {
        let list = this.getOwnerList();
        let isInList =this.isInList(list, this.state.owner);
        if (isInList) {
            this.props.person.owner = this.state.owner;
            this.props.editClients(this.props.person);
            return;
        }
        return alert("Please Select A Owner To Continue!");
    }
    isInList=(list, item)=>{
        let inList = false;
        for(let l of list){
            if(l===item){
                inList = true;
            }
        }
        return inList;
    }
    getEmailList = () => {
        let list = ["A", "B", "C", "D"];
        return list;
    }
    changeEmail = () => {
        let list = this.getEmailList();
        let isInList =this.isInList(list, this.state.email);
        if(isInList){
            this.props.person.emailType = this.state.email;
            this.props.editClients(this.props.person);
            return;
        }
        return alert("Please Select A Email To Continue!")
    }
    declareSale = () => {
        this.props.person.sold = true;
        this.props.editClients(this.props.person);
    }
    render() {
        return (
            <div>
                <div className="update-client">
                    <label htmlFor="transferOwner" className="left">Transfer Ownership To:</label>
                    <input list="transferOwner" value={this.state.owner} onChange={this.ownerState} placeholder="Owner"/>
                    <datalist id="transferOwner">{this.getOwnerList().map(d => <option value={d} key={Math.random()} />)}</datalist>
                    <button onClick={this.changeOwner} className="right">Transfer!</button>
                </div>
                <div className="update-client">
                    <label htmlFor="sendEmail"  className="left">Send Email:</label>
                    <input list="sendEmail" value={this.state.email} onChange={this.emailState} placeholder="Email Type" />
                    <datalist id="sendEmail">{this.getEmailList().map(l => <option value={l} key={l} />)}</datalist>
                    <button onClick={this.changeEmail} className="right">Send Email!</button>
                </div>
                <div className="update-client">
                    <label htmlFor="declareSale" className="left">Declare Sale:</label>
                    <button onClick={this.declareSale} id="declareSale" className="sale">Declare!</button>
                </div>
            </div>
        )
    }
}
export default UpdateClient;