import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { ramService } from '../../service/ramService';


const CreateRamModal = ({ show, setShow, apiData, setApiData }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {

    ramService.createRam(name, price, type).then((data) => {
      if (data) {
        setApiData((apiData) => [...apiData, data]);
        handleClose();
      }
    })

  }
  return (
    <>
      <Modal
        show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add RAM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price"
                value={price}
                placeholder='Price'
                onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" name="type"
                value={type}
                placeholder='Type'
                onChange={(e) => setType(e.target.value)} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" className="btn-success" onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateRamModal