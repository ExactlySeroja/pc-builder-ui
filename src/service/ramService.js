import { $host } from "./index"

const getRam = async () => {
    const { data } = await $host.get("components/ram")
    return data
}

const getRamById = async (ramId) =>{
    const{data} = await $host.get(`components/ram/${ramId}`)
    return data
}

const createRam = async (name, price, type) => {
    try {
        const { data } = await $host.post("components/ram", {
            name,
            price,
            type
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

const updateRam = async (ramId, name, price, type) => {
    const { data } = await $host.put(`components/ram/${ramId}`, {
        name,
        price,
        type
    })
    return data
}

const deleteRam = async (ramId) => {
    const { data } = await $host.delete(`components/ram/${ramId}`)
    return data
}

export const ramService = {
    getRam,
    createRam,
    updateRam,
    deleteRam
};
