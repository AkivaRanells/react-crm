import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
class NavItem extends Component {
    render() {
        return (
            <div className={this.props.cssClasses}>
                <Link className={this.props.cssClasses} to={this.props.url}>{this.props.name}</Link>
            </div>
        );
    }
}
export default NavItem;