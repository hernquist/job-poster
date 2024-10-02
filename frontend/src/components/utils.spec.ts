
import { getJobId, getLowestBid } from './utils';

const mockBids= [
    {
        amount: 80,
        id: 6,
        timeCreated: "2024-10-01T12:16:52.721Z",
        userId: 1
    },
    {
        amount: 90,
        id: 7,
        timeCreated: "2024-10-01T12:17:22.721Z",
        userId: 1
    }
];

describe('utils', () => {
    describe("getLowestBid", () => {
        it('should return the lowest bid', () => {
            expect(getLowestBid(mockBids)).toBe('Low bid: 80');
        });

        it('should return an empty string if no bids', () => {
            expect(getLowestBid([])).toBe('');
        })
    });
    describe("getJobId", () => {
        it('should return the job id', () => {
            expect(getJobId('/jobs/1')).toBe('1');
            expect(getJobId('/jobs/24')).toBe('24');
        });

        it('should return the job id', () => {
            expect(getJobId('/jobs')).toBe(undefined);
        });

    })
});
