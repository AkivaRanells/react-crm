import React, { Component } from 'react';
import ReactTable from 'react-table';
import Modal from 'react-responsive-modal';
import SearchBar from './SearchBar';
import 'react-table/react-table.css';
import './clients.css';
class ClientsPage extends Component {
    constructor() {
        //@ts-ignore
        super()
        this.state = {
            nameValue: "",
            countryValue: "",
            open: false,
            dataRow: {},
            searchTerm: "",
            selected: "name"
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
    searchClients=(terms, selectedItem)=>{
        this.setState({searchTerm: terms, selected: selectedItem})
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

    nameInput = (event) => {
        this.setState({ nameValue: event.target.value });
    }
    countryInput = (event) => {
        this.setState({ countryValue: event.target.value });
    }

    getClient = (data) => {
        this.setState({ dataRow: data, nameValue: data.name, countryValue: data.country });
        this.onOpenModal();
    }
    getData=()=>{
        let data = this.props.data.filter(d=>{
            if(this.state.selected==="sold"){
                if(this.state.searchTerm==="true")return d.sold;
                else return !d.sold;
            }
            let select = d[this.state.selected].toUpperCase();
            return select.includes(this.state.searchTerm.toUpperCase());
        });
        return data;
    }
    getTable = () => {
        return (
            <ReactTable
                getTrProps={(state, rowInfo, column, instance) => ({
                    onClick: (e) => this.getClient(rowInfo.original)
                })}
                data={this.getData()}
                columns={[
                    {
                        Header: 'Name',
                        accessor: 'name'
                    },
                    {
                        Header: 'Country',
                        accessor: 'country'
                    },
                    {
                        Header: 'First Contact',
                        accessor: 'firstContact'
                    },
                    {
                        Header: 'Email',
                        accessor: 'emailType'
                    },
                    {
                        id: 'sold',
                        Header: 'Sold',
                        //@ts-ignore
                        accessor: d => d.sold ? "✔" : "–"
                    },
                    {
                        Header: 'Owner',
                        accessor: 'owner'
                    }

                ]}
                defaultPageSize={15}
                className='-striped -highlight'
            />
        )
    }
    formSubmit = (e) => {
        e.preventDefault();
        let newDataRow = { ...this.state.dataRow };
        newDataRow.name = this.state.nameValue;
        newDataRow.country = this.state.countryValue;
        this.setState({ dataRow: newDataRow }, function () {
            this.props.editClients(this.state.dataRow);
        });
    }
    getModal = () => {
        const { open } = this.state;
        return (
            <div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <form onSubmit={this.formSubmit}>
                        <div className="modal-div"> Name: <input type="text" name="name" value={this.state.nameValue} onChange={this.nameInput}></input> </div> <div className="modal-div"> Country: <input type="text" onChange={this.countryInput} name="country" value={this.state.countryValue}></input> </div>
                        <input type="submit" value="Save Changes"></input>
                    </form>
                </Modal>
            </div>
        );
    }
    render() {
        return (
            <div>
                <SearchBar searchClients={this.searchClients}></SearchBar>
                {this.getTable()}
                {this.getModal()}
            </div>
        );
    }
}
export default ClientsPage;