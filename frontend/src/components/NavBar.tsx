import { Link, NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"  >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/post-job" >
                        Post A Job
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;