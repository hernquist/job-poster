import { useLocation } from 'react-router-dom';
import ShowJob from '../components/ShowJob';

const styles = `
h1 {
    text-align: center;
    font-size: 2em;
}`;

function PostBid() {
    const location = useLocation();
    const { state } = location;
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <div>
                <h1>Job Detail</h1>
                <ShowJob job={state.job} />
            </div>
        </>
    );
}

export default PostBid;