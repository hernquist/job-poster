function getBidsFromJobs(jobs: any[]) {
    return jobs?.reduce((bidsById: any, job: any) => {
        if (job.bidsAmount === null) {
            return bidsById;
        }
        if (bidsById?.[job.jobId]) {
            bidsById[job.jobId].push({amount: job.bidsAmount, userId: job.bidsUserId, id: job.bidsId, timeCreated: job.bidsTimeCreated})
        } else {
            bidsById[job.jobId] = [{amount: job.bidsAmount, userId: job.bidsUserId, id: job.bidsId, timeCreated: job.bidsTimeCreated}]
        }
        return bidsById;
    }, {});
}

// problably better to use knex to organize the jobs
function applyBidsToJobs (jobs: any[]) {
    const getBids = getBidsFromJobs(jobs);

    return jobs?.filter((job: any, index: number) => jobs.findIndex( (j: any) => j.jobId === job.jobId ) === index)
        .map((job: any) => {
            return {
                id: job.jobId,
                title: job.title,
                description: job.description,
                requirements: job.requirements,
                name: job.name,
                email: job.email,
                phone: job.phone,
                bids: getBids[job.jobId]
            }
        });
};

export { applyBidsToJobs };