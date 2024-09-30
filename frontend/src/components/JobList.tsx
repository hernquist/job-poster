import ShowJob from "./ShowJob";
import { IJob } from "./types";

const styles = `
.job-list {
    max-width: 300px;
}`;

export default function JobList({ jobs }: { jobs: IJob[] }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: styles }} />
            <div className="job-list">
                {jobs.map((job) => (
                    <ShowJob key={job.id} job={job} />
                ))}
            </div>
        </>
    );
}