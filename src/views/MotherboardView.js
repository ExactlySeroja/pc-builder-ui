import { useEffect, useState } from "react"
import CreateMotherboardsModal from "../components/Motherboard/createMotherboards";
import ReadMotherboards from "../components/Motherboard/readMotherboards";
import UpdateMotherboardsModal from "../components/Motherboard/updateMotherboards";
import { motherboardService } from "../service/motherboardService";

export const MotherboardView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false, selectedMotherBoardId: 0 });
    const [showCreateModal, setShowCreateModal] = useState(false);
    useEffect(() => {
        motherboardService.getMotherboard().then((data) => setApiData(data));
    }, [])


    return (<>
        <ReadMotherboards apiData={apiData}
            setApiData={setApiData}
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal} />
        <CreateMotherboardsModal show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
        <UpdateMotherboardsModal show={showUpdateModal.show}
            setShow={setShowUpdateModal}
            motherboardId={showUpdateModal.selectedMotherBoardId}
            apiData={apiData} setApiData={setApiData} />
    </>
    )
}