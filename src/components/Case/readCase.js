import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { caseService } from '../../service/caseService';

export default function ReadCase({ apiData, setApiData, showUpdateModal, setShowUpdateModal, showCreateModal, setShowCreateModal }) {

    const handleDelete = (pcCaseId) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            caseService.deleteCase(pcCaseId).then(() => {
                setApiData(apiData.filter((item) => item.id !== pcCaseId));
            })
        }
    }

    const handleUpdateClick = (id) => {
        setShowUpdateModal({ show: true, selectedPcCaseId: id })
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
