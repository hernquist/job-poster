import useSWR from "swr";
import JobList from "./JobList";
import { sortMostRecent } from "./utils";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function ShowJobs() {

    const {
      data: jobs,
      error,
      isValidating,
    } = useSWR('http://localhost:3001/jobs', fetcher);
  
    // Handles error and loading state
    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
      <h5>5 most recent jobs</h5>
      <JobList jobs={jobs.sort(sortMostRecent).slice(0,5)} />
    </div>
  );
}