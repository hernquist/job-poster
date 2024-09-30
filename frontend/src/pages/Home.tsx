import { LinkToPostJob } from '../components/LinkToPostJob';
import { ShowJobs } from '../components/ShowJobs';

function Home() {
  return (
    <div>
      <ShowJobs title="5 Most Recent Jobs"/>
      <LinkToPostJob />
    </div>
  );
}

export default Home;
