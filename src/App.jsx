import './App.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
	const [message, setMessage] = useState(null)
	const [value, setValue] = useState(null)
	const [previewsChats, setPreviewsChats] = useState(['test'])
	const [currentTitle, setCurrentTitle] = useState(null)

	const createNewChat = () => {
		setMessage(null)
		setValue('')
		setCurrentTitle(null)
	}

	const handleClick = uniqueTitle => {
		setCurrentTitle(uniqueTitle)
		setMessage(null)
		setValue('')
	}

	const getMessage = async () => {
		try {
			const testAxios = await axios.post('http://127.0.0.1:8000/completions', { message: value })
			const { data } = testAxios
			setMessage(data.error.message)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (!currentTitle && value && message) {
			setCurrentTitle(value)
		}
		if (currentTitle && value && message) {
			setPreviewsChats(prevChats => [
				...prevChats,
				{
					title: currentTitle,
					role: 'user',
					content: value,
				},
				{
					title: currentTitle,
					role: 'assitant',
					content: message,
				},
			])
		}
	}, [message, currentTitle])

	const currentChat = previewsChats.filter(previewsChats => previewsChats.title === currentTitle)
	const uniqueTitles = Array.from(new Set(previewsChats.map(previewsChat => previewsChat.title)))

	return (
		<div className='app flex bg-app-gray'>
			<section className='side-bar bg-side-bar-bg h-screen w-56 flex flex-col justify-between'>
				<button className='border text-light-gray border-light-gray bg-transparent rounded-md p-2 m-2 text-withe;' onClick={createNewChat}>
					+ New Chat
				</button>
				<ul className='History p-2 m-2 h-full text-feed-white'>
					{uniqueTitles?.map((uniqueTitle, index) => (
						<li className='list-none py-4 px-0 cursor-pointer' key={index} onClick={() => handleClick(uniqueTitle)}>
							{uniqueTitle}
						</li>
					))}
				</ul>
				<nav className='border-t border-t-light-gray p-2 m-2'>
					<p className='text-light-gray '>Made by Luis</p>
				</nav>
			</section>
			<section className='main h-screen w-full flex flex-col justify-between items-center text-center'>
				<h1>{currentTitle ? currentTitle : 'chatbot'}</h1>
				<ul className='feed overflow-x-hidden overflow-y-scroll w-full p-0'>
					{currentChat?.map((chatMessage, index) => (
						<li className='flex w-full bg-feed-gray p-5 my-5 mx-0' key={index}>
							<p className='role min-w-[100px] text-feed-white'>{chatMessage.role}</p>
							<p className='text-sm text-left text-feed-white'>{chatMessage.content}</p>
						</li>
					))}
				</ul>
				<div className='bottom-section w-full flex flex-col justify-center items-center'>
					<div className='input-container relative w-full max-w-[650px]'>
						<input className='w-full border-none text-lg py-3 px-4 rounded-md  shadow-md shadow-side-bar-bg' type='text' onChange={e => setValue(e.target.value)} />
						<div id='submit' className='absolute bottom-4 right-0 cursor-pointer' onClick={getMessage}>
							➢
						</div>
					</div>
					<p className='info text-light-gray text-sm p-2'>chat version 1.0</p>
				</div>
			</section>
		</div>
	)
}

export default App
