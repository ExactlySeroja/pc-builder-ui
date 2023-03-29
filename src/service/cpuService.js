import { $host } from "./index"

const getCpu = async () => {
    const { data } = await $host.get("components/cpu")
    return data
}

const getCpuById = async (cpuId) =>{
    const{data} = await $host.get(`components/cpu/${cpuId}`)
    return data
}

const createCpu = async (name, price, socket) => {
    try {
        const { data } = await $host.post("components/cpu", {
            name,
            price,
            socket
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

const updateCpu = async (cpuId, name, price, socket) => {
    const { data } = await $host.put(`components/cpu/${cpuId}`, {
        cpuId,
        name,
        price,
        socket
    })
    return data
}

const deleteCpu = async (cpuId) => {
    const { data } = await $host.delete(`components/cpu/${cpuId}`)
    return data
}

export const cpuService = {
    getCpu,
    getCpuById,
    createCpu,
    updateCpu,
    deleteCpu
};
