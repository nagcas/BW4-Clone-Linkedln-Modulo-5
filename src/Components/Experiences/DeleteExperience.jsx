import { useState } from 'react';
import { Modal } from 'react-bootstrap';

// Componente per eliminare un'esperienza lavorativa
function DeleteExperience({ id, idExp, fetchExperiences }) {
  // URL per l'API di eliminazione dell'esperienza
  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}`;

  // Stato per controllare la visibilità del modal
  const [show, setShow] = useState(false);

  // Funzioni per gestire l'apertura e la chiusura del modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Token di autenticazione per l'API
  const Token = process.env.TOKEN;

  // Funzione per gestire l'eliminazione dell'esperienza
  const handleElimina = () => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + Token,
      }
    })
    .then(response => {
      if (response.ok) {
        // Chiude il modal e aggiorna la lista delle esperienze
        handleClose();
        fetchExperiences();
      } else {
        // Gestisce eventuali errori
        return response.json()
        .then(data => {
          console.error('Error:', data);
        });
      }
    })
    .catch(error => console.error(error));
  }

  return(
    <>
      {/* Pulsante per aprire il modal di conferma eliminazione */}
      <button 
        variant='outline-secondary' 
        className='btn__altro mx-1 mt-3'
        onClick={handleShow}
      >
        Elimina
      </button>

      {/* Modal di conferma eliminazione */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Elimina esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vuoi confermare l'eliminazione di questa esperienza?
        </Modal.Body>
        <Modal.Footer>
          {/* Pulsante per chiudere il modal */}
          <button 
            variant='secondary'
            className='btn__altro'
            onClick={handleClose}>
            Chiudi
          </button>
          {/* Pulsante per confermare l'eliminazione */}
          <button 
            variant='outline-primary'
            className='add__btn'
            onClick={handleElimina}>
            Elimina
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteExperience;