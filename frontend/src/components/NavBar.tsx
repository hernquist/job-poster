import { NavLink } from 'react-router-dom';
import { RoutingConfig } from '../app/routing-config';

const styles = `
nav {
    display: flex;
    flex-direction: row;
    width: 100%;
}

ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 800px;
    background-color: #f1f1f1;
}

li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #555;
    color: white;
}`;

function NavBar () {
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: styles }} />
            <nav>
                <ul>
                    <li>
                        <NavLink to={RoutingConfig.home}  >
                            Jobs Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={RoutingConfig.postJob} >
                            Post A Job
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={RoutingConfig.about} >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;