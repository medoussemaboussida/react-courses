import React from 'react';
import { Card, Col } from 'react-bootstrap';
import placeholder from '../assets/placeholder.jpg'; // Assurez-vous d'avoir l'image placeholder.jpg dans le dossier assets

const Event = ({ event }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={event.img} alt={event.name} />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>
            <strong>Price:</strong> ${event.price}
          </Card.Text>
          <Card.Text>
            <strong>Tickets Available:</strong> {event.nbTickets}
          </Card.Text>
          <Card.Text>
            <strong>Participants:</strong> {event.nbParticipants}
          </Card.Text>
          <Card.Text>
            <strong>Like:</strong> {event.like ? 'Liked' : 'Not Liked'}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;