import React from 'react' // Importa la libreria React
import { Container, Row, Col } from 'react-bootstrap'; // Importa i componenti necessari da react-bootstrap
import UserProfile from '../Components/UserProfile/UserProfile'; // Importa il componente UserProfile
import AsideDx from '../Components/AsideUsers/AsideDx'; // Importa il componente AsideDx

// Definisce il componente OtherProfile
function OtherProfile() {
  return (
    // Utilizza il componente Container di react-bootstrap per il layout principale
    <Container>
      {/* Utilizza il componente Row di react-bootstrap per organizzare le colonne */}
      <Row>
        {/* Colonna di 8 su 12 per il componente UserProfile */}
        <Col md={8}>
          <UserProfile />
        </Col>
        {/* Colonna di 4 su 12 per il componente AsideDx */}
        <Col md={4}>
          <AsideDx />
        </Col>
      </Row>
    </Container>
  )
}

// Esporta il componente OtherProfile come esportazione predefinita
export default OtherProfile;
