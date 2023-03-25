import { $host } from "./index"


const buildPc = async (budget, ramAmount, drivesAmount) => {
    try {
        const { data } = await $host.post("assembled/build", {
            budget,
            ramAmount,
            drivesAmount
        })
        return data
    } catch (err) {
        alert(err.message)
    }
}

export const builderService = {
    buildPc
};