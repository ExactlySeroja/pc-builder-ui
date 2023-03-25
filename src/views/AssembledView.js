import { useEffect, useState } from "react";
import CrudAssembled from "../assembled/createAssembled";
import ReadAssembled from "../assembled/readAssembled";
import UpdateAssembledModal from "../assembled/updateAssembled";
import { assembledService } from "../service/assembledService";

export const AssembledView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false, selectedAssembledId: 0 });
    const [showCreateModal, setShowCreateModal] = useState(false);
    useEffect(() => {
        assembledService.getAssembled().then((data) => setApiData(data));
    }, [])

    console.log(showUpdateModal)
    return (<>
        <ReadAssembled apiData={apiData}
            setApiData={setApiData}
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal} />
         <CrudAssembled show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
        <UpdateAssembledModal show={showUpdateModal.show}
            setShow={setShowUpdateModal}
            assembledId={showUpdateModal.selectedAssembledId}
            apiData={apiData} setApiData={setApiData} />
    </>
    )
}