import React, { Component } from 'react';
class SearchBar extends Component {
    constructor() {
        //@ts-ignore
        super()
        this.state = {
            searchValue: "",
            selectValue: "name"
        }
    }
    searchInput = (event) => {
        this.setState({ searchValue: event.target.value }, function(){
            this.props.searchClients(this.state.searchValue, this.state.selectValue);
        });
    }
    selectedItem=(event)=>{
        this.setState({ selectValue: event.target.value }, function(){
            this.props.searchClients(this.state.searchValue, this.state.selectValue);
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.searchInput} type="text" name="search" placeholder="Search" value={this.state.searchValue}></input>
                    <select value={this.state.selectValue} onChange={this.selectedItem}>
                        <option value="name">Name</option>
                        <option value="country">Country</option>
                        <option value="firstContact">First Contact</option>
                        <option value="email">Email</option>
                        <option value="sold">Sold</option>
                        <option value="owner">Owner</option>
                    </select>
            </div>
        )
    }
}
export default SearchBar;