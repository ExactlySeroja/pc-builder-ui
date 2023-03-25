import { $host } from "./index"

const getCase = async () => {
    const { data } = await $host.get("components/cases")
    return data
}

const getCaseById = async (caseId) =>{
    const{data} = await $host.get(`components/cases/${caseId}`)
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

const updateCase = async (caseId, name, price) => {
    const { data } = await $host.put(`components/cases/${caseId}`, {
        name,
        price,
    })
    return data
}

const deleteCase = async (caseId) => {
    const { data } = await $host.delete(`components/cases/${caseId}`)
    return data
}

export const caseService = {
    getCase,
    getCaseById,
    createCase,
    updateCase,
    deleteCase
};
