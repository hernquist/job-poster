import ShowJob from "./ShowJob";
import { IJob } from "./types";

export default function JobList({ jobs }: { jobs: IJob[] }) {
    return (
        <div>
            {jobs.map((job) => (
                <ShowJob key={job.id} job={job} />
            ))}
        </div>
    );
}