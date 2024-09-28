// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LinkToPostJob } from '../components/LinkToPostJob';
import { ShowJobs } from '../components/ShowJobs';
import styles from './app.module.less';

export function Home() {

  return (
    <div>
        <ShowJobs/>
        <LinkToPostJob />
    </div>
  );
}

export default Home;
