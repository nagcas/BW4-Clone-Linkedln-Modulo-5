import { Col, Container, Row } from 'react-bootstrap';

// Componente per visualizzare le competenze dell'utente
function Skills({ login }) {
  return (
    <>
    {/* Contenitore principale per la sezione delle competenze */}
    <Container className='content__analisi content__info__profile p-4'>
      <Row className='user__detail'>
        <Col>
          {/* Intestazione della sezione competenze */}
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='name mb-0'>Competenze</h5>
            {/* Mostra i pulsanti di modifica solo se l'utente è loggato */}
            {login === 'me' ?
              (<div className='mx-3'>
                <button className='mx-1 add__experiences'><i className='fa-solid fa-plus'></i></button>
                <button className='upgrade__profile p-0'><i className='fa-solid fa-pen'></i></button>
              </div>
              ) : ''}
          </div>
          {/* Lista delle competenze */}
          <Container>
            <Row className='mt-4'>
              <Col>
                <ul>
                {/* Competenza HTML5/CSS3 */}
                <li className='education mb-3'>
                    <img
                      src='https://www.thesocialware.com/corsi/image/cache/catalog/loghi/htmlcss-870x870.png'
                      alt='Image html5 e css3'
                      className='mr-2'
                    />
                    HTML5 / CSS3
                  </li>
                  <div className='divider_line mb-3'></div>

                  {/* Competenza JavaScript */}
                  <li className='education mb-3'>
                    <img
                      src='https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'
                      alt='Image javascript'
                      className='mr-2'
                    />
                    Javascript
                  </li>
                  <div className='divider_line mb-3'></div>

                  {/* Competenza React */}
                  <li className='education mb-3'>
                    <img
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLimkxKgVwum5XDrN89s2lmt_EFlBdJeItA&s'
                      alt='Image react'
                      className='mr-2'
                    />
                    React
                  </li>
                  <div className='divider_line mb-3'></div>

                  {/* Competenza Bootstrap */}
                  <li className='education'>
                    <img
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhGETiCc_Hct6__P9a6iU9vs1DqRCDEiHNQ&s'
                      alt='Image bootstrap'
                      className='mr-2'
                    />
                    Bootstrap
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    {/* Link per mostrare tutti i titoli di studio */}
    <div className='link__analisi'>
      <p className='text-center'>Mostra tutti i titoli di studio (3) <i className='fa-solid fa-arrow-right'></i></p>
    </div>
  </>
  );
};

export default Skills;