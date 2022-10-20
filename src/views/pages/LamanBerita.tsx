import axios from "axios"
import { useEffect, useState } from "react"




const LamanBerita = ()=>{
    const [artikel, setArtikel] = useState([])
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=2b14f09b75f84bff9edd34606fc90694')
            .then(e=>setArtikel(e.data.articles))
            .catch(e=>console.log(e))
    }, [])
    return(
        <div>
            {/* <p>{artikel}</p> */}
        </div>
    )
}

export default LamanBerita