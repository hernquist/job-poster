import { Link } from 'react-router-dom';
import { RoutingConfig } from '../app/routing-config';

const styles = `
.link {
    margin: 20px;
    padding: 20px;
    background-color: lightblue;
    border: 1px solid #ccc;
    border-radius: 6px;
    text-decoration: none;
    color: black;
}
`;

export function LinkToPostJob( ) {
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: styles}} />
            <Link className="link" to={RoutingConfig.postJob}>CLICK HERE TO POST A NEW JOB!</Link>
        </>
    )
}