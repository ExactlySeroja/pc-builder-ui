import { useEffect, useState } from "react";
import CreateRamModal from "../components/RAM/createRam";
import ReadRam from "../components/RAM/readRam";
import UpdateRamModal from "../components/RAM/updateRam";
import { ramService } from "../service/ramService";


export const RamView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false, selectedRamId: 0 });
    const [showCreateModal, setShowCreateModal] = useState(false);
    useEffect(() => {
        ramService.getRam().then((data) => setApiData(data));
    }, [])

    return (<>
        <ReadRam apiData={apiData}
            setApiData={setApiData}
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal} />
        <CreateRamModal show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
        <UpdateRamModal show={showUpdateModal.show}
            setShow={setShowUpdateModal}
            ramId={showUpdateModal.selectedRamId}
            apiData={apiData} setApiData={setApiData} />
    </>
    )
}