import { $host } from "./index"

const getDrive = async () => {
    const { data } = await $host.get("components/drives")
    return data
}

const getDriveById = async (driveId) =>{
    const{data} = await $host.get(`components/drives/${driveId}`)
    return data
}

const createDrive = async (name, price) => {
    try {
        const { data } = await $host.post("components/drives", {
            name,
            price,
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

const updateDrive = async (driveId, name, price) => {
    const { data } = await $host.put(`components/drives/${driveId}`, {
        name,
        price,
    })
    return data
}

const deleteDrive = async (driveId) => {
    const { data } = await $host.delete(`components/drives/${driveId}`)
    return data
}

export const driveService = {
    getDrive,
    getDriveById,
    createDrive,
    updateDrive,
    deleteDrive
};
