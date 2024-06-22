// Importa il file CSS per lo stile del componente
import '../../style/ModalUsers.css';

// Importa gli hook e i componenti necessari da React e react-bootstrap
import { useState } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Definisce il componente ModalUsers che riceve i profili come prop
function ModalUsers({ profiles }) {
  // Stato per controllare la visibilità del modal
  const [show, setShow] = useState(false);

  // Funzioni per gestire l'apertura e la chiusura del modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // Hook per la navigazione
  const navigate = useNavigate();

  return (
    <>
      {/* Pulsante per aprire il modal */}
      <button
        variant='outline-primary'
        className='add__btn w-100' 
        onClick={handleShow}>
        Vedi tutti
      </button>

      {/* Componente Modal */}
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Altri profili simili</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body-scroll bg-light'>
          {/* Mappa i profili e crea un container per ciascuno */}
          {profiles.map((profile) => (
            <Container onClick={() => navigate(`/profiles/${profile._id}`)} key={profile._id} className='select__user'>
              <Row className='justify-content-start my-2'>
                <Col md={3}>
                  {/* Immagine del profilo */}
                  <img
                    src={profile.image}
                    alt={`Foto del profilo di ${profile.name}`}
                    className='rounded-circle me-3'
                    width='50'
                    height='50'
                    loading='lazy'
                  />
                </Col>
                <Col md={9} className='d-column'>
                  {/* Nome, cognome e titolo del profilo */}
                  <h5 className='mb-1 text-start'>{profile.name} {profile.surname}</h5>
                  <p className='mb-1 text-start'>{profile.title}</p>
                </Col>
              </Row>
              {/* Linea divisoria tra i profili */}
              <div className='divider_line'></div>
            </Container>
          ))}
        </Modal.Body>
        <Modal.Footer>
          {/* Pulsante per chiudere il modal */}
          <button 
            variant='secondary' 
            className='btn__altro'
            onClick={handleClose}>
            Chiudi
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUsers;