import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <img src="/abcdef.png" alt="" className="logo"/>
            </Link>
            <Link to="cart">
                <img src="/shopping-cart.svg" alt="" className="cart"/>
            </Link>
            <Link to="categories">
                <img src="/check-list.svg" alt="" className="categories"/>
            </Link>
            <Link to="admin">
                <img src="/crown.svg" alt="" className="admin"/>
            </Link>
        </div>
    );
}

export default Navbar;