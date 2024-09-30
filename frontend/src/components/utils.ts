import { IJob, IBid } from "./types";

function sortMostRecent(a: IJob, b: IJob) {
    return Number(new Date(b.timeCreated)) - Number(new Date(a.timeCreated))
}

function sortMostActive(a: IJob, b: IJob) {
    return (b.bids?.length || 0) - (a.bids?.length || 0);
}

const jobDataFunctionMap = {
    "/": sortMostRecent,
    "/active-jobs": sortMostActive,
}

function getLowestBid(bids: IBid[] = []) {
    if (Array.isArray(bids) && bids.length > 0) {
      bids.sort((a: IBid, b: IBid) => (Number(a.amount) || 0) - (Number(b.amount) || 0));
      return `low bid: ${bids[0]?.amount}`;
    }
    return ""
  }

function getJobId (pathname: string) {
    return pathname.split('/')[2]
}

export { jobDataFunctionMap, getLowestBid, getJobId };
