// Importa lo stile CSS personalizzato
import '../style/Profile.css';

import React, { useEffect, useState } from 'react';
// Importa i componenti necessari da react-bootstrap
import { Alert, Col, Container, Row, Spinner, Button, ProgressBar } from 'react-bootstrap';
// Importa i componenti per le varie sezioni del profilo utente
import Advised from '../Components/InfoProfile/Advised';
import Analyses from '../Components/InfoProfile/Analyses';
import Resources from '../Components/InfoProfile/Resources';
import Activity from '../Components/InfoProfile/Activity';
import Experiences from '../Components/Experiences/Experiences';
import Skills from '../Components/InfoProfile/Skills';

// Importa il componente UpdateProfile
import UpdateProfile from '../Components/UpdateProfile/UpdateProfile';


function Profile() {
  // Definisce l'utente come 'me' per il proprio profilo
  const login = 'me';

  // URL dell'API per la lettura dei profili
  const url = 'https://striveschool-api.herokuapp.com/api/profile/';

  // Recupero il token di autorizzazione
  const Token = process.env.TOKEN;
  
  // Definizione degli stati locali
  const [profile, setProfile] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);

  // Funzione per recuperare il profilo
  const fetchProfile = () => {
    setIsEnableSpinner(true);
    fetch(url + login, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setProfile(data);
      setIsError(false);
    })
    .catch((error) => {
      console.error('Error loading...', error);
      setIsError(true);
    })
    .finally(() => setIsEnableSpinner(false)); 
  }

  // Effettua il fetch del profilo quando il componente è montato
  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(profile);
  
  return ( 
    <>
      {/* Mostra lo spinner di caricamento se isEnableSpinner è true */}
      {isEnableSpinner && <div className='text-center mt-5'><Spinner animation='grow' /></div>}
      {/* Mostra un messaggio di errore se isError è true */}
      {isError && <div className='text-center mt-5'><Alert variant='danger'>Error loading...</Alert></div>}
     
      <Container className='pb-2 border-0 content__card content__profile'>
        {/* Sezione background del profilo */}
        <Row className='profile__bg'>
          <img
            src='https://media.licdn.com/dms/image/C4D16AQH3Fs7tJvTAbg/profile-displaybackgroundimage-shrink_350_1400/0/1625442218069?e=1724284800&v=beta&t=nl44PVgE69kZ53-JtB_5NDes4bVAvNJe84KSTVN8B3o'
            alt='Image background profile'
          />
        </Row>
        {/* Sezione immagine del profilo */}
        <Row className='profile__image'>
          <img className='image__user' src={profile.image} alt={profile.name} />
        </Row>
        <div className='d-flex justify-content-end '>
          {/* Componente per aggiornare il profilo */}
          <UpdateProfile profile={profile} fetchProfile={fetchProfile} />
          {/* <button className='upgrade__profile p-0'><i className='fa-solid fa-pen'></i></button> */}
        </div>
        <Row className='user__detail'>
          <Col xs={12} md={8}>
            <h4 className='name mb-0 justify-content-start'>
              {profile.name} {profile.surname} • <span className='connections fs-4'>{profile.username}</span>
            </h4>
            <p className='my-0 occupation'>{profile.title}</p>
            <p className='my-0 location text-muted'>{profile.area} • <span className='connections'>Informazioni di contatto</span></p>

            <p className='my-2 connections'>
              5 collegamenti
            </p>
            <div className='d-column justify-content-start'>
              <button 
                className='profile__button open__to__btn mx-3 mt-3'
              >
                Disponibile per
              </button>
              <button
                variant='outline-primary'
                className='add__btn mx-3 mt-3'
              >
                Aggiungi sezione profilo
              </button>
              <button 
                variant='outline-secondary' 
                className='btn__altro mx-3 mt-3'
              >
                Altro
              </button>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <ul>
              <li className='education mb-1'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bSdmyPGsBkS5WQ7fjHWoPIcYcHnOUlJ1cQ&s'
                  alt='Logo Epicode'
                  className='mr-2'
                />
                Epicode
              </li>

              <li className='education'>
                <img
                  src='https://cdn.stocksnap.io/img-thumbs/960w/woman-developer_HMPNPRBUJ7.jpg'
                  alt='Logo FullStack Web Developer'
                  className='mr-2'
                />
                FullStack Web Developer
              </li>
            </ul>
          </Col>

          <div className='d-flex justify-content-center gap-4 p-4'>
            <div className='content__info_1 w-75 p-2'>
              <Col>
                <p className='my-0 occupation'>Disponibile a lavorare</p>
                <p className='my-0 occupation'>Ruoli Developer</p>
                <a className='connections'>Mostra dettagli</a>
              </Col>
            </div>
            <div className='content__info_2 w-75 p-2'>
              <Col>
                <p className='my-0 occupation'>Fai sapere che stai facendo selezione e attrai candidati qualificati</p>
                <a className='connections'>Inizia</a>
              </Col>
            </div>
          </div>
        </Row>
      </Container>

      {/* Sezione 'Consigliato per te' */}
      <Advised />
      
      {/* Sezione 'Analisi' */}
      <Analyses />

      {/* Sezione 'Risorse' */}
      <Resources />
      
      {/* Sezione 'Attività' */}
      <Activity login={login} />

      {/* Sezione 'Esperienze' */}
      <Experiences id={profile._id} login={login} />

      {/* Sezione 'Competenze' */}
      <Skills login={login} />
    </> 
  );
};

export default Profile;
