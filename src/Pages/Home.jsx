import React from 'react'; // Importa la libreria React
import { Col, Container, Row } from 'react-bootstrap'; // Importa i componenti necessari da react-bootstrap

import Profile from './Profile'; // Importa il componente Profile
import AsideDx from '../Components/AsideUsers/AsideDx'; // Importa il componente AsideDx

// Definisce il componente Home come esportazione predefinita
export default function Home() {
  // Ottiene la chiave API dalle variabili d'ambiente
  const apiKey = process.env.TOKEN;

  // Stampa la chiave API nella console (utile per il debugging)
  console.log(apiKey);

  return (
    // Frammento React utilizzato per raggruppare gli elementi senza aggiungere nodi extra al DOM
    <>
      {/* Contenitore principale da react-bootstrap */}
      <Container>
        {/* Componente Row di react-bootstrap per organizzare il layout */}
        <Row>
          {/* Componente Colonna, 8 su 12 colonne per il componente Profile */}
          <Col md={8}>
            <Profile />
          </Col>

          {/* Componente Colonna, 4 su 12 colonne per il componente AsideDx */}
          <Col md={4}>
            <AsideDx />
          </Col>
        </Row>
      </Container>
    </>
  );
}
