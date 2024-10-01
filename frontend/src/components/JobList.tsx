import ShowJobPreview from "./ShowJobPreview";
import { IJob } from "./types";

const styles = `
.job-list {
    max-width: 360;
}`;

export default function JobList({ jobs }: { jobs: IJob[] }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: styles }} />
            <div className="job-list">
                {jobs.map((job) => (
                    <ShowJobPreview key={job.id} job={job} />
                ))}
            </div>
        </>
    );
}