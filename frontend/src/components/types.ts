export interface IBid {
    id: number,
    job_id: number,
    amount: string,
    timeCreated: string,
    user_id: string
};

export interface IJob { 
    id: number,
    title: string, 
    description: string, 
    requirements: string, 
    name: string, 
    email: string, 
    phone: string, 
    expiration: string,
    timeCreated: string
    bids?: IBid[]
};
