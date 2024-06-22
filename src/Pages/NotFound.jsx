import '../style/NotFound.css'; // Importa il file CSS per la pagina NotFound
import React from 'react' // Importa la libreria React
import { Container } from 'react-bootstrap' // Importa il componente Container da react-bootstrap
import { Link } from 'react-router-dom' // Importa il componente Link da react-router-dom

// Definisce il componente NotFound come esportazione predefinita
export default function NotFound() {
  return (
    // Utilizza il componente Container di react-bootstrap con una classe CSS 'content'
    <Container className='content'>
      {/* Intestazione principale con il testo '4🤯4' e la classe CSS 'text-dark' */}
      <h1 className='text-dark'>4🤯4</h1>
      {/* Intestazione secondaria con il testo 'Opps! Page not found' e la classe CSS 'text-dark' */}
      <h4 className='text-dark'>Opps! Page not found</h4>
      {/* Paragrafo con un messaggio di scuse e la classe CSS 'text-dark' */}
      <p className='text-dark'>Siamo spiacenti, la pagina che stai cercando non esiste.</p>
      {/* Link che porta alla home page con la classe CSS 'btn_back' */}
      <Link to='/' className='btn_back'>Vai a Home</Link>
    </Container>
  )
}
