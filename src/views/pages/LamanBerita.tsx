import axios from "axios"
import { useEffect, useState } from "react"

interface BODY_BERITA{
    author:string
    title:string
    description:string
    url:string
    urlToImage:string
    publishedAt:string
    content:string
}

const ToLink = (prop:string)=>{
    window.location.href = prop
}

const LamanBerita = ()=>{
    const [artikel, setArtikel] = useState([])
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=2b14f09b75f84bff9edd34606fc90694')
            .then(e=>setArtikel(e.data.articles))
            .catch(e=>console.log(e))
    }, [])
    return(
        <div>
        {
            artikel.map((data:BODY_BERITA,index:number)=>{
                return(
                    <div className="flex justify-center hover:bg-slate-100" key={index} onClick={()=>ToLink(data.url)}>
                        <div className="flex justify-between w-[800px] gap-[50px] my-[20px]">
                        <p
                            className={index%2==1 ? `font-bold text-lg text-slate-700` : 'font-bold text-lg text-slate-600'}
                        >{index+1}</p>
                            <img src={data.urlToImage} alt="" className='w-[350px]' />
                            <div className='flex flex-col'>
                                <p className="text-justify text-lg font-bold">{data.title}</p>
                                <p className="text-sm text-slate-400">By {data.author}</p>
                                <p className="text-sm text-slate-700">Published At {new Date(data.publishedAt).toLocaleDateString('id-ID')}</p>
                                <p
                                    className="text-sm"
                                    style={{
                                        marginTop:'50px',
                                        overflow:'hidden',
                                        display:'-webkit-box',
                                        WebkitLineClamp:3,
                                        WebkitBoxOrient:'vertical'
                                    }}
                                >{data.content}</p>
                            </div>
                        </div>
                    </div>
                )
            })       
        }
        </div>
    )
}

export default LamanBerita