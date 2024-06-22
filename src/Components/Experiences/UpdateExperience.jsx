// Importa le funzioni useEffect e useState da React
import { useEffect, useState } from 'react';
// Importa i componenti Form e Modal da react-bootstrap
import { Form, Modal } from 'react-bootstrap';

function UpdateExperience({ id, idExp, experience, fetchExperiences }) {
  // Stampa l'esperienza attuale nella console
  console.log('La mia esperienza: ', experience);

  // Recupera il token di autorizzazione dalle variabili d'ambiente
  const Token = process.env.TOKEN;
  // URL dell'API per aggiornare l'esperienza
  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}`;

  // Definizione degli stati locali
  const [show, setShow] = useState(false); // Stato per controllare la visualizzazione del modal
  const [formDataExperience, setFormDataExperience] = useState({ 
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: ''
  });

  // Effettua il popolamento dei dati del modulo quando l'esperienza cambia
  useEffect(() => {
    if (experience) {
      setFormDataExperience({
        role: experience.role,
        company: experience.company,
        startDate: experience.startDate ? experience.startDate.split('T')[0] : '',
        endDate: experience.endDate ? experience.endDate.split('T')[0] : '',
        description: experience.description,
        area: experience.area
      });
    }
  }, [experience]);

  // Funzione per chiudere il modal
  const handleClose = () => setShow(false);
  // Funzione per aprire il modal
  const handleShow = () => setShow(true);

  // Gestisce i cambiamenti nei campi del modulo
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormDataExperience({
      ...formDataExperience,
      [name]: value
    });
  };

  // Gestisce l'aggiornamento dell'esperienza inviando i dati al server
  const handleUpdateExperience = () => {
    fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataExperience),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleClose(); // Chiude il modal
        fetchExperiences(); // Ricarica le esperienze
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* Bottone per aprire il modal */}
      <button 
        variant='primary'
        className='btn__altro mx-3 mt-3'
        onClick={handleShow}
      >
        Modifica
      </button>

      {/* Modal per aggiornare l'esperienza */}
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiorna Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-5'>
          <Form>
            {/* Campo Ruolo */}
            <Form.Group className='mb-3'>
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type='text'
                name='role'
                value={formDataExperience.role}
                onChange={handleExperienceChange}
                autoFocus
              />
            </Form.Group>
            {/* Campo Azienda */}
            <Form.Group className='mb-3'>
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type='text'
                name='company'
                value={formDataExperience.company}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            {/* Campo Data inizio */}
            <Form.Group className='mb-3'>
              <Form.Label>Data inizio</Form.Label>
              <Form.Control
                type='date'
                name='startDate'
                value={formDataExperience.startDate}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            {/* Campo Data fine */}
            <Form.Group className='mb-3'>
              <Form.Label>Data fine</Form.Label>
              <Form.Control
                type='date'
                name='endDate'
                value={formDataExperience.endDate}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            {/* Campo Descrizione */}
            <Form.Group className='mb-3'>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type='text'
                name='description'
                value={formDataExperience.description}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            {/* Campo Luogo */}
            <Form.Group className='mb-3'>
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type='text'
                name='area'
                value={formDataExperience.area}
                onChange={handleExperienceChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Bottone per chiudere il modal */}
          <button 
            variant='secondary'
            className='btn__altro'
            onClick={handleClose}
          >
            Chiudi
          </button>
          {/* Bottone per aggiornare l'esperienza */}
          <button
            variant='outline-primary'
            className='add__btn'
            onClick={handleUpdateExperience}
          >
            Aggiorna Profilo
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateExperience;
