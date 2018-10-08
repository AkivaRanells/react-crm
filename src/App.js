import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/nav-components/Navbar';
import ActionPage from './components/action-components/ActionPage'
import './app.css'
import ClientsPage from './components/clients-components/ClientsPage';
import AnalyticsPage from './components/analytics-components/AnalyticsPage';
class App extends Component {
  constructor() {
    //@ts-ignore
    super()
    this.state = {
      data: [],
      modalOpen: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      //@ts-ignore
      let newData = require('./data.json');
      this.setState({ data: newData })
    }, 100)
  }
  editClients = (dataRow) => {
    let index = this.state.data.findIndex(d => d._id === dataRow._id);
    if(!this.state.data[index]){
      alert("Please Select A Client To Continue!");
      return;
    }
    let newData = [...this.state.data];
    newData.splice(index, 1, { ...dataRow });
    this.setState({ data: newData }, function(){console.log(this.state.data[index])});
  }
  addClient=(clientRow)=>{
    let newData = [...this.state.data];
    newData.push(clientRow)
    this.setState({data: newData});
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Route path="/clients" exact render={() => 
              <ClientsPage data={this.state.data} editClients={this.editClients} />} />
            <Route path="/actions" exact render={() => 
              <ActionPage data={this.state.data} editClients={this.editClients} addClient={this.addClient}/>} />
            <Route path="/analytics" exact render={()=>
              <AnalyticsPage data={this.state.data}/> }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
