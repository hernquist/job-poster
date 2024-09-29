import useSWR from "swr";

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
      {jobs?.length}
      {/* {jobs.map((job: any) => <div>{job.description}</div>)} */}
    </div>
  );
}