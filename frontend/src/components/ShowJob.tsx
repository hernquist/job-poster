import { Link } from "react-router-dom";
import { IJob } from "./types";
import { getLowestBid } from "./utils";

const styles = `
.job-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #000;
    padding: 6px;
    margin: 6px;
    font-size: 1.2em;
    font-family: Arial, sans-serif;
    background-color: peachpuff;
}

.job-card__bids-container {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

.job-card__title {
    font-weight: bold;
    text-transform: capitalize;
    background-color: peachpuff;
    margin: 6px 0;
}

.job-card__text {
    margin: 2px;
    padding: 2px;
`;

export default function ShowJob({ job, hidePostBid = false }: { job: IJob, hidePostBid?: boolean }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles }} />
      <div className="job-card">
        <h4 className="job-card__title">{job.title}</h4>
        <p className="job-card__text">{job.description}</p>
        <p className="job-card__text">Requirements: {job.requirements}</p>
        <p className="job-card__text">Post By: {job.name}</p>
        <p className="job-card__text">Date Posted: {new Date(job.timeCreated).toDateString()}</p>
        <div className="job-card__bids-container">
          <p className="job-card__text">{job?.bids?.length ? `# of bids: ${job?.bids?.length}` : `no bids`}</p> 
          <p className="job-card__text">{getLowestBid(job.bids)}</p>
        </div>
        {!hidePostBid && 
          <Link to={`/job/${job.id}`} state={{job}}>Make A Bid</Link>
        }
      </div>
    </>
  );
}

