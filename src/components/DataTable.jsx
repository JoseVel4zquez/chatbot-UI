import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Railad from '../components/Railad'
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LightBox from './LightBox'
import { ToastContainer, toast } from 'react-toastify';





export default function DataTable() {
    
    const [dataContent, setDataContent] = useState([])
    const [tag, setTag] = useState("")
    const [patterns, setPatterns] = useState("")
    const [answers, setAnswers] = useState("")
    const [isVisibleLightbox, setIsVisibleLightbox] = useState(false)
    const [elementId, setElementId] = useState("")
    const [isChange, setIsChange] = useState(false)
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
    const deleteItem = async (id) =>{
        let confirmation = confirm('Estas seguro de elimintar esta coleccion?')
        if(confirmation){
            const response = await axios.delete(`http://127.0.0.1:8000/delete-data/${id}/`)
            const {data} = response
            toast.success(data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setIsChange(!isChange)
        }
        

    }
    useEffect(() => {
        getData()
    }, [isChange])
    
   


  return (
    <section className='w-full'>
        <ToastContainer />
        <div className='mb-40 md:mb-20 overflow-x-scroll container'>
           
            <table className="rounded-lg w-full ">
                <thead>
                    <tr>
                        <th className="pt-5 px-7 border border-black; pb-5">tags</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Patrones</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Respuestas</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                      dataContent.map((item,index)=> (
                        <tr key={index}>
                            <td className='py-5 px-7 border-b border-institucional-purple'>{item.content[0].tag}</td>
                            <td className='py-5 px-7 border-b border-institucional-purple'>{item.content[0].patrones.join(', ')}</td>
                            <td className='py-5 px-7 border-b border-institucional-purple'>{item.content[0].respuestas.join(', ')}</td>
                            <td className='py-5 px-7 border-b border-institucional-purple'>
                                <div className='flex'>
                                    <button onClick={()=> deleteItem(item._id.$oid)} className='p-4 bg-red-500 mr-1 text-white rounded-md text-lg hover:text-forms-dark hover:bg-red-400 transition ease-in-out duration-150'><FontAwesomeIcon icon={faTrash}/></button>
                                    <button onClick={()=> getDataById(item._id.$oid)} className='p-4 bg-yellow-forms mr-1 text-forms-dark rounded-md text-lg hover:text-white hover:bg-yellow-600 transition ease-in-out duration-150'><FontAwesomeIcon icon={faPenSquare}/></button>
                                </div>
                            </td>
                            
                        </tr>
                      ))
                    }
                    
                </tbody>
            </table>
        </div>
        <Railad isChange={isChange} setIsChange={setIsChange}/>
        <LightBox isChange={isChange} setIsChange={setIsChange} elementId={elementId} tag={tag} setTag={setTag} setPatterns={setPatterns} setAnswers={setAnswers} patterns={patterns} isVisibleLightbox={isVisibleLightbox} setIsVisibleLightbox={setIsVisibleLightbox} answers={answers} />
    </section>
  )
}
