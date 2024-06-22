import { Container, Row, Col } from 'react-bootstrap';

// Componente funzionale per il footer del sito
export default function MyFooter() {
  return (
    <footer>
      <Container>
        {/* Riga principale del footer */}
        <Row>
          {/* Colonna per le informazioni generali */}
          <Col>
            <ul className='p-0'>
              <li>Informazioni</li>
              <li>Linee Guida della Community</li>
              <li className='mb-4'>Privacy e condizioni</li>
              <li>Sales Solutions</li>
              <li>Centro sicurezza</li>
            </ul>
          </Col>

          {/* Colonna per le funzionalità */}
          <Col>
            <ul>
              <li>Accessibilità</li>
              <li>Carriera</li>
              <li>Opzione per gli annunci pubblicitari</li>
              <li>Mobile</li>
            </ul>
          </Col>

          {/* Colonna per le soluzioni */}
          <Col>
            <ul>
              <li>Talent Solutions</li>
              <li>Soluzioni di Marketing</li>
              <li className='mb-4'>Pubblicità</li>
              <li className='mt-2'>Piccole Imprese</li>
            </ul>
          </Col>

          {/* Colonna per le informazioni di contatto e gestione account */}
          <Col md={4}>
            <ul>
              {/* Sezione domande frequenti */}
              <li>
                <span className='size mt-n'>
                  <i className='bi bi-question-circle-fill fs-4 me-3'></i>
                  Domande?
                </span>
                <br />
                <span className='fw-normal margin'>
                  Visita il nostro centro assistenza
                </span>
              </li>
              {/* Sezione gestione account */}
              <li>
                <span className='size mt-n'>
                  <i className='bi bi-gear-fill fs-4 me-3'></i>
                  Gestisci il tuo account e la tua privacy
                </span>
                <br />
                <span className='fw-normal margin'>Vai alle impostazioni</span>
              </li>
              {/* Sezione trasparenza contenuti */}
              <li>
                <span className='size mt-n'>
                  <i className='bi bi-shield-shaded fs-4 me-3'></i>
                  Trasparenza sui contenuti consigliati
                </span>
                <br />
                <span className='fw-normal margin'>
                  Scopri di più sui contenuti consigliati
                </span>
              </li>
            </ul>
          </Col>

          {/* Colonna per la selezione della lingua */}
          <Col>
            <span className='move'>Seleziona lingua</span>
            <br />
            <select className='mt-2'>
              <option>Italiano (italiano)</option>
              <option>Inglese</option>
              <option>Spagnolo</option>
              <option>Francese</option>
            </select>
          </Col>
        </Row>

        {/* Riga per il copyright */}
        <Row>
          <Col className='p-0'>
            <p>LinkedIn Corporation © 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
