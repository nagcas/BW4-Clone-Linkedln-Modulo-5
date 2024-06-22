import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

// Componente per visualizzare i consigli personalizzati per il profilo utente
function Advised() {
  return (
    <>
      {/* Contenitore principale per la sezione dei consigli */}
      <Container className='content__consigliato content__profile p-4'>
        <Row className='user__detail'>
          <Col>
            {/* Intestazione della sezione consigli */}
            <h5 className='name mb-0'>Consigliato per te</h5>
            {/* Indicazione di visibilità privata */}
            <p className='my-0 occupation text-muted'><i className='fa-solid fa-eye'></i> Solo per te</p>
            {/* Livello di completamento del profilo */}
            <p>Intermedio</p>
            {/* Barra di progresso per il completamento del profilo */}
            <div className='d-flex align-items-center gap-2 p-0'>
              <ProgressBar variant='secondary' now={60} className='bg-light progress__bar' />
              <span className='my-0 occupation text-muted'>6/7</span>
            </div>
            {/* Suggerimento per raggiungere il livello massimo */}
            <p className='my-0 location text-muted'>Completa 1 passaggio per raggiungere il livello <span className='connections'>Massimo</span></p>
            {/* Sezione per aggiungere un riepilogo al profilo */}
            <div className='content__riepilogo'>
              <h5>Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</h5>
              <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>
              {/* Pulsante per aggiungere un riepilogo */}
              <button variant='outline-secondary' className='btn__altro'>
                Aggiungi un riepilogo
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Advised;