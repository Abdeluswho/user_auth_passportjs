import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Dashboard</a></li>
                            <li><a className="pull-right" href="#">Login</a></li>
                            <li><a className="pull-right" href="#">Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header