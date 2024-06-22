import { Col, Container, Row } from 'react-bootstrap';

// Componente per visualizzare le risorse dell'utente
function Resources() {
  return (
    <>
      {/* Contenitore principale per la sezione delle risorse */}
      <Container className='pb-4 content__risorse content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
            {/* Intestazione della sezione risorse */}
            <h5 className='name mb-0'>Risorse</h5>
            {/* Indicazione di visibilità privata */}
            <p className='my-0 occupation text-muted'><i className='fa-solid fa-eye'></i> Solo per te</p>
            
            {/* Sezione 'La mia rete' */}
            <div className='d-flex gap-2'>
              <i className='fa-solid fa-user-group'></i>
              <div>
                <h5>La mia rete</h5>
                <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
              </div>
            </div>
            
            {/* Linea divisoria */}
            <div className='divider_line'></div>
            
            {/* Sezione 'Elementi salvati' */}
            <div className='d-flex gap-2 mt-4'>
              <i className='fa-solid fa-bookmark'></i>
              <div>
                <h5>Elementi salvati</h5>
                <p>Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Link per mostrare tutte le risorse */}
      <div className='link__analisi'>
        <p className='text-center'>Mostra tutte le risorse <i className='fa-solid fa-arrow-right'></i></p>
      </div>
    </>
  );
};

export default Resources;