import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const items = useSelector((state: any) => state.cart.items);
    return (
        <header className="header mt-10">
            <div className='head-text'>
                <NavLink to={'/'}>
                    CartX
                </NavLink>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-10 text-xl'>
                    <NavLink to={'/'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={'/cart'}>

                        <li className='flex gap-2'><ShoppingCart /> <span>{items.length}</span></li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header