import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { assembledService } from '../service/assembledService';



const UpdateAssembledModal = ({ assembledId, show, setShow, apiData, setApiData }) => {
  const [pcCaseId, setPcCaseId] = useState('');
  const [cpuId, setCpuId] = useState('');
  const [gpuId, setGpuId] = useState('');
  const [motherboardId, setMotherboardId] = useState('');
  const [powerUnitId, setPowerUnitId] = useState('');
  const [ramId, setRamId] = useState('');
  const [driveId, setDriveId] = useState('');
  const [ramAmount, setRamAmount] = useState('');
  const [drivesAmount, setDrivesAmount] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    assembledService.updateAssembled(assembledId, pcCaseId, cpuId, gpuId, motherboardId, powerUnitId, ramId, driveId, ramAmount, drivesAmount).then(() => {
      setApiData(apiData.map((item) =>
        item.id === assembledId
          ? { ...item, pcCaseId, cpuId, gpuId, motherboardId, powerUnitId, ramId, driveId, ramAmount, drivesAmount }
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
            Update Assembled
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form>

            <Form.Group className="mb-3" controlId="pcCaseId">
              <Form.Label>caseId</Form.Label>
              <Form.Control type="number" name="caseId"
                value={pcCaseId}
                placeholder='caseId'
                onChange={(e) => setPcCaseId(Number(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cpuId">
              <Form.Label>cpuId</Form.Label>
              <Form.Control type="number" name="cpuId"
                value={cpuId}
                placeholder='cpuId'
                onChange={(e) => setCpuId(Number(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gpuId">
              <Form.Label>gpuId</Form.Label>
              <Form.Control type="number" name="gpuId"
                value={gpuId}
                placeholder='gpuId'
                onChange={(e) => setGpuId(Number(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="motherboardId">
              <Form.Label>motherboardId</Form.Label>
              <Form.Control type="number" name="motherboardId"
                value={motherboardId}
                placeholder='motherboardId'
                onChange={(e) => setMotherboardId(Number(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="powerUnitId">
              <Form.Label>powerUnitId</Form.Label>
              <Form.Control type="number" name="powerUnitId"
                value={powerUnitId}
                placeholder='powerUnitId'
                onChange={(e) => setPowerUnitId(Number(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ramId">
              <Form.Label>ramId</Form.Label>
              <Form.Control type="number" name="ramId"
                value={ramId}
                placeholder='ramId'
                onChange={(e) => setRamId(Number(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="driveId">
              <Form.Label>driveId</Form.Label>
              <Form.Control type="number" name="driveId"
                value={driveId}
                placeholder='driveId'
                onChange={(e) => setDriveId(Number(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ramAmount">
              <Form.Label>ramAmount</Form.Label>
              <Form.Control type="number" name="ramAmount"
                value={ramAmount}
                placeholder='ramAmount'
                onChange={(e) => setRamAmount(Number(e.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="drivesAmount">
              <Form.Label>drivesAmount</Form.Label>
              <Form.Control type="number" name="drivesAmount"
                value={drivesAmount}
                placeholder='drivesAmount'
                onChange={(e) => setDrivesAmount(Number(e.target.value))} />
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
export default UpdateAssembledModal