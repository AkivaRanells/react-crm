import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NavItem from './NavItem';
import './navbar.css';
class Navbar extends Component {
    constructor() {
        //@ts-ignore
        super()
        this.state = {
            links: [
                { url: '/clients', displayText: 'Clients' },
                { url: '/actions', displayText: 'Actions' },
                { url: '/analytics', displayText: 'Analytics' }
            ]
        }
    }
    render() {
        return (
                <div className="navbar">
                    {this.state.links.map((l, i)=><NavItem name={l.displayText} url = {l.url} key={i}
                    cssClasses={(l.url===this.props.location.pathname)?"nav-item active": "nav-item"}/>)} />
                </div>
        );
    }
}
export default withRouter(Navbar)