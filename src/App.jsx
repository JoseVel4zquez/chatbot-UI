import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as React from "react";
import ChatUi from './pages/ChatUl'
import RegisterAnswer from './pages/RegisterAnswer'
import "./index.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <ChatUi />,
	},
	{
		path: "/test",
		element: <RegisterAnswer />,
	},
])



  function App() {
	return(
	<>
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
	<div id="root"></div>
	</>
	)
  }

  export default App
  