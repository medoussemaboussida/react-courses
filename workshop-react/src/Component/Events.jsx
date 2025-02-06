import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Event from './Event';

const Events = () => {
  const [events, setEvents] = useState([]);

  // Charger les données depuis events.json
  useEffect(() => {
    fetch('../src/Event.json') // Chemin relatif vers le fichier JSON
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Erreur lors du chargement des événements:', error));
  }, []);

  return (
    <Row>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </Row>
  );
};

export default Events;