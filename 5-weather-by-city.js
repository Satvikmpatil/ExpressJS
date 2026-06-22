// Problem 5: Get weather info using query parameter

const express = require('express');
const app = express();

// Sample weather data
const weatherData = {
    'mumbai': { city: 'Mumbai', temp: '32°C', weather: 'Sunny' },
    'delhi': { city: 'Delhi', temp: '38°C', weather: 'Hot' },
    'bangalore': { city: 'Bangalore', temp: '28°C', weather: 'Cloudy' }
};

// GET route with query parameter
// URL: /weather?city=mumbai
app.get('/weather', (req, res) => {
    // Get city from query string
    const city = req.query.city;

    // Check if city is provided
    if (!city) {
        res.json({ message: 'Please provide city name' });
        return;
    }

    // Find weather (convert to lowercase)
    const weather = weatherData[city.toLowerCase()];

    // Send response
    if (weather) {
        res.json(weather);
    } else {
        res.json({ message: 'City not found' });
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Try: http://localhost:3000/weather?city=mumbai');
});
