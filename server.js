// Import Dependencies 
const express = require("express");
const cors = require("cors"); 

// Import JSON files
const projects = require("./projects.json"); 
const about = require("./about.json"); 

// Create app object
const app = express(); 

// set up middleware
app.use(cors());

//home route for testing 
app.get("/", (req, res) => { 
    res.send("Hello World"); 
}); 

// route for retrieving projects 
app.get("/projects", (req, res) => { 
    // send projects via JSON 
    res.json(projects); 
}); 

// route for retrieving about info 
app.get("/about", (req, res) => { 
    res.json(about); 
}); 
    

const PORT = process.env.PORT || 4000; 

// turn on the server listener 
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));