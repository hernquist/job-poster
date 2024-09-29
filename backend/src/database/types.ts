export interface IJob { 
    title: string, 
    description: string, 
    requirements: string, 
    name: string, 
    email: string, 
    phone: string, 
    expiration: string
};

export interface IJobDB extends IJob {
    timeCreated: string
}