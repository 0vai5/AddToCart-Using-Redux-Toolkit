import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header mt-10">
            <div>
                <NavLink to={'/'}>
                    CartX
                </NavLink>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-5'>
                    <NavLink to={'/'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <li>Cart</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header