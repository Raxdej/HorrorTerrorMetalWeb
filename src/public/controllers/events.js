export async function eventSearcher() {
    console.log('acceding to events...');
    const events = await[
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
            description: 'Maybe it still a oportunity', // Description of event (optional)
            date: new Date('2023-07-28T03:24:00'), // Date of event
            type: 'event', // Type of event (event|holiday|birthday)
            color: '#fbff0a', // Event custom color (optional)
            everyYear: false // Event is every year (optional)
        },
        {
            id: 'event3', // Event's id (required, for removing event)
            name: 'TEST1',
            description: 'asjhsafsasgvas', // Description of event (optional)
            date: new Date('2023-08-05T03:24:00'), // Date of event
            type: 'event', // Type of event (event|holiday|birthday)
            everyYear: false // Event is every year (optional)
        }
    ]

    return events;
}
