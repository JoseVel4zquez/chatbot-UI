
import DataTable from '../components/DataTable'
import Railad from '../components/Railad'
import '../styles/registerAnswers.css'

export default function RegisterAnswer() {
 
  return (
    <div className=''>
        <div className="background-answers flex items-center justify-start">
            <div className="container px-5 ">
                <h1 className='font-bold relative answer-title text-4xl font-Montserrat  text-white leading-9 pb-5 max-w-md'>Crea una nueva pregunta</h1>
                <p className="text-white font-Montserrat text-lg leading-6 max-w-md pt-5">Esta seccion es para consultar las preguntas y respuestas creadas dentro del modelo, y tambien podemos crear nuevas preguntas y respuestas para el chatbot</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around itme mt-10">
            <DataTable />
            <Railad />
        </div>
    </div>
  )
}
