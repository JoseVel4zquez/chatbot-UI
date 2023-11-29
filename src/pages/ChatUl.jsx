import '../App.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
import '../chat.css'
import { Discuss } from  'react-loader-spinner'
import SideBar from '../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function ChatUi() {
	const [message, setMessage] = useState(null)
	const [value, setValue] = useState(null)
	const [previewsChats, setPreviewsChats] = useState([])
	const [currentTitle, setCurrentTitle] = useState(null)
	const [LoaderVisible, setLoaderVisible] = useState(false)

	
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

	const getMessage = async (e) => {
		e.preventDefault()
		
		try {
			setLoaderVisible(true)
			const sendMessage = await axios.post('http://127.0.0.1:8000/chat-bot/', { message: value })
			const { data } = sendMessage
			setMessage(data)
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
			return setLoaderVisible(false)
		}
	}, [message, currentTitle])

	
	
	const currentChat = previewsChats.filter(previewsChats => previewsChats.title === currentTitle)
	const uniqueTitles = Array.from(new Set(previewsChats.map(previewsChat => previewsChat.title)))

	return (
		<div className='flex bg-white'>
			<SideBar uniqueTitles={uniqueTitles} handleClick={handleClick} createNewChat={createNewChat}/>
			
			
			<section className='main h-screen w-full flex flex-col justify-between items-center text-center'>
				<h1 className='text-forms-dark font-bold text-2xl py-5'>{currentTitle ? currentTitle : 'chatbot'}</h1>
				<ul className='feed flex flex-col overflow-x-hidden overflow-y-scroll w-full p-0'>
					{currentChat?.map((chatMessage, index) => (
						
						<li id={chatMessage.role} className='flex py-5 border-institucional-purple  my-5 mx-0' key={index}>
							<p  className='role min-w-[100px] pl-5'>{chatMessage.role}</p>							
							<p  className='role min-w-[100px '>{chatMessage.content}</p>	
						</li>
						
						))}
						{LoaderVisible ? (<Discuss height="80" width="80" ariaLabel="comment-loading" wrapperClass="comment-wrapper ml-20" color="#fff" backgroundColor="#F4442E" />): (<li></li>)}
						
					
				</ul>
				<div className='bottom-section w-full flex flex-col justify-center items-center'>
					<div className='input-container relative w-full max-w-[650px]'>
						
						<form onSubmit={getMessage}>
							<input className='w-full border-none text-lg py-3 px-4 rounded-md  shadow-md shadow-side-bar-bg' type='text' onChange={e =>  setValue(e.target.value)}/>
							<button type='submit' id='submit' className='absolute bottom-0 -right-14 p-4 bg-green-buttons rounded-lg text-feed-white cursor-pointer'>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</form>
						
						
					</div>
					
					<p className='info text-light-gray text-sm p-2'>chat version 1.0</p>
					
				</div>

			</section>
		</div>
	)
}

export default ChatUi
