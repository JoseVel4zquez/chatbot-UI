import React,{useState, useEffect} from 'react'
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import LightBox from './LightBox'




export default function DataTable() {
    
    const [dataContent, setDataContent] = useState([])
    const [tag, setTag] = useState("")
    const [patterns, setPatterns] = useState("")
    const [answers, setAnswers] = useState("")
    const [isVisibleLightbox, setIsVisibleLightbox] = useState(false)
    const [elementId, setElementId] = useState("")
    let content = []

    const getData = async () =>{
        const data = await axios.get("http://127.0.0.1:8000/get-data")

        data.data.map((item)=>{          
            content.push(item)
        })
        setDataContent(content)
        
    }
    const getDataById = async (id) =>{
        
        const response = await axios.post(`http://127.0.0.1:8000/get-data/${id}/`)
        setTag(response.data.content[0].tag)
        setPatterns(response.data.content[0].patrones.join(', '))
        setAnswers(response.data.content[0].respuestas.join(', '))
        setIsVisibleLightbox(true)
        setElementId(id)

    }
    useEffect(() => {
        getData()
    }, [])
    
   


  return (
    <section className='w-full'>
        <div className='mb-40 md:mb-20 overflow-x-scroll container'>
           
            <table className="rounded-lg w-full ">
                <thead>
                    <th className="pt-5 px-7 border border-black; pb-5">tags</th>
                    <th className="pt-5 px-7 border border-black; pb-5">Patrones</th>
                    <th className="pt-5 px-7 border border-black; pb-5">Respuestas</th>
                    <th className="pt-5 px-7 border border-black; pb-5">Actions</th>
                </thead>
                <tbody>
                    
                    {
                      dataContent.map((item,index)=> (
                        <tr key={index}>
                            <td className='py-5 px-7 border-b border-institucional-purple'>{item.content[0].tag}</td>
                            <td className='py-5 px-7 border-b border-institucional-purple'>{item.content[0].patrones.join(', ')}</td>
                            <td className='py-5 px-7 border-b border-institucional-purple'>{item.content[0].respuestas.join(', ')}</td>
                            <td className='py-5 px-7 border-b border-institucional-purple flex'>
                                <button onClick={()=> alert("seguro de que desea elimintar esta entrada?")} className='p-4 bg-red-500 mr-1 text-white rounded-md text-lg hover:text-forms-dark hover:bg-red-400 transition ease-in-out duration-150'><FontAwesomeIcon icon={faTrash}/></button>
                                <button onClick={()=> getDataById(item._id.$oid)} className='p-4 bg-yellow-forms mr-1 text-forms-dark rounded-md text-lg hover:text-white hover:bg-yellow-600 transition ease-in-out duration-150'><FontAwesomeIcon icon={faPenSquare}/></button>
                            </td>
                            
                        </tr>
                      ))
                    }
                    
                </tbody>
            </table>
        </div>
        
        <LightBox elementId={elementId} tag={tag} setTag={setTag} setPatterns={setPatterns} setAnswers={setAnswers} patterns={patterns} isVisibleLightbox={isVisibleLightbox} setIsVisibleLightbox={setIsVisibleLightbox} answers={answers} />
    </section>
  )
}
