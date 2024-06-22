import { Col, Container, Row } from 'react-bootstrap';

// Componente per visualizzare le analisi del profilo utente
function Analyses() {
  return (
    <>
      {/* Contenitore principale per la sezione delle analisi */}
      <Container className='pb-4 content__analisi content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
            {/* Intestazione della sezione analisi */}
            <h5 className='name mb-0'>Analisi</h5>
            {/* Indicazione di visibilità privata */}
            <p className='my-0 occupation text-muted'><i className='fa-solid fa-eye'></i> Solo per te</p>
            <Container>
              <Row>
                {/* Colonna per le visualizzazioni del profilo */}
                <Col className='mt-2'>
                  <div className='d-flex gap-2'>
                    <i className='fa-solid fa-user-group'></i>
                    <div>
                      <p className='my-0'>0 visualizzazioni del profilo</p>
                      <p className='my-0'>Aggiorna il tuo profilo per attrarre visitatori.</p> 
                    </div>
                  </div>
                </Col>
                {/* Colonna per le impressioni dei post */}
                <Col>
                  <div className='d-flex gap-2'>
                    <i className='fa-solid fa-chart-column'></i>
                    <div>
                      <p className='my-0'>0 impressioni del post</p>
                      <p className='my-0'>Crea un post per aumentare l'interesse.</p>
                      <p className='text-muted'>Ultimi 7 giorni</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      {/* Link per mostrare tutte le analisi */}
      <div className='link__analisi'>
        <p className='text-center'>Mostra tutte le analisi <i className='fa-solid fa-arrow-right'></i></p>
      </div>
    </>
  );
};

export default Analyses;