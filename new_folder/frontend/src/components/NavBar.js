import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar(){
    return(<div className="navbar">
        <Link to="/">
            <img className="logo" src="Good-Ebening.png" alt="GoodEveningText" />
        </Link>
        <Link to="cart">
        <img className="cart" src="shopping-cart.svg" alt="CartIcon" />
        </Link>
    </div>);


}
export default NavBar;