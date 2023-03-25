import { $host } from "./index"

const getAssembled = async () => {
    const { data } = await $host.get("assembled")
    return data
}

const createAssebmbled = async (caseId, cpuId, gpuId, motherboardId, powerUnitId, ramId, driveId, ramAmount, drivesAmount) => {
    try {
        const { data } = await $host.post("/assembled", {
            caseId,
            cpuId, 
            gpuId,
            motherboardId, 
            powerUnitId, 
            ramId, 
            driveId, 
            ramAmount, 
            drivesAmount
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

const updateAssembled = async (id, caseId, cpuId, gpuId, motherboardId, powerUnitId, ramId, driveId, ramAmount, drivesAmount) => {
    const { data } = await $host.put(`/assembled/${id}`, {
            caseId,
            cpuId, 
            gpuId,
            motherboardId, 
            powerUnitId, 
            ramId, 
            driveId, 
            ramAmount, 
            drivesAmount
    })
    return data
}

const deleteAssembled = async (assembledId) => {
    const { data } = await $host.delete(`/assembled/${assembledId}`)
    return data
}

export const assembledService = {
    getAssembled,
    createAssebmbled,
    updateAssembled,
    deleteAssembled
};
