import React from 'react';

import './style.css';

function Info() {
  return (
    <div className='info'>
        <h3 className='header'>About Us</h3>
        <p className='text'>As the world begins to re-open, it’s important that the spread of COVID-19 continues 
        to be monitored. One of the best ways to do this is to track the daily changes in case count for specific 
        locations, especially with regards to population density. Our app displays this data on a map and updates 
        every day. One can easily visualize the severity of the virus in their location and make an informed decision 
        on whether or not to leave their house. In the future, we plan to incorporate text updates. If there is a 
        significant change in case count in their location, the user will be notified via SMS.</p>

        <h3 className='header'>How We Built It:</h3>
        <p className='text'>The frontend of this app was created using REACT in Javascript and the Google Maps API 
        while the backend was created using Python and Firebase. Once per day, the data is obtained from the COVID-19 
        API in Python and is stored in the Firebase database.
        </p>

        <h3 className='header'>Where the Data Came From:</h3>
        <p className='text'>All data is sourced from the COVID-19 API, which contains data from various sources compiled 
        by Johns Hopkins CSSE. The API contains the most recent increase in cases for over 266 locations throughout the 
        world.
        </p>
    </div>
  );
}

export default Info;