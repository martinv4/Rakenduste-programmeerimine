import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function Navbar() {
  return(
    <div className="navbar">
      <Link to="/posts">
        <Button>Posts</Button>
      </Link>
      <Link to="/">

        <Button>Home</Button>
      </Link>
    </div>
  );
}

// alumine tehke ise

export default Navbar;