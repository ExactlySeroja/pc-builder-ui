import { $host } from "./index"

const getPowerUnit = async () => {
    const { data } = await $host.get("components/power-units")
    return data
}

const getPowerUnitById = async (powerUnitId) =>{
    const{data} = await $host.get(`components/power-units/${powerUnitId}`)
    return data
}

const createPowerUnit = async (name, price) => {
    try {
        const { data } = await $host.post("components/power-units", {
            name,
            price,
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

const updatePowerUnit = async (powerUnitId, name, price) => {
    const { data } = await $host.put(`components/power-units/${powerUnitId}`, {
        name,
        price,
    })
    return data
}

const deletePowerUnit = async (powerUnitId) => {
    const { data } = await $host.delete(`components/power-units/${powerUnitId}`)
    return data
}

export const powerUnitService = {
    getPowerUnit,
    getPowerUnitById,
    createPowerUnit,
    updatePowerUnit,
    deletePowerUnit
};
