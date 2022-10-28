import { getAdvertisements } from "./advertisementsListModel.js"
import { useEffect, useState } from 'react'



export default function AdvertisementsList () {
    
    const [advertisements, setAdvertisements] = useState([])
    
    useEffect (() => {
        const execute = async () => {
            const advertisementsApi = await getAdvertisements()
            setAdvertisements (advertisementsApi)
        
        }
        execute()

    }, [])

    return (
        <>
        <h2>Anuncios</h2>
        <div>
            {advertisements.length ? 
                (<ul>
                    {advertisements.map(advertisement => {
                        return (
                        <li key={advertisement.id}>{advertisement.title}</li>
                    )})}
                </ul>) :
                (<button>No hay anuncios... ¿Quieres crear uno?</button>)
            }
        </div>
        </>
    )
}