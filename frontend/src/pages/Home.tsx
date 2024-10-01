import { JobSort } from '../components/types';
import { LinkToPostJob } from '../components/LinkToPostJob';
import { ShowJobs } from '../components/ShowJobs';

const styles = `
.show-jobs-layout {
  display: flex;
  flix-direction: row;
  justify-content: space-around;
}

.show-jobs-layout__column {
  display: flex;
  flex-direction: column;
}
`;

function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="show-jobs-layout">
        <div className="show-jobs-layout__column">
          <ShowJobs title="5 Most Recent Jobs" sort={JobSort.MostRecent}/>
          <LinkToPostJob />
        </div>
        <div className="show-jobs-layout__coolumn">
          <ShowJobs title="Show Most Active Job" sort={JobSort.MostActive} />
          <LinkToPostJob />
        </div>
      </div>
    </>
  );
}

export default Home;
