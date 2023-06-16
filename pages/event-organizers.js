import axios from 'axios';
import { useState } from 'react';

export default function EventOrganizers() {
  const [eventOrganizers, setEventOrganizers] = useState([]);

  const fetchEventOrganizers = async () => {
    try {
      const response = await axios.get('/event-organizers');
      setEventOrganizers(response.data);
    } catch (error) {
      console.error('Error fetching event organizers:', error);
    }
  };

  return (
    <div>
      <h1>Event Organizers</h1>
      <button onClick={fetchEventOrganizers}>Fetch Event Organizers</button>
      <ul>
        {eventOrganizers.map((organizer) => (
          <li key={organizer.id}>{organizer.name}</li>
        ))}
      </ul>
    </div>
  );
}