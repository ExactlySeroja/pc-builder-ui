import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { gpuService } from '../../service/gpuService';



const UpdateGpuModal = ({ gpuId, show, setShow, apiData, setApiData }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        gpuService.updateGpu(gpuId, name, price).then(() => {
            setApiData(apiData.map((item) =>
                item.id === gpuId
                    ? { ...item, name, price }
                    : item
            ));
            handleClose()
        })
    }
    return (
        <>
            <Modal
                show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Form
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
export default UpdateGpuModal