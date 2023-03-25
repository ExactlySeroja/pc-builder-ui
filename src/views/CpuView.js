import { useEffect, useState } from "react"
import CreateCpuModal from "../components/CPU/createCpu";
import ReadCpu from "../components/CPU/readCpu";
import UpdateCpuModal from "../components/CPU/updateCpu";
import { cpuService } from "../service/cpuService";


export const CpuView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false, selectedCpuId: 0 });
    const [showCreateModal, setShowCreateModal] = useState(false);
    useEffect(() => {
        cpuService.getCpu().then((data) => setApiData(data));
    }, [])


    return (<>
        <ReadCpu apiData={apiData}
            setApiData={setApiData}
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal} />
        <CreateCpuModal show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
        <UpdateCpuModal show={showUpdateModal.show}
            setShow={setShowUpdateModal}
            cpuId={showUpdateModal.selectedCpuId}
            apiData={apiData} setApiData={setApiData} />
    </>
    )
}