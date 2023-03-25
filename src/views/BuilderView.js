import { useEffect, useState } from "react";
import BuildPc from "../builder/builderForm";

export const BuilderView = () => {
    const [apiData, setApiData] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState({ show: false });
    const [showCreateModal, setShowCreateModal] = useState(false);

    console.log(showUpdateModal)
    return (
    <>
        <BuildPc show={showCreateModal}
            setShow={setShowCreateModal}
            apiData={apiData}
            setApiData={setApiData} />
    </>
    )
}