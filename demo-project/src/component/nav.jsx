import React, { Component } from "react";

class Navbar extends Component {
    render() {
        const { tags } = this.props;
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badgepill badge-secondary">{this.total(tags)}</span>
                </a>
            </nav>
        );
    }
    total = (tags)=>{
        const total = tags.reduce((prev, item)=>{return prev + item.value},0)
        return total;
    }
}

export default Navbar;
