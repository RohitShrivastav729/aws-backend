

const express = require('express');

const app = express();

app.use(express.json());

console.log("STEP 2: Express initialized");

app.get('/', (req, res) => {
    res.send("Backend is running..");
});

const userRoute = require('./src/routes/userRoute');

app.use('/api', userRoute);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`STEP 3: Server running on port ${PORT}`);
});

// // keep process alive test
// setInterval(() => {
//     console.log("Server still alive...");
// }, 5000);

