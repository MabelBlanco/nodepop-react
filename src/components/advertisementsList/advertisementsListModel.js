import { client } from "../../api/axiosClient.js";
import { endpoints } from "../../api/endpoints.js";



export async function getAdvertisements () {
    try {
        const data = await client.get(endpoints.advertisements)
        return data
        
    } catch (error) {
        console.log (error)
    }
}