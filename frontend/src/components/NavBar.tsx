import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/"  >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/post-job" >
                        Post A Job
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;