# Documentation

## Next steps
1. Settle upon a better defined css process
2. Incorporate a query builder and ORM (knex and bookshelf come to mind here) -- use models to build out the ideas in the backend
3. Better testing and finer control of backend typing

## Getting started

1. Open two terminal tabs.
2. From the the root directory run
    `docker-compose up`
    `docker-compose watch` see below for details
3. Visit the frontend at `http://localhost:8080/`. I seeded the sqlite database with some starting data for users, jobs, and bids. 
4. Visit the backend at `http://localhost:3001/`. 

### Updates to docker
I spent some time updating the docker files so that I could use `docker compose watch`. The trick here for dev-ing in the backend is that I didn't want to rebuild the docker container upon dev changes. I created a hot reloading experience with logging. I assigned two actions to the `watch` command. There is a `sync` and `rebuild` action. With `docker-compose watch` running, an engineer can see the updates as he/she makes changes. Try going to a file, say `backend/src/controllers/jobs.ts` and break the code. You will see the error message in the code. Fix the error, the code will sync and rebuild.

### Backend Rest API

Users
- `GET /api/users`: Get all users
- `POST /api/users`: Add a user
- `DELETE /api/users/:id`: Delete a user by id

Jobs and Bids
- `POST /api/jobs`: Create a new job posting.
- `GET /api/jobs`: Get all job postings (with optional filtering for recently posted and most active).
- `GET /api/jobs/:id`: Get details of a specific job posting.
- `POST /api/jobs/:id/bids`: Place a new bid on a specific job.
- `GET /api/jobs/:id/bids`: Get all bids related to a job.

### Get Users
`curl http://localhost:3001/users`
### Add User
`curl -X POST -H "Content-Type: application/json" -d '{"id": 2, "name": "Jane Doe"}' http://localhost:3001/users`
### Delete User
`curl -X DELETE http://localhost:3001/users/2`
### Get Jobs
`curl http://localhost:3001/jobs`
### Get Jobs By Id
`curl http://localhost:3001/jobs/2`
### Get Bids By Job
`curl http://localhost:3001/jobs/1/bids`
### Add Bid To Job
`curl -X POST -H "Content-Type: application/json" -d '{"amount": "786"}' http://localhost:3001/jobs/1/bids`

(Add bid that would not work because the job does not exist.)
`curl -X POST -H "Content-Type: application/json" -d '{"amount": "786"}' http://localhost:3001/jobs/6/bids`

### SQLite
I wrote raw schema query to access the sqlite database. 
Returning bids by job was a little tricky. SQLite does not have a method for assembling related table data into an array. So I wrote some custom javascript to assemble bids into a list. `getBidsFromJobs` and `applyBidsToJobs` do that heavy lifting. I thought it was appropriate to unit test that work. As I mentioned in `Next Steps`, I would incorporate [knex.js](https://knexjs.org/guide/query-builder.html#knex) and [bookshelf](https://bookshelfjs.org/) to help write queries and help transform data. No reason to write custom code for problems that have been solved repeatedly over time. 

To facilitate development, I seeded the database with users, jobs, and bids. `backend/src/database/seeds.ts`

### Frontend routing
I used `react-router-dom` to allow some dynamic routes. The Routing Config indexes all frontend routes.

```
export enum RoutingConfig {
    home = "/",
    about = "/about",
    postJob = "/post-job",
    activeJobs = "/active-jobs",
    makeABid = "/job/:jobId/bid",
    jobDetail = "/job/:jobId"
}
```

For clarity and simplicity all the routes are defined in the `Router.tsx` file. See the re-use of the enum config here and in the NavBar and other components.

```
 <Routes>
    <Route path={RoutingConfig.home} Component={Home} />
    <Route path={RoutingConfig.about} Component={About} />
    <Route path={RoutingConfig.postJob} Component={PostJob} />
    <Route path={RoutingConfig.activeJobs} Component={ActiveJobs} />
    <Route path={RoutingConfig.makeABid} Component={PostBid} />
    <Route path={RoutingConfig.jobDetail} Component={JobDetail} />
</Routes>
```

"/active-jobs" is not used but it is there nonetheless.

I did not feel like this app needed redux or some other comprehensive state management system so occasionally I passed state via routing props. It can pulled from the child parent by using `useLocation`. This assumes that a previous page will be able to provide props to the current page. This might create difficult situations... If it does, that is when a state management system makes sense. 

### Backend testing
I had to add
    - "@types/jest": "^29.5.13"
    - "ts-node": "^10.9.2"
    - "ts-jest": "^29.2.5"
to get some testing set up in the backend. From `/backend` run

`npm run test`

### Frontend testing
The frontend was set up for testing. I did build a `ErrorBoundary` component to help allow targeted unit tests. Run

`npm run test`

### Error handling
I used standard error handling around the responses and requests in the backend. I modified docker to help capture and log those errors.

And in the frontend I wrote some simple error handling around fetching of data in the react components.

-------------------------------------------------------------------

# Intuit Mailchimp Fullstack Take Home Assessment - Job Marketplace
# Previous README

Welcome to the Intuit Mailchimp Fullstack Take Home Assessment! This project is a simplified job marketplace where users can post contract jobs and place bids on them. The focus is on core functionalities, allowing you to demonstrate your abilities in both frontend and backend development.

---

## Project Setup

The project contains the following main directories:

- **Frontend (React with NX framework)**: Located in the `/frontend` directory.
- **Backend (TypeScript Express API)**: Located in the `/backend` directory. The backend uses SQLite for storage.

The setup here is for your convenience. If you'd like to reach for different technology, you're welcome to do so.

### Prerequisites

1. Make sure you have everything downloaded locally. You should set up a new git repository.
1. Have [Docker installed](https://www.docker.com/get-started/).

### Running the build

1. Navigate to the root directory.
1. Run `docker-compose up -d`
1. Visit the frontend at `http://localhost:8080/`
1. Visit the backend at `http://localhost:3001/`. `http://localhost:3001/users` demonstrates a working return of data.

---

## Guidelines

- **Time Commitment**: We ask that you spend up-to 3-4 hours on this assignment.
- **GitHub Repository**: Provide a link to a GitHub repository containing the project code. Make frequent commits with clear messages to show your thought process and progress.
- **Main Document**: Further detailed guidelines and requirements can be found [here](https://docs.google.com/document/d/1ofKBO4I7dUrUhfRQjNHHCAeJb2zIy-2lo7_YvA8DJfo).

---

## Technical Requirements

### User Stories

#### View Home Page

- Displays the 5 most recently published job postings.
- Displays the top 5 most active and open jobs (measured by the number of bids).
- Includes a link to publish a new job posting.

#### Post New Job

- Form to collect job description, requirements, name, and contact info of the poster.

#### View Job Details

- Displays job description, requirements, poster’s name, and contact info.
- Displays the current lowest bid amount.
- Displays the number of bids.
- Displays the auction expiration date/time and the time remaining to bid.
- Includes a form for placing a new bid.

---

## Project Requirements

### Backend

Provide a RESTful API with SQLite storage. The following endpoints need to be implemented:

- `POST /api/jobs`: Create a new job posting.
- `GET /api/jobs`: Get all job postings (with optional filtering for recently posted and most active).
- `GET /api/jobs/:id`: Get details of a specific job posting.
- `POST /api/jobs/:id/bids`: Place a new bid on a specific job.

### Frontend

Create a user-friendly interface using React (managed by NX):

- **Home Page**: Displays the 5 most recent and 5 most active job postings with links to job details and posting a new job.
- **New Job Page**: Form to create a new job posting.
- **Job Details Page**: Displays job details and allows placing a new bid.

---

## Non-Functional Requirements

- **Error Handling**: Basic error handling on both backend and frontend.
- **Code Quality**: Follow best practices for code quality, including naming conventions and modularity.
- **Documentation**: Include a README file with setup and run instructions.
- **Automated Testing**: Basic unit tests for both frontend and backend.

---

## Evaluation Criteria

Your submission will be evaluated based on several factors including code quality, functionality, design, testing, and documentation. For more details, refer to the main document.

## Good Luck!

We look forward to seeing your implementation and creativity in tackling this assessment. Remember to prioritize quality and showcase your expertise effectively.
