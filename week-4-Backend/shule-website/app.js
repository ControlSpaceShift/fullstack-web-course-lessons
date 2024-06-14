const express = require('express');

const app = express();

const PORT = 5500;

// Serve the static frontend file
app.use(express.static('public'));

// Define Route Handling 
app.get('/', (req, res) => {
    const APP_NAME = "My Express App";
    res.send(`Welcome to ${APP_NAME}`);
});

// Start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})