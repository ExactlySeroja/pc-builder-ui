import { builderService } from "../service/builderService";
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';



const BuildPc = ({ show, setShow, apiData, setApiData }) =>{
    
    const [budget, setBudget] = useState('');
    const [ramAmount, setRamAmount] = useState('');
    const [drivesAmount, setDrivesAmount] = useState('');

    
    const handleSubmit = () => {

        builderService.buildPc(budget, ramAmount, drivesAmount).then((data) => {
          if (data) {
            setApiData((apiData) => [...apiData, data]);
          }
        })
    }

    return(
        <>
        <Container className="mt-5 px-4">
                <Row className="g-1">
                <Col  md={{ span: 6, offset: 3 }} className="rounded p-3 text-white shadow mb-3">
                    <Form>
            <Form.Group className="mb-3" controlId="budget">
              <Form.Label>Budget</Form.Label>
              <Form.Control type="number" name="budget" 
              placeholder='Budget' 
              value={budget} 
              onChange={(e) => setBudget(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ramAmount">
              <Form.Label>Ram Amount</Form.Label>
              <Form.Control type="number" name="ramAmount"
                value={ramAmount}
                placeholder='Ram Amount'
                onChange={(e) => setRamAmount(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="drivesAmount">
              <Form.Label>Drives Amount</Form.Label>
              <Form.Control type="number" name="drivesAmount"
                value={drivesAmount}
                placeholder='Drives Amount'
                onChange={(e) => setDrivesAmount(e.target.value)} />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" className="btn-success" onClick={handleSubmit}>
            Submit
          </Button>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default BuildPc