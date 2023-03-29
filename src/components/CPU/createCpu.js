import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { cpuService } from '../../service/cpuService';


const CreateCpuModal = ({ show, setShow, apiData, setApiData }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [socket, setSocket] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {

    cpuService.createCpu(name, price, socket).then((data) => {
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
            Add CPU
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
                min={1} 
                step={1}
                placeholder='Price'
                onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="socket">
              <Form.Label>Socket</Form.Label>
              <Form.Control type="text" name="socket"
                value={socket}
                placeholder='Socket'
                onChange={(e) => setSocket(e.target.value)} />
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

export default CreateCpuModal