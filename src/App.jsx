import './App.css'

import { useState, useEffect } from 'react'
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
		const option = {
			method: 'POST',
			body: JSON.stringify({
				message: value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}
		try {
			const response = await fetch('http://127.0.0.1:8000/completions', option)
			const data = await response.json()
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
		<div className='app'>
			<section className='side-bar'>
				<button onClick={createNewChat}>+ New Chat</button>
				<ul className='History'>
					{uniqueTitles?.map((uniqueTitle, index) => (
						<li key={index} onClick={() => handleClick(uniqueTitle)}>
							{uniqueTitle}
						</li>
					))}
				</ul>
				<nav>
					<p>Made by Luis</p>
				</nav>
			</section>
			<section className='main'>
				<h1>{currentTitle ? currentTitle : 'chatbot'}</h1>
				<ul className='feed'>
					{currentChat?.map((chatMessage, index) => (
						<li key={index}>
							<p className='role'>{chatMessage.role}</p>
							<p>{chatMessage.content}</p>
						</li>
					))}
				</ul>
				<div className='bottom-section'>
					<div className='input-container'>
						<input type='text' onChange={e => setValue(e.target.value)} />
						<div id='submit' onClick={getMessage}>
							➢
						</div>
					</div>
					<p className='info'>chat version 1.0</p>
				</div>
			</section>
		</div>
	)
}

export default App
