import useSWR from "swr";
import JobList from "./JobList";
import { jobDataFunctionMap } from "./utils";
import { JobSort } from "./types";

const styles = `
.show-jobs-container {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    max-width: 400px;
}

h5 {
    font-size: 1.5em;
    text-align: center; 
    margin-top: 0;
    margin-bottom: 10px;
}`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function ShowJobs({title, sort}: {title: string, sort: JobSort}) {

  const {
    data: jobs,
    error,
    isValidating,
  } = useSWR('http://localhost:3001/jobs', fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  const jobDataSortingFunction = jobDataFunctionMap[sort];
  
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <div className="show-jobs-container">
        <h5>{title}</h5>
        <JobList jobs={jobs.sort(jobDataSortingFunction).slice(0,5)} />
      </div>
    </>
  );
}