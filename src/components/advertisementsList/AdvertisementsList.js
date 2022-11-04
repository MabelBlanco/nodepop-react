import { getAdvertisements } from "./advertisementsListModel.js"
import { useEffect, useState } from 'react'
import { drawAdvertisement } from "./advertisementsListView.js"

import "./advertisementList.css"


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
                        drawAdvertisement (advertisement)
                    )})}
                </ul>) :
                (<button>No hay anuncios... ¿Quieres crear uno?</button>)
            }
        </div>
        </>
    )
}