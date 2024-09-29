import { IJob } from "./types";

export default function ShowJob({ job }: { job: IJob }) {
  return (
    <div>
        <h4>{job.title}</h4>
        <p>{job.description}</p>
        <p>Post By: {job.name}</p>
        <p>Date Posted {new Date(job.timeCreated).toDateString()}</p>
    </div>
  );
}