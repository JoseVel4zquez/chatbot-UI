import React,{useState, useEffect} from 'react'
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'




export default function DataTable() {
    
     const [dataContent, setDataContent] = useState([])
    let content = []

    const getData = async () =>{
        const data = await axios.get("http://127.0.0.1:8000/get-data")

        data.data.map((item)=>{          
            content.push(item)
        })
        setDataContent(content)
        
    }
    useEffect(() => {
        getData()
    }, [])
    
   


  return (
    <section>
        <div>
           
            <table className="rounded-lg w-full">
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
                            <td>{item.content[0].tag}</td>
                            <td>{item.content[0].patrones.join(' , ')}</td>
                            <td>{item.content[0].respuestas.join(' , ')}</td>
                        </tr>
                      ))
                    }
                    
                </tbody>
            </table>
        </div>
    </section>
  )
}
