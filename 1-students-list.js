// ============================================
// Problem 1: Display a list of students using GET method
// ============================================

// --------------------------------------------
// STEP 1: Import Express Library
// --------------------------------------------
// require() = Function to load/import libraries
// 'express' = Name of the library we want to use
// const = Creates a variable that cannot be changed later
// express = We store the library in this variable
//
// WHY? Express.js makes creating web servers easy
// WITHOUT Express = 50+ lines of code
// WITH Express = Just few lines!
const express = require('express');

// --------------------------------------------
// STEP 2: Create Our Application
// --------------------------------------------
// express() = Calling express as a function
// This creates our web application/server
// app = Our application is stored in this variable
//
// WHY? Everything we do (routes, settings) is attached to 'app'
// Think of 'app' as your restaurant, users are customers
const app = express();

// --------------------------------------------
// STEP 3: Create Sample Data
// --------------------------------------------
// This is our "database" (just an array for now)
// In real apps, data comes from MongoDB, MySQL, etc.
//
// [] = Array (list of items)
// {} = Object (item with properties)
// Each student has: id, name, age
const students = [
    { id: 1, name: 'Rahul', age: 20 },
    { id: 2, name: 'Priya', age: 21 },
    { id: 3, name: 'Amit', age: 19 }
];

// --------------------------------------------
// STEP 4: Create a GET Route
// --------------------------------------------
// app.get() = Creates a GET route (for reading/fetching data)
//
// '/students' = URL path (user visits: localhost:3000/students)
//
// (req, res) => { } = Arrow function (callback)
//   - req = REQUEST (what user sends to us)
//   - res = RESPONSE (what we send back to user)
//
// res.json() = Send data as JSON format
//   - JSON = JavaScript Object Notation
//   - Standard format for sending data on internet
//
// FLOW:
// 1. User visits localhost:3000/students
// 2. This function runs
// 3. We send students array back to user
app.get('/students', (req, res) => {
    res.json(students);
});

// --------------------------------------------
// STEP 5: Start the Server
// --------------------------------------------
// app.listen() = Starts the server and waits for requests
//
// 3000 = Port number (like a door number)
//   - Full address: http://localhost:3000
//   - localhost = Your own computer
//   - 3000 = Door/port number
//
// () => { } = Callback function
//   - Runs AFTER server starts successfully
//   - We use it to show a message
//
// console.log() = Prints message in terminal
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Try: http://localhost:3000/students');
});

// ============================================
// HOW TO RUN THIS FILE:
// ============================================
// 1. Open terminal
// 2. Go to Assignment2 folder: cd /Users/sapatil/Desktop/js/Assignment2
// 3. Run: node 1-GET/1-students-list.js
// 4. Open browser: http://localhost:3000/students
// 5. You will see the students data!
// 6. To stop server: Press Ctrl + C in terminal
// ============================================

// ============================================
// SUMMARY - What happens when you run this:
// ============================================
// 1. Express library is loaded
// 2. App is created
// 3. Students data is ready
// 4. GET route is registered for '/students'
// 5. Server starts on port 3000
// 6. Server waits for users...
// 7. When user visits /students -> sends students data
// ============================================
