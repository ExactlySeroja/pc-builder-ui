import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { assembledService } from '../service/assembledService';

export default function ReadAssembled({ apiData, setApiData, showUpdateModal, setShowUpdateModal, showCreateModal, setShowCreateModal }) {

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            assembledService.deleteAssembled(id).then(() => {
                setApiData(apiData.filter((item) => item.assembledId !== id));
            })
        }
    }

    const handleUpdateClick = (id) => {
        console.log(apiData)
        setShowUpdateModal({ show: true, selectedAssembledId: id })
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
                <Row className="g-1">
                    {apiData.map((data) => (
                        <Col md={4} key={data.id}>
                            <div className="rounded p-3 text-white shadow mb-3">
                                <h4>Case ID: {data.pcCaseId}</h4>
                                <h4>CPU ID: {data.cpuId}</h4>
                                <h4>GPU ID: {data.gpuId}</h4>
                                <h4>Motherboard Id: {data.motherboardId}</h4>
                                <h4>powerUnitId: {data.powerUnitId}</h4>
                                <h4>ramId: {data.ramId}</h4>
                                <h4>driveId: {data.driveId}</h4>
                                <h4>ramAmount: {data.ramAmount}</h4>
                                <h4>drivesAmount: {data.drivesAmount}</h4>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <Button className="btn-success" onClick={() => handleUpdateClick(data.assembledId)}>
                                        Update
                                    </Button>
                                    <Button className="btn-danger" onClick={() => handleDelete(data.assembledId)}>
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
