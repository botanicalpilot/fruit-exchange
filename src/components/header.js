import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                    Fruit Exchange Logo
                </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Fruits for trade
                </Link>
            </div>
        </div>
    )
};

export default Header