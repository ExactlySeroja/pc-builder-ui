import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { gpuService } from '../../service/gpuService';


const CreateGpuModal = ({ show, setShow, apiData, setApiData }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {

    gpuService.createGpu(name, price).then((data) => {
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
            Add GPU
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

export default CreateGpuModal