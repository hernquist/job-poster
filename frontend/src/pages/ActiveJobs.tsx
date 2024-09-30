import { LinkToPostJob } from '../components/LinkToPostJob';
import { ShowJobs } from '../components/ShowJobs';

function ActiveJobs() {
  return (
    <>
      <ShowJobs title="Show Most Active Job" />
      <LinkToPostJob />
    </>
  );
}

export default ActiveJobs;