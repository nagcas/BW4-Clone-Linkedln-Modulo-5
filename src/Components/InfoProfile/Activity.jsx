import { Col, Container, Row } from 'react-bootstrap';

// Componente per visualizzare l'attività dell'utente
function Activity({ login }) {
  return (
    <>
      {/* Contenitore principale per la sezione delle attività */}
      <Container className='content__attività content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
            {/* Intestazione della sezione attività con pulsanti condizionali */}
            <div className='d-flex align-items-center justify-content-between'>
              <h5 className='name mb-0'>Attività</h5>
              {/* Mostra i pulsanti solo se l'utente è loggato */}
              {login === 'me' ? 
                (<div className='mx-3'>
                  {/* Pulsante per creare un nuovo post */}
                  <button
                    variant='outline-primary'
                    className='add__btn mx-1 mt-3'
                  >
                    Crea un post
                  </button>
                  {/* Pulsante per modificare il profilo */}
                  <button className='upgrade__profile p-0'><i className='fa-solid fa-pen'></i></button>
                </div>
              ) : ''}
            </div>
            {/* Numero di follower */}
            <p className='my-0 connections'>5 followers</p>
            {/* Messaggio quando non ci sono post */}
            <h5>Non hai ancora pubblicato nulla</h5>
            <p>I post che condividi appariranno qui</p>
          </Col> 
        </Row>
      </Container>
      {/* Link per visualizzare tutte le attività */}
      <div className='link__analisi'>
        <p className='text-center'>Mostra tutte le attività <i className='fa-solid fa-arrow-right'></i></p>
      </div>
    </>
  );
};

export default Activity;