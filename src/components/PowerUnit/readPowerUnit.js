import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { powerUnitService } from '../../service/powerUnitService';

export default function ReadPowerUnit({ apiData, setApiData, showUpdateModal, setShowUpdateModal, showCreateModal, setShowCreateModal }) {

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
                powerUnitService.deletePowerUnit(id).then(() => {
                    setApiData(apiData.filter((item) => item.id !== id));
                })
        }
    }

    const handleUpdateClick = (id) => {
        setShowUpdateModal({ show: true, selectedPowerUnitId: id })
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
                                <h4>name: {data.name}</h4>
                                <h4>price: {data.price}</h4>                               
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
