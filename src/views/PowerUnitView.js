import { useEffect, useState } from "react";
import CreateGpuModal from "../components/GPU/createGpu";
import ReadGpu from "../components/GPU/readGpu";
import UpdateGpuModal from "../components/GPU/updateGpu";
import CreatePowerUnitModal from "../components/PowerUnit/createPowerUnit";
import ReadPowerUnit from "../components/PowerUnit/readPowerUnit";
import UpdatePowerUnitModal from "../components/PowerUnit/updatePowerUnit";
import { gpuService } from "../service/gpuService";
import { powerUnitService } from "../service/powerUnitService";


export const PowerUnitView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false, selectedPowerUnitId: 0 });
    const [showCreateModal, setShowCreateModal] = useState(false);
    useEffect(() => {
        powerUnitService.getPowerUnit().then((data) => setApiData(data));
    }, [])

    console.log(showUpdateModal)
    return (<>
        <ReadPowerUnit apiData={apiData}
            setApiData={setApiData}
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal} />
        <CreatePowerUnitModal show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
        <UpdatePowerUnitModal show={showUpdateModal.show}
            setShow={setShowUpdateModal}
            powerUnitId={showUpdateModal.selectedPowerUnitId}
            apiData={apiData} setApiData={setApiData} />
    </>
    )
}