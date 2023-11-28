import React,{ useState } from 'react'
import axios from 'axios'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify';
import { TailSpin } from  'react-loader-spinner'
import '../styles/lightbox.css'
import 'react-toastify/dist/ReactToastify.css';



export default function LightBox(props) {

    const { tag,setTag,setPatterns, setAnswers, patterns, answers,setIsVisibleLightbox, isVisibleLightbox, elementId,isChange, setIsChange} = props
    const [isLoading, setIsLoading] = useState(false)
    
    const updateData = async (e)=>{

        e.preventDefault()

        try{
            setIsLoading(true)
            const response = await axios.put(`http://127.0.0.1:8000/update-data/${elementId}/`,{
                tag,
                patrones: patterns,
                respuestas: answers
            })
            const {data , status} = response

            if(status === 201 ){
                setIsLoading(false)
                setIsVisibleLightbox(false)
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

        }catch(e){
            console.log(e);
        }
    }
   
    
  return (
    
    <>
    <ToastContainer />
        <section className={isVisibleLightbox ? 'lightbox-container reveal': 'lightbox-container'}>
        
            <div className='bg-institucional-purple p-5 md:p-16 rounded-lg relative'>
                <button onClick={()=> setIsVisibleLightbox(!isVisibleLightbox)} className='absolute -right-5 -top-5 text-white text-3xl'><FontAwesomeIcon icon={faXmarkCircle} /></button>
                <form  className="flex flex-col">
                    <h1 className='font-Montserrat text-md text-white pb-5 leading-6 font-bold text-center'>Actualiza la entrada</h1>
                    <input type="text" onChange={(e)=> setTag(e.target.value)} value={tag} placeholder="Nombre del Tag"  className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" />
                    <textarea name=""  onChange={(e)=> setPatterns(e.target.value)} value={patterns} placeholder="Patrones"  className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" id="" cols="30" rows="4"></textarea>
                    <textarea name="" onChange={(e)=> setAnswers(e.target.value)}  value={answers} placeholder="Respuestas"  className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" id="" cols="30" rows="4"></textarea>
                    <button onClick={(e)=> updateData(e)} type="submit" className="bg-gradient-to-r from-yellow-forms to-standar-yellow text-forms-dark font-bold py-5 text-center px-4 rounded-md mt-4 hover:bg-yellow-forms hover:to-standar-yellow transition ease-in-out duration-150">
                        {
                            isLoading ? (<TailSpin wrapperClass="align-center" height="30" width="30" color="#ffffff"  ariaLabel="tail-spin-loading" radius="1" visible={isLoading}/>) : (<p>Actualiza la respuesta</p>)
                        }
                    </button>
                </form>
            </div>
        </section>
   </>
  )
}
