import { useEffect, useState } from "react";
import CreateGpuModal from "../components/GPU/createGpu";
import ReadGpu from "../components/GPU/readGpu";
import UpdateGpuModal from "../components/GPU/updateGpu";
import { gpuService } from "../service/gpuService";


export const GpuView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false, selectedGpuId: 0 });
    const [showCreateModal, setShowCreateModal] = useState(false);
    useEffect(() => {
        gpuService.getGpu().then((data) => setApiData(data));
    }, [])

    console.log(showUpdateModal)
    return (<>
        <ReadGpu apiData={apiData}
            setApiData={setApiData}
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal} />
        <CreateGpuModal show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
        <UpdateGpuModal show={showUpdateModal.show}
            setShow={setShowUpdateModal}
            gpuId={showUpdateModal.selectedGpuId}
            apiData={apiData} setApiData={setApiData} />
    </>
    )
}