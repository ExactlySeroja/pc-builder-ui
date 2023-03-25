import { useEffect, useState } from "react";
import CreateDriveModal from "../components/Drive/createDrive";
import ReadDrive from "../components/Drive/readDrive";
import UpdateDriveModal from "../components/Drive/updateDrive";
import { driveService } from "../service/driveService";


export const DriveView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false, selectedDriveId: 0 });
    const [showCreateModal, setShowCreateModal] = useState(false);
    useEffect(() => {
        driveService.getDrive().then((data) => setApiData(data));
    }, [])

    console.log(showUpdateModal)
    return (<>
        <ReadDrive apiData={apiData}
            setApiData={setApiData}
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal} />
        <CreateDriveModal show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
        <UpdateDriveModal show={showUpdateModal.show}
            setShow={setShowUpdateModal}
            driveId={showUpdateModal.selectedDriveId}
            apiData={apiData} setApiData={setApiData} />
    </>
    )
}