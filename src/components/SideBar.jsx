import React from 'react'

export default function SideBar(props) {
    const {uniqueTitles, handleClick, createNewChat} = props;
  return (
    <section className='side-bar bg-side-bar-bg h-screen w-56 flex flex-col justify-between '>
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
            <p className='text-light-gray '>Made by Luis Velazquez</p>
        </nav>
	</section>
  )
}
