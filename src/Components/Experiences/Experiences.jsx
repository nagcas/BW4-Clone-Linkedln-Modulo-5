import { Col, Container, Row, Spinner, Alert, Card, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import ModalExperience from './ModalExperience';
import AddExperience from './AddExperience';
import UpdateExperience from './UpdateExperience';
import DeleteExperience from './DeleteExperience';

// Componente per visualizzare le esperienze lavorative dell'utente
function Experiences({ id, login }) {
  const Token = process.env.TOKEN;
  
  // Stati per gestire le esperienze, lo spinner e gli errori
  const [Experiences, setExperience] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  // Usa l'ID fornito come prop o dall'URL
  const idToUse = id || params._id;

  const urlExperiences = 'https://striveschool-api.herokuapp.com/api/profile';

  // Funzione per recuperare le esperienze dall'API
  const fetchExperiences = () => {
    setIsEnableSpinner(true);
    fetch(`${urlExperiences}/${idToUse}/experiences`, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setExperience(data);
        setIsError(false);
      })
      .catch((error) => {
        console.error('Error loading...', error);
        setIsError(true);
      })
      .finally(() => setIsEnableSpinner(false));
  };

  // Effetto per caricare le esperienze al montaggio del componente o al cambio di ID
  useEffect(() => {
    fetchExperiences();
  }, [id, params._id]);

  return (
    <Container className='content__experience content__info__profile p-4'>
      <Row className='user__detail'>
        <Col>
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='name mb-0'>Esperienze</h5>
            {/* Mostra il pulsante per aggiungere esperienza solo se l'utente è loggato */}
            {login === 'me' ? (
              <div className='mx-3'>
                <AddExperience id={id} idToUse={idToUse} fetchExperiences={fetchExperiences} />
              </div>
            ) : ''}
          </div>
          <Container>
            <Row>
              <Col>
                {/* Mostra lo spinner durante il caricamento */}
                {isEnableSpinner && <div className='text-center mt-5'><Spinner animation='grow' /></div>}
                {/* Mostra un messaggio di errore se il caricamento fallisce */}
                {isError && <div className='text-center mt-5'><Alert variant='danger'>Error loading...</Alert></div>}
                {/* Mappa le esperienze se ce ne sono, altrimenti mostra un messaggio */}
                {Experiences.length > 0 ? (
                  Experiences.map((experience) => (
                    <div key={experience._id}>
                      <Card className='p-0 mt-2'>
                        <Card.Header className='text-bold'>{experience.company}</Card.Header>
                        <Card.Body>
                          <Card.Title className='text-bold'>{experience.role}</Card.Title>
                          <div className='d-flex gap-2 justify-content-start align-items-center'>
                            <ListGroup.Item 
                              style={{border:'solid 1px #ccc', padding:'10px', borderRadius:'10px'}} 
                            >
                              Data inizio: {format(new Date(experience.startDate), 'dd/MM/yyyy')}
                            </ListGroup.Item>
                            <ListGroup.Item 
                              style={{border:'solid 1px #ccc', padding:'10px', borderRadius:'10px'}}
                            >
                              {/* Mostra 'Ancora in corso' se non c'è una data di fine */}
                              {experience.endDate ? 'Data Fine: ' + format(new Date(experience.endDate), 'dd/MM/yyyy') : 'Ancora in corso'} 
                            </ListGroup.Item>
                          </div>
                          <div className='card-footer mt-2'>
                            <ModalExperience experience={experience} />
                            {/* Mostra i pulsanti di modifica e eliminazione solo se l'utente è loggato */}
                            {login === 'me' ? (<UpdateExperience id={id} idExp={experience._id} experience={experience} fetchExperiences={fetchExperiences} />) : ''}
                            {login === 'me' ? (<DeleteExperience id={id} idExp={experience._id} fetchExperiences={fetchExperiences} />) : ''}
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                ) : (
                  <p>Non hai ancora pubblicato nulla</p>
                )}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Experiences;