const  { applyBidsToJobs } = require("./utils");

describe('utils', () => {
    const mockJobs = [
        {
            "jobId":1,
            "title":"Seeded job",
            "description":"Job description",
            "requirements":"Job requirements",
            "name":"John Poster",
            "email":"j.poster@mail.com",
            "phone":"123456789",
            "timeCreated":"2024-09-29T03:41:47.655Z",
            "expiration":"2024-10-4 20:14:09.123",
            "bidsAmount":100,
            "bidsUserId":1,
            "bidsId":1,
            "bidsTimeCreated":"2024-09-30T15:41:47.655Z"
        },
        {   "jobId":1,
            "title":"Seeded job",
            "description":"Job description",
            "requirements":"Job requirements",
            "name":"John Poster",
            "email":"j.poster@mail.com",
            "phone":"123456789",
            "timeCreated":"2024-09-29T03:41:47.655Z",
            "expiration":"2024-10-4 20:14:09.123",
            "bidsAmount":200,
            "bidsUserId":1,
            "bidsId":2,
            "bidsTimeCreated":"2024-09-30T15:41:47.655Z"
        },
        {
            "jobId":1,
            "title":"Seeded job",
            "description":"Job description",
            "requirements":"Job requirements",
            "name":"John Poster",
            "email":"j.poster@mail.com",
            "phone":"123456789",
            "timeCreated":"2024-09-29T03:41:47.655Z",
            "expiration":"2024-10-4 20:14:09.123",
            "bidsAmount":150,
            "bidsUserId":2,
            "bidsId":3,
            "bidsTimeCreated":"2024-09-30T15:41:47.655Z"
        },
        {   "jobId":2,
            "title":"Seeded job II",
            "description":"Great job",
            "requirements":"Reading and writing",
            "name":"John Poster",
            "email":"j.poster@mail.com",
            "phone":"123456789",
            "timeCreated":"2024-09-30T05:41:47.655Z",
            "expiration":"2024-10-5 20:14:09.123",
            "bidsAmount":300,
            "bidsUserId":1,
            "bidsId":4,
            "bidsTimeCreated":"2024-09-30T15:41:47.655Z"
        },
        {   "jobId":3,
            "title":"Seeded job III",
            "description":"Greater job",
            "requirements":"Reading",
            "name":"John Poster",
            "email":"j.poster@mail.com",
            "phone":"123456789",
            "timeCreated":"2024-09-28T05:41:47.655Z",
            "expiration":"2024-10-5 20:14:09.123",
            "bidsAmount":null,
            "bidsUserId":null,
            "bidsId":null,
            "bidsTimeCreated":null
        },
        {
            "jobId":4,
            "title":"Seeded job IV",
            "description":"Good job",
            "requirements":"Reading Arithmetic",
            "name":"Jane Poster",
            "email":"jane.poster@mail.com",
            "phone":"123456789",
            "timeCreated":"2024-09-30T15:41:47.655Z",
            "expiration":"2024-10-5 20:14:09.123",
            "bidsAmount":125,
            "bidsUserId":1,
            "bidsId":5,
            "bidsTimeCreated":"2024-09-30T15:41:47.655Z"
        }];
    describe("applyBidsToJobs", () => {
        it("should return the same number of jobs", () => {
            const result = applyBidsToJobs(mockJobs);
            expect(result.length).toEqual(4);
        })

        it("should return an object with an array called 'bids' when there are bids related to a job ", () => {
            const jobs = applyBidsToJobs(mockJobs);
            expect(jobs[0].bids).toHaveLength(3);
            expect(jobs[1].bids).toHaveLength(1);
            expect(jobs[3].bids).toHaveLength(1);
        })

        it("should return an object without a field called 'bids' when there are no bids related to a job ", () => {
            const jobs = applyBidsToJobs(mockJobs);
            expect(jobs[2].bids).toBeUndefined();
        })

        it("should return undefined for 'bids' when there are no bids related to a job ", () => {
            const jobs = applyBidsToJobs(mockJobs);
            expect(jobs[2].bids).toBeUndefined();
        })

        it("should return a bid object with the following keys", () => {
            const jobs = applyBidsToJobs(mockJobs);
            expect(Object.keys(jobs[0].bids[0])).toEqual(["amount", "userId", "id", "timeCreated"]);
        })
    });
});
              