import { useEffect, useState } from "react";
import CreateCaseModal from "../components/Case/createCase";
import ReadCase from "../components/Case/readCase";
import UpdateCaseModal from "../components/Case/updateCase";
import { caseService } from "../service/caseService";


export const CaseView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false, selectedCaseId: 0 });
    const [showCreateModal, setShowCreateModal] = useState(false);
    useEffect(() => {
        caseService.getCase().then((data) => setApiData(data));
    }, [])

    console.log(showUpdateModal)
    return (<>
        <ReadCase apiData={apiData}
            setApiData={setApiData}
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal} />
        <CreateCaseModal show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
        <UpdateCaseModal show={showUpdateModal.show}
            setShow={setShowUpdateModal}
            caseId={showUpdateModal.selectedCaseId}
            apiData={apiData} setApiData={setApiData} />
    </>
    )
}