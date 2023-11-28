import React,{useState} from 'react'
import { TailSpin } from  'react-loader-spinner'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

export default function Railad(props) {

    const {isChange, setIsChange}= props

    const [succesMessage, setSuccesMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false)
    const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [tag, setTag] = useState("")
    const [patterns, setPatterns] = useState("")
    const [answers, setAnswers] = useState("")



    async function sendData(e){
    e.preventDefault()
    try{
    
        setIsLoading(true)
        const sendData = await axios.post('http://127.0.0.1:8000/create-answer/',{
            tag,
            patrones: patterns,
            respuestas: answers
        });
        
        const {data , status} = sendData;
        
        if(status === 201){
            setSuccesMessage(data)
            setIsSuccessMessageVisible(true)
            setIsLoading(false)
            setIsChange(!isChange)
            
        }
    }
    catch(e){
        console.log(e);
        setErrorMessage(e.response.data)
        setIsErrorMessageVisible(true)
        setIsLoading(false)
        
    }
    }
  return (
    <article className='w-full md:w-auto fixed  md:right-2 bottom-0'>
        <div className="flex flex-col items-center justify-center">
                <div className="w-full flex flex-col md:max-w-xl bg-institucional-purple rounded-tl-lg p-5 rounded-tr-lg shadow-md relative">
                    
                     <div className='flex justify-between'>
                        <h2 className="text-lg font-bold text-gray-200 mb-4 md:mr-5">Registra una nueva pregunta</h2>
                        <button className={isActive ? 'close-btn active':'close-btn'} onClick={()=>setIsActive(!isActive)}><FontAwesomeIcon icon={faChevronUp} /></button>
                     </div>
                    <div className={ isActive ? 'form-summit active':'form-summit'}>
                        <form onSubmit={sendData} className="flex flex-col pt-5">
                            <input type="text" onChange={e=> setTag(e.target.value)} placeholder="Nombre del Tag" className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" />
                            <textarea name=""  onChange={e=> setPatterns(e.target.value)} placeholder="Patrones" className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" id="" cols="30" rows="4"></textarea>
                            <textarea name=""  onChange={e=> setAnswers(e.target.value)} placeholder="Respuestas" className="bg-white text-gray-700 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-yellow-forms transition ease-in-out duration-150" id="" cols="30" rows="4"></textarea>
                            <button type="submit" className="bg-gradient-to-r from-yellow-forms to-standar-yellow text-forms-dark font-bold py-5 text-center px-4 rounded-md mt-4 hover:bg-yellow-forms hover:to-standar-yellow transition ease-in-out duration-150">{ isLoading ? (<TailSpin wrapperClass="align-center" height="30" width="30" color="#ffffff"  ariaLabel="tail-spin-loading" radius="1" visible={isLoading}/>) : (<p>Registra respuesta</p>)} </button>
                            { isSuccessMessageVisible ? (<div className='p-5 mt-5 bg-green-400 rounded-lg text-center border border-green-700'>
                                <p className='text-white leading-7'>{succesMessage}</p>
                            </div>): (<div></div>)}
                            { isErrorMessageVisible ? (<div className='p-5 mt-5 bg-red-400 rounded-lg text-center border border-red-700'>
                                <p className='text-white leading-7'>{errorMessage}</p>
                            </div>
                            ): (<div></div>)}

                            
                        </form>
                    </div>
                </div>
            </div>
    </article>
  )
}
