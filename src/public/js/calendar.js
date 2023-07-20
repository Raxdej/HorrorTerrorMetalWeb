/*
const events = [
    {
        id: 'event1', // Event's id (required, for removing event)
        name: 'Dawn of The Final Day',
        description: 'Final day...', // Description of event (optional)
        date: new Date('2023-07-24T03:24:00'), // Date of event
        type: 'event', // Type of event (event|holiday|birthday)
        color: '#b31729', // Event custom color (optional)
        everyYear: false // Event is every year (optional)
    },
    {
        id: 'event2', // Event's id (required, for removing event)
        name: 'The moment of the truth',
        description: 'Meybe it still a oportunity', // Description of event (optional)
        date: new Date('2023-07-28T03:24:00'), // Date of event
        type: 'event', // Type of event (event|holiday|birthday)
        color: '#fbff0a', // Event custom color (optional)
        everyYear: false // Event is every year (optional)
    }
];
*/

import { eventSearcher } from "../controllers/events.js";

async function display() {
    const event = await eventSearcher();
    
    $('#calendar').evoCalendar({
        'theme': 'Midnight Blue',
        'language': 'en',
        'calendarEvents': event
    });
    console.log(event);
}

display();