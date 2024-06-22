import { Form, Modal } from 'react-bootstrap';
import { useState } from 'react';

function AddExperience({ id, fetchExperiences }) {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [FormDataExperience, setFormDataExperience] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: '',
  });

  const Token = process.env.TOKEN;
  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setFormDataExperience({
      role: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
      area: '',
    });
    setErrors({});
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormDataExperience({
      ...FormDataExperience,
      [name]: value
    });

    // Rimuovi l'errore non appena l'utente inizia a scrivere
    if (value.trim() !== '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!FormDataExperience.role.trim()) newErrors.role = "Il ruolo è richiesto.";
    if (!FormDataExperience.company.trim()) newErrors.company = "L'azienda è richiesta.";
    if (!FormDataExperience.startDate.trim()) newErrors.startDate = "La data di inizio è richiesta.";
    if (!FormDataExperience.description.trim()) newErrors.description = "La descrizione è richiesta.";
    if (!FormDataExperience.area.trim()) newErrors.area = "L'area è richiesta.";
    return newErrors;
  };

  const sendExperience = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormDataExperience),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setFormDataExperience({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: '',
      });
      handleClose();
      fetchExperiences();
    })
    .catch((error) => console.error(error));
  };

  return (
    <>
      <button 
        variant='primary'
        className='add__experiences p-0'
        onClick={handleShow}
      >
        <i className='fa-solid fa-plus'></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci nuova esperienza</Modal.Title>
        </Modal.Header>
        <p className='mx-2 mt-2'>I campi contrassegnati con * sono obbligatori.</p>
        <Modal.Body className='p-5'>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>*Azienda</Form.Label>
              <Form.Control
                name='company'
                type='text'
                placeholder='Inserisci azienda...'
                onChange={handleExperienceChange}
                value={FormDataExperience.company}
                required
              />
              {errors.company && <span className="text-danger">{errors.company}</span>}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>*Ruolo</Form.Label>
              <Form.Control
                name='role'
                type='text'
                placeholder='Inserisci ruolo...'
                onChange={handleExperienceChange}
                value={FormDataExperience.role}
                required
              />
              {errors.role && <span className="text-danger">{errors.role}</span>}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>*Data inizio</Form.Label>
              <Form.Control
                name='startDate'
                type='date'
                placeholder='Data inizio'
                onChange={handleExperienceChange}
                value={FormDataExperience.startDate}
                required
              />
              {errors.startDate && <span className="text-danger">{errors.startDate}</span>}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Data fine</Form.Label>
              <Form.Control
                name='endDate'
                type='date'
                placeholder='Data fine'
                onChange={handleExperienceChange}
                value={FormDataExperience.endDate}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>*Descrizione</Form.Label>
              <Form.Control
                name='description'
                type='text'
                placeholder='Descrivi la tua esperienza...'
                onChange={handleExperienceChange}
                value={FormDataExperience.description}
                required
              />
              {errors.description && <span className="text-danger">{errors.description}</span>}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>*Area</Form.Label>
              <Form.Control
                name='area'
                type='text'
                placeholder='Inserisci zona...'
                onChange={handleExperienceChange}
                value={FormDataExperience.area}
                required
              />
              {errors.area && <span className="text-danger">{errors.area}</span>}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button 
            variant='secondary'
            className='btn__altro'
            onClick={handleClose}>
            Chiudi
          </button>
          <button 
            variant='outline-primary'
            className='add__btn'
            onClick={sendExperience}>
            Aggiungi Esperienza
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperience;

