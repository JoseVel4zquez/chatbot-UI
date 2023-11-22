import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TailSpin } from  'react-loader-spinner'
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import  '../chat.css'

export default function RegisterAnswer() {
  const [tag, setTag] = useState('')
  const [patterns, setPatterns] = useState('')
  const [answers, setAnswers] = useState('')
  const [succesMessage, setSuccesMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false)
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false)
  
  const [isLoading, setIsLoading] = useState(false)
  async function sendData(e){
    e.preventDefault()
    try{
        setIsLoading(true)
        const sendData = await axios.post('http://127.0.0.1:8000/create-answer/',{
            tag,
            patrones: patterns,
            respuestas: answers
        });
        const {data , status, response} = sendData;
        
        if(status === 201){
            setSuccesMessage(data)
            setIsSuccessMessageVisible(true)
            setIsLoading(false)
            console.log(tag)
        }
         else{
            setErrorMessage(data.response.data)
            setIsErrorMessageVisible(true)
            setIsLoading(false)
        }
        console.log(data.response)
    }
    catch(e){
        console.log(e);
    }
  }
  return (
    <div className=''>
        <div className=" p-20 text-center bg-blue-500 rounded-br-full">
            <div className="container">
                <h1 className='font-semibold text-4xl font-lato  text-white leading-5 pb-20'>RegisterAnswer</h1>
                <p className="text-white font-nunito text-lg leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, corrupti dolorum, totam, nemo facere a repudiandae repellendus quae deserunt ut voluptatem voluptatibus. Culpa praesentium laudantium quaerat earum, neque nihil doloremque!</p>
            </div>
        </div>
        <div className="container flex flex-col md:flex-row justify-around itme mt-10">
            <div>
                <table className="rounded-lg w-full">
                    <thead>
                        <th className="pt-5 px-7 border border-black; pb-5">tags</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Patrones</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Respuestas</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Actions</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400 pb-5">Eventos</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400 pb-5">Test, elementos, vacaciones</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400 pb-5">hola, como te va?, test 1</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400 pb-5 flex items-center justify-around"> 
                            <button className='bg-red-500 hover:bg-red-400 rounded-md py-2 px-3 text-white transition-all mr-4' ><FontAwesomeIcon icon={faTrash} /> </button> <button className='bg-orange-400 hover:bg-orange-300 transition-all rounded-md py-2 px-3 text-white'><FontAwesomeIcon icon={faPenSquare} /></button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-200 mb-4">Registra una nueva respuesta</h2>
                    <form onSubmit={sendData} className="flex flex-col">
                        <input type="text" onChange={e=> setTag(e.target.value)} placeholder="Nombre del Tag" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />
                        <textarea name="" onChange={e=> setPatterns(e.target.value)} placeholder="Patrones" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="" cols="30" rows="10"></textarea>
                        <textarea name="" onChange={e=> setAnswers(e.target.value)} placeholder="Respuestas" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="" cols="30" rows="10"></textarea>
                        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 text-center px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">{ isLoading ? (<TailSpin wrapperClass="align-center" height="30" width="30" color="#ffffff"  ariaLabel="tail-spin-loading" radius="1" visible={isLoading}/>) : (<p>Registra respuesta</p>)} </button>
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
    </div>
  )
}
