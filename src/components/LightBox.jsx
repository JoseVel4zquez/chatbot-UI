import React from 'react'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/lightbox.css'
import axios from 'axios'

export default function LightBox(props) {

    const { tag,setTag,setPatterns, setAnswers, patterns, answers,setIsVisibleLightbox, isVisibleLightbox, elementId} = props
    
    const updateData = async (e)=>{
        e.preventDefault()
        console.log(tag, answers, patterns, elementId);
        try{

            const response = await axios.put(`http://127.0.0.1:8000/update-data/${elementId}/`,{
                tag,
                patrones: patterns,
                respuestas: answers
            })

            console.log(response)

        }catch(e){
            console.log(e);
        }
    }
   
    
  return (
    
    <section className={isVisibleLightbox ? 'lightbox-container reveal': 'lightbox-container'}>
       
        <div className='bg-institucional-purple p-5 md:p-16 rounded-lg relative'>
            <button onClick={()=> setIsVisibleLightbox(!isVisibleLightbox)} className='absolute -right-5 -top-5 text-white text-3xl'><FontAwesomeIcon icon={faXmarkCircle} /></button>
            <form  className="flex flex-col">
                <h1 className='font-Montserrat text-md text-white pb-5 leading-6 font-bold text-center'>Actualiza la entrada</h1>
                <input type="text" onChange={(e)=> setTag(e.target.value)} value={tag} placeholder="Nombre del Tag"  className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" />
                <textarea name=""  onChange={(e)=> setPatterns(e.target.value)} value={patterns} placeholder="Patrones"  className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" id="" cols="30" rows="4"></textarea>
                <textarea name="" onChange={(e)=> setAnswers(e.target.value)}  value={answers} placeholder="Respuestas"  className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" id="" cols="30" rows="4"></textarea>
                <button onClick={(e)=> updateData(e)} type="submit" className="bg-gradient-to-r from-yellow-forms to-standar-yellow text-forms-dark font-bold py-5 text-center px-4 rounded-md mt-4 hover:bg-yellow-forms hover:to-standar-yellow transition ease-in-out duration-150">Actualiza la respuesta</button>
            </form>
        </div>
    </section>
  )
}
