// Importa i componenti Form e Modal da react-bootstrap
import { Form, Modal } from 'react-bootstrap';
// Importa le funzioni useState e useEffect da React
import { useState, useEffect } from 'react';

function UpdateProfile({ profile, fetchProfile }) {
  // Stampa il profilo attuale nella console
  console.log('Il mio profilo: ', profile);

  // Recupera il token di autorizzazione dalle variabili d'ambiente
  const Token = process.env.TOKEN;
  // URL dell'API per aggiornare il profilo
  const url = 'https://striveschool-api.herokuapp.com/api/profile/';

  // Definizione degli stati locali
  const [show, setShow] = useState(false); // Stato per controllare la visualizzazione del modal
  const [formDataProfile, setFormDataProfile] = useState({ 
    name: '',
    surname: '',
    email: '',
    username: '',
    area: '',
    title: '',
    bio: '',
    image: ''
  });

  // Effettua il popolamento dei dati del modulo quando il profilo cambia
  useEffect(() => {
    if (profile) {
      setFormDataProfile({
        name: profile.name,
        surname: profile.surname,
        email: profile.email,
        username: profile.username,
        area: profile.area,
        title: profile.title,
        bio: profile.bio,
        image: profile.image
      });
    }
  }, [profile]);

  // Funzione per chiudere il modal
  const handleClose = () => setShow(false);
  // Funzione per aprire il modal
  const handleShow = () => setShow(true);

  // Gestisce i cambiamenti nei campi del modulo
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormDataProfile({
      ...formDataProfile,
      [name]: value
    });
  };

  // Gestisce l'aggiornamento del profilo inviando i dati al server
  const handleUpdateProfile = () => {
    fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleClose(); // Chiude il modal
        fetchProfile(); // Ricarica il profilo
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* Bottone per aprire il modal */}
      <button 
        variant='primary'
        className='upgrade__profile p-0'
        onClick={handleShow}
      >
        <i className='fa-solid fa-pen'></i>
      </button>

      {/* Modal per aggiornare il profilo */}
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiorna Profilo Utente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campo Nome */}
            <Form.Group className='mb-3'>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={formDataProfile.name}
                onChange={handleProfileChange}
                autoFocus
              />
            </Form.Group>
            {/* Campo Cognome */}
            <Form.Group className='mb-3'>
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type='text'
                name='surname'
                value={formDataProfile.surname}
                onChange={handleProfileChange}
              />
            </Form.Group>
            {/* Campo Email */}
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formDataProfile.email}
                onChange={handleProfileChange}
              />
            </Form.Group>
            {/* Campo Username */}
            <Form.Group className='mb-3'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                name='username'
                value={formDataProfile.username}
                onChange={handleProfileChange}
              />
            </Form.Group>
            {/* Campo Luogo */}
            <Form.Group className='mb-3'>
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type='text'
                name='area'
                value={formDataProfile.area}
                onChange={handleProfileChange}
              />
            </Form.Group>
            {/* Campo Titolo */}
            <Form.Group className='mb-3'>
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={formDataProfile.title}
                onChange={handleProfileChange}
              />
            </Form.Group>
            {/* Campo Biografia */}
            <Form.Group className='mb-3'>
              <Form.Label>Biografia</Form.Label>
              <Form.Control
                type='text'
                name='bio'
                value={formDataProfile.bio}
                onChange={handleProfileChange}
              />
            </Form.Group>
            {/* Campo Immagine del profilo */}
            <Form.Group className='mb-3'>
              <Form.Label>Immagine del profilo</Form.Label>
              <Form.Control
                type='url'
                name='image'
                value={formDataProfile.image}
                onChange={handleProfileChange}
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
          {/* Bottone per aggiornare il profilo */}
          <button
            variant='outline-primary'
            className='add__btn'
            onClick={handleUpdateProfile}
          >
            Aggiorna Profilo
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateProfile;
