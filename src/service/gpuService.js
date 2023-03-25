import { $host } from "./index"

const getGpu = async () => {
    const { data } = await $host.get("components/gpu")
    return data
}

const getGpuById = async (gpuId) =>{
    const{data} = await $host.get(`components/gpu/${gpuId}`)
    return data
}

const createGpu = async (name, price) => {
    try {
        const { data } = await $host.post("components/gpu", {
            name,
            price,
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

const updateGpu = async (gpuId, name, price) => {
    const { data } = await $host.put(`components/gpu/${gpuId}`, {
        name,
        price,
    })
    return data
}

const deleteGpu = async (gpuId) => {
    const { data } = await $host.delete(`components/gpu/${gpuId}`)
    return data
}

export const gpuService = {
    getGpu,
    getGpuById,
    createGpu,
    updateGpu,
    deleteGpu
};
