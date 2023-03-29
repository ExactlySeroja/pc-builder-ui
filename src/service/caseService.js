import { $host } from "./index"

const getCase = async () => {
    const { data } = await $host.get("components/cases")
    return data
}

const getCaseById = async (pcCaseId) =>{
    const{data} = await $host.get(`components/cases/${pcCaseId}`)
    return data
}

const createCase = async (name, price) => {
    try {
        const { data } = await $host.post("components/cases", {
            name,
            price,
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

const updateCase = async (pcCaseId, name, price) => {
    const { data } = await $host.put(`components/cases/${pcCaseId}`, {
        name,
        price,
    })
    return data
}

const deleteCase = async (pcCaseId) => {
    const { data } = await $host.delete(`components/cases/${pcCaseId}`)
    return data
}

export const caseService = {
    getCase,
    getCaseById,
    createCase,
    updateCase,
    deleteCase
};
