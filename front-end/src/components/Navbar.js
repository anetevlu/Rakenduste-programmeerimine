import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <img src="abcdef.png" alt="" className="logo"/>
            </Link>
            <Link to="cart">
                <img src="shopping-cart.svg" alt="" className="cart"/>
            </Link>
        </div>
    );
}

export default Navbar;