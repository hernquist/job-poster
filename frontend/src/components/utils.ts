import { IJob } from "./types";

function sortMostRecent(a: IJob, b: IJob) {
    return Number(new Date(b.timeCreated)) - Number(new Date(a.timeCreated))
}

export { sortMostRecent };