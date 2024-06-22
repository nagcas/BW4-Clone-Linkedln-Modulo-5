import React, { useState } from 'react';
import { format } from 'date-fns';
import { Modal, Card, ListGroup, Button } from 'react-bootstrap';

// Componente per visualizzare i dettagli di un'esperienza lavorativa in un modal
function ModalExperience({ experience }) {
  
  // Stato per controllare la visibilità del modal
  const [show, setShow] = useState(false);

  // Funzioni per gestire l'apertura e la chiusura del modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Pulsante per aprire il modal */}
      <button 
        variant='outline-primary'
        className='add__btn'
        onClick={handleShow}
      >
        Visualizza Esperienza
      </button>
      
      {/* Modal per visualizzare i dettagli dell'esperienza */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Esperienza lavorativa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className='m-0'>
            <ListGroup variant='flush'>
              {/* Dettagli dell'esperienza */}
              <ListGroup.Item>Ruolo: {experience.role}</ListGroup.Item>
              <ListGroup.Item>Azienda: {experience.company}</ListGroup.Item>
              <ListGroup.Item>
                Data inizio: {format(new Date(experience.startDate), 'dd/MM/yyyy')}
              </ListGroup.Item>
              <ListGroup.Item>
                {/* Mostra 'Ancora in corso' se non c'è una data di fine */}
                {experience.endDate ? 'Data Fine: ' + format(new Date(experience.endDate), 'dd/MM/yyyy') : 'Ancora in corso'} 
              </ListGroup.Item>
              <ListGroup.Item>Descrizione: {experience.description}</ListGroup.Item>
              <ListGroup.Item>Zona: {experience.area}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          {/* Pulsante per chiudere il modal */}
          <button
            variant='outline-secondary' 
            className='btn__altro' 
            onClick={handleClose}
          >
            Chiudi
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalExperience;