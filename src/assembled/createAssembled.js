import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { assembledService } from '../service/assembledService';
import { cpuService } from '../service/cpuService';
import { caseService } from '../service/caseService';
import { gpuService } from '../service/gpuService';
import { motherboardService} from '../service/motherboardService';
import { powerUnitService } from '../service/powerUnitService';
import { ramService } from '../service/ramService';
import { driveService } from '../service/driveService';
 

const CrudAssembled = ({ show, setShow, apiData, setApiData }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [ramAmount, setRamAmount] = useState('');
  const [drivesAmount, setDrivesAmount] = useState('');
  const [caseIdOptions, setCaseIdOptions] = useState([]);
  const [cpuIdOptions, setCpuIdOptionds] = useState([]);
  const [gpuIdOptions, setGpuIdOptions] = useState([]);
  const [motherboardIdOptions, setMotherboardIdOptions] = useState([]);
  const [powerUnitIdOptions, setPowerUnitIdOptions] = useState([]);
  const [ramIdOptions, setRamIdOptions] = useState([]);
  const [driveIdOptions, setDriveIdOptions] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTypeaheadChange = (name, selected) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [name]: Number(selected),
    }));
  };

  console.log(selectedOptions)

  useEffect(() => {
    caseService.getCase().then((data) => setCaseIdOptions(data.map((item) => item.id.toString())))
    cpuService.getCpu().then((data) => setCpuIdOptionds(data.map((item) => item.id.toString())))
    gpuService.getGpu().then((data) => setGpuIdOptions(data.map((item) => item.id.toString())))
    motherboardService.getMotherboard().then((data) => setMotherboardIdOptions(data.map((item) => item.id.toString())))
    powerUnitService.getPowerUnit().then((data) => setPowerUnitIdOptions(data.map((item) => item.id.toString())))
    ramService.getRam().then((data) => setRamIdOptions(data.map((item) => item.id.toString())))
    driveService.getDrive().then((data) => setDriveIdOptions(data.map((item) => item.id.toString())))
  }, [])

  const handleSubmit = () => {

    assembledService.createAssebmbled(selectedOptions.pcCaseId, selectedOptions.cpuId, selectedOptions.gpuId, selectedOptions.motherboardId,
      selectedOptions.powerUnitId, selectedOptions.ramId, selectedOptions.driveId, ramAmount, drivesAmount).then((data) => {
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
            Add Assembled
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form>


            <Form.Group>
              <Form.Label>Select Case ID</Form.Label>
              <Typeahead
                id="basic-typeahead-single"

                onChange={selected => handleTypeaheadChange('pcCaseId', selected[0])}
                options={caseIdOptions}
                placeholder="Choose a case..."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select CPU ID</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                onChange={selected => handleTypeaheadChange('cpuId', selected[0])}
                options={cpuIdOptions}
                placeholder="Choose a CPU..."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select GPU ID</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                onChange={selected => handleTypeaheadChange('gpuId', selected[0])}
                options={gpuIdOptions}
                placeholder="Choose a GPU..."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Motherboard ID</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                onChange={selected => handleTypeaheadChange('motherboardId', selected[0])}
                options={motherboardIdOptions}
                placeholder="Choose a Motherboard..."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Power Unit ID</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                onChange={selected => handleTypeaheadChange('powerUnitId', selected[0])}
                options={powerUnitIdOptions}
                placeholder="Choose a Power Unit..."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select RAM ID</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                onChange={selected => handleTypeaheadChange('ramId', selected[0])}
                options={ramIdOptions}
                placeholder="Choose a RAM..."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Drive ID</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                onChange={selected => handleTypeaheadChange('driveId', selected[0])}
                options={driveIdOptions}
                placeholder="Choose a Drive..."
              />
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

export default CrudAssembled