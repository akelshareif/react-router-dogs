import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ dogData }) => {
    return (
        <nav>
            <NavLink to="/dogs">Home</NavLink>
            {dogData.map(({ name }) => (
                <NavLink key={name} to={`/dogs/${name.toLowerCase()}`}>
                    {name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Nav;
