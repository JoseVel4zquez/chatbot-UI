import React,{useState, useEffect} from 'react'
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { data } from 'autoprefixer'
import { element } from 'prop-types'



export default function DataTable() {
    
    const [dataContent, setDataContent] = useState([])
    let tags = []
    let patterns =[]
    let answers = []
    
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/get-data")
        .then(response => setDataContent(response.data))
        .catch(error => {
            console.error("Hubo un error al obtener los datos:", error);
            // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
        })
        
    }, [])

    // const {tag,patrones,respuestas} = dataContent
//   console.log('tags', dataContent[0].content);
    
    for (let index = 0; index < dataContent.length; index++) {
        const element = dataContent[index];
        console.log(element);
        const {tag,patrones,respuestas} = element.content[0]
        tags.push(tag)
        patterns.push(patrones[0])
    }
  

console.log(patterns);


  return (
    <section>
        <div>
           {
            // dataContent.map((items,index)=>(<p>{i}</p>))
           }
            <table className="rounded-lg w-full">
                <thead>
                    <th className="pt-5 px-7 border border-black; pb-5">tags</th>
                    <th className="pt-5 px-7 border border-black; pb-5">Patrones</th>
                    <th className="pt-5 px-7 border border-black; pb-5">Respuestas</th>
                    <th className="pt-5 px-7 border border-black; pb-5">Actions</th>
                </thead>
                <tbody>
                    
                    {
                        tags.map((item,index)=>(
                            <tr key={item}>
                                <td>
                                    {item}
                                </td>
                            </tr>
                        ))
                    }
                    
                   
                    
                </tbody>
                {
                        patterns.map((pattern,index) =>(
                            <div key={index}>
                                <p>{pattern}</p>
                            </div>
                        ))
                    }
            </table>
        </div>
    </section>
  )
}
