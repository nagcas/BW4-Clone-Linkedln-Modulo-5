import { Form, Modal } from 'react-bootstrap';
import { useState } from 'react';

// Componente per aggiungere una nuova esperienza lavorativa
function AddExperience({ id, fetchExperiences }) {
  
  // Stato per controllare la visibilità del modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Token di autenticazione per l'API
  const Token = process.env.TOKEN;

  // URL per l'API di aggiunta esperienza
  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

  // Stato per i dati del form dell'esperienza
  const [FormDataExperience, setFormDataExperience] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: '',
  });

  // Gestisce i cambiamenti nei campi del form
  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setFormDataExperience({
      ...FormDataExperience,
      [name]: value
    });
  };

  // Invia i dati dell'esperienza all'API
  const sendComment = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormDataExperience),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Resetta il form
      setFormDataExperience({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: '',
      });
      handleClose();
      fetchExperiences(); // Aggiorna la lista delle esperienze
    })
    .catch((error) => console.error(error));
  };

  return (
    <>
      {/* Pulsante per aprire il modal */}
      <button 
        variant='primary'
        className='add__experiences p-0'
        onClick={handleShow}
      >
        <i className='fa-solid fa-plus'></i>
      </button>

      {/* Modal per inserire una nuova esperienza */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci nuova esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className='mb-3'>
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                name='company'
                type='text'
                placeholder='Inserisci azienda...'
                onChange={handleCommentChange}
                autoFocus
              />
            </Form.Group>
          <Form>
            {/* Campi del form per i dettagli dell'esperienza */}
            <Form.Group className='mb-3'>
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                name='role'
                type='text'
                placeholder='Inserisci ruolo...'
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Data inizio</Form.Label>
              <Form.Control
                name='startDate'
                type='date'
                placeholder='Data inizio'
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Data fine</Form.Label>
              <Form.Control
                name='endDate'
                type='date'
                placeholder='Data fine'
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                name='description'
                type='text'
                placeholder='Descrivi la tua esperienza...'
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Area</Form.Label>
              <Form.Control
                name='area'
                type='text'
                placeholder='Inserisci zona...'
                onChange={handleCommentChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Pulsante per chiudere il modal */}
          <button 
            variant='secondary'
            className='btn__altro'
            onClick={handleClose}>
            Chiudi
          </button>
          {/* Pulsante per inviare i dati dell'esperienza */}
          <button 
            variant='outline-primary'
            className='add__btn'
            onClick={sendComment}>
            Aggiungi Esperienza
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperience;