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
    margin: 10px 0;
    font-size: 1em;
    font-family: Arial, sans-serif;
    background-color: peachpuff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.job-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
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
    padding: 4px;
    font-size: 1.2em;
}

.job-card__link {
    text-align: center;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
}
`;

export default function ShowJobPreview({ job }: { job: IJob, hidePostBid?: boolean }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: styles }} />
      <div className="job-card">
        <h4 className="job-card__title">{job.title}</h4>
        <p className="job-card__text">Date Posted: {new Date(job.timeCreated).toDateString()}</p>
        <div className="job-card__bids-container">
          <p className="job-card__text">{job?.bids?.length ? `# of bids: ${job?.bids?.length}` : `no bids`}</p> 
          <p className="job-card__text">{getLowestBid(job.bids)}</p>
        </div>
        <Link className="job-card__link" to={`/job/${job.id}`} state={{job}}>See Job Detail</Link>
      </div>
    </>
  );
}
