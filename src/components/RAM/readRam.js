import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ramService } from '../../service/ramService';

export default function ReadRam({ apiData, setApiData, showUpdateModal, setShowUpdateModal, showCreateModal, setShowCreateModal }) {

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
                ramService.deleteRam(id).then(() => {
                    setApiData(apiData.filter((item) => item.id !== id));
                })
        }
    }

    const handleUpdateClick = (id) => {
        setShowUpdateModal({ show: true, selectedRamId: id })
    }

    const handleCreateClick = () => {
        setShowCreateModal(true)
    }


    return (
        <>
            <div className="d-flex justify-content-center mt-5 ">
                <Button className="btn-greenary ps-5 pe-5" onClick={() => handleCreateClick()}>Add</Button>
            </div>
            <Container className="mt-5 px-4">
                <Row className="g-3">
                    {apiData.map((data) => (
                        <Col md={4} key={data.id}>
                            <div className="rounded p-3 text-white shadow mb-3">
                                <h4>ID: {data.id}</h4>
                                <h4>Name: {data.name}</h4>
                                <h4>Price: {data.price}</h4>
                                <h4>Type: {data.type}</h4>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <Button className="btn-success" onClick={() => handleUpdateClick(data.id)}>
                                        Update
                                    </Button>
                                    <Button className="btn-danger" onClick={() => handleDelete(data.id)}>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}
