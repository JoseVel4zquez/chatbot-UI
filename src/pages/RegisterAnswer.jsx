

export default function RegisterAnswer() {
  return (
    <div className=''>
        <div className=" p-20 text-center bg-blue-500 rounded-br-full">
            <div className="container">
                <h1 className='font-semibold text-4xl font-lato  text-white leading-5 pb-20'>RegisterAnswer</h1>
                <p className="text-white font-nunito text-lg leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, corrupti dolorum, totam, nemo facere a repudiandae repellendus quae deserunt ut voluptatem voluptatibus. Culpa praesentium laudantium quaerat earum, neque nihil doloremque!</p>
            </div>
        </div>
        <div className="container flex  justify-around itme mt-5">
            <div>
                <table>
                    <thead>
                        <th className="pt-5 px-7 border border-black; pb-5">tags</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Patrones</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Respuestas</th>
                        <th className="pt-5 px-7 border border-black; pb-5">Actions</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">Eventos</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">Test, elementos, vacaciones</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">hola, como te va?, test 1</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400"> delete, edit</td>
                        </tr>
                        <tr>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">Eventos</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">Test, elementos, vacaciones</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">hola, como te va?, test 1</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400"> delete, edit</td>
                        </tr>
                        <tr>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">Eventos</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">Test, elementos, vacaciones</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">hola, como te va?, test 1</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400"> delete, edit</td>
                        </tr>
                        <tr>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">Eventos</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">Test, elementos, vacaciones</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400">hola, como te va?, test 1</td>
                            <td className="pt-5 px-7 font-bold text-lg bg-slate-400"> delete, edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-200 mb-4">Registra una nueva respuesta</h2>
                    <form action="" className="flex flex-col">
                        <input type="text" placeholder="Nombre del Tag" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />
                        <textarea name="" placeholder="Patrones" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="" cols="30" rows="10"></textarea>
                        <textarea name="" placeholder="Respuestas" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="" cols="30" rows="10"></textarea>
                        <button type="button" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Registra respuesta</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
