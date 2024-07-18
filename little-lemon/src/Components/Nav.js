import './Nav.css';

function Nav() { 
    return ( 
        <nav className="navbar">
            <img src="restaurant.jpg" alt="The logo of the company"/>
            <ul className="nav-links">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav> 
    ) 
  } 

export default Nav;