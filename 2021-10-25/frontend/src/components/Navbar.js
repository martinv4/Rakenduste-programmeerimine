import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className="navbar">
      <Link to="/admin">
        <button className="headerButton">Admini vaatesse</button>
      </Link>
      <Link to="/">
        <img className="logo" src="/veebileht.png" alt=""/>
      </Link>
      <Link to="/cart">
        <img className="cart" src="/cart.svg" alt=""/>
      </Link>
    </div>
  );
}

// alumine tehke ise

export default Navbar;