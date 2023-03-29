import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { assembledService } from '../service/assembledService';

export default function ReadAssembled({ apiData, setApiData, showUpdateModal, setShowUpdateModal, showCreateModal, setShowCreateModal }) {
    const [totalPrices, setTotalPrices] = useState({});
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            assembledService.deleteAssembled(id).then(() => {
                setApiData(apiData.filter((item) => item.assembledId !== id));
            })
        }
    }

    const handleUpdateClick = (id) => {
        setShowUpdateModal({ show: true, selectedAssembledId: id })
    }

    const handleCreateClick = () => {
        setShowCreateModal(true)
    }

    useEffect(() => {
    apiData.map(async (item) => {
        const data = await assembledService.getTotalPriceById(item.assembledId);
        setTotalPrices((prevState) => ({ ...prevState, [item.assembledId]: data.price }));
    })
    }, [apiData])
    


    return (
        <>
            <div className="d-flex justify-content-center mt-5 ">
                <Button className="btn-greenary ps-5 pe-5" onClick={() => handleCreateClick()}>Add</Button>
            </div>
            <Container className="mt-5 px-4">
                <Row className="g-3">
                    {apiData.map((data) => (
                        <Col  md={4} key={data.assembledId}>

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
                                <h4>Price: {totalPrices[data.assembledId]}</h4>
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
