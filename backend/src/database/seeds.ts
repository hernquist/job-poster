 const seededData = {
    users: `VALUES 
    (1, "John Doe"), 
    (2, "Jane Doe")`,
    jobs: `VALUES (
    "Seeded job", 
    "Job description", 
    "Job requirements", 
    "John Poster", 
    "j.poster@mail.com", 
    "123456789", 
    "2024-10-4 20:14:09.123", 
    "2024-09-29T03:41:47.655Z"
    ), (
    "Seeded job II", 
    "Great job", 
    "Reading and writing", 
    "John Poster", 
    "j.poster@mail.com", 
    "123456789", 
    "2024-10-5 20:14:09.123", 
    "2024-09-30T05:41:47.655Z"
    ), (
    "Seeded job III", 
    "Greater job", 
    "Reading", 
    "John Poster", 
    "j.poster@mail.com", 
    "123456789", 
    "2024-10-5 20:14:09.123", 
    "2024-09-28T05:41:47.655Z"
    ), (
    "Seeded job IV", 
    "Good job", 
    "Reading Arithmetic", 
    "Jane Poster", 
    "jane.poster@mail.com", 
    "123456789", 
    "2024-10-5 20:14:09.123", 
    "2024-09-30T15:41:47.655Z"
    )`,
    bids: `VALUES 
    (1, 100, 1), 
    (1, 200, 1), 
    (2, 150, 1), 
    (1, 300, 2),
    (1, 125, 4)`
};

export default seededData;