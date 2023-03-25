import { $host } from "./index"

const getMotherboard = async () => {
    const { data } = await $host.get("components/motherboards")
    return data
}

const getMotherboardById = async (motherboardId) =>{
    const{data} = await $host.get(`components/motherboards/${motherboardId}`)
    return data
}

const createMotherboard = async (name, price, socket, ramSlot) => {
    try {
        const { data } = await $host.post("components/motherboards", {
            name,
            price,
            socket,
            ramSlot
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

const updateMotherboard = async (motherboardId, name, price, socket, ramSlot) => {
    const { data } = await $host.put(`components/motherboards/${motherboardId}`, {
        name,
        price,
        socket,
        ramSlot
    })
    return data
}

const deleteMotherboard = async (motherboardId) => {
    const { data } = await $host.delete(`components/motherboards/${motherboardId}`)
    return data
}

export const motherboardService = {
    getMotherboard,
    getMotherboardById,
    createMotherboard,
    updateMotherboard,
    deleteMotherboard
};
