import { getAdvertisements } from "./listAdvertisementsModel.js"
import { useEffect, useState } from 'react'



export default function ListAdvertisements () {
    
    const [advertisements, setAdvertisements] = useState([])
    
    useEffect (() => {
        const execute = async () => {
            const advertisementsApi = await getAdvertisements()
            console.log (advertisementsApi)
            setAdvertisements (advertisementsApi)
        
        }
        execute()

    }, [])

    return (
        <>
        <h2>Anuncios</h2>
        <ul>
            {advertisements.map(advertisement => {
                return (
                <li key={advertisement.id}>{advertisement.title}</li>
            )})}
        </ul>
        </>
    )
}