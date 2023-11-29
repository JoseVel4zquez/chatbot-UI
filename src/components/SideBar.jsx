import React from 'react'

export default function SideBar(props) {
    const {uniqueTitles, handleClick, createNewChat} = props;
  return (
    <section className='side-bar bg-institucional-purple h-screen w-56 flex flex-col justify-between '>
        <button className='border text-yellow-forms border-yellow-forms bg-transparent rounded-md p-2 m-2 text-withe;' onClick={createNewChat}>
            + New Chat
        </button>
        <ul className='History p-2 m-2 h-full text-white'>
            {uniqueTitles?.map((uniqueTitle, index) => (
                <li className='list-none py-4 px-0 cursor-pointer text-center' key={index} onClick={() => handleClick(uniqueTitle)}>
                    {uniqueTitle}
                </li>
            ))}
        </ul>
        <nav className='border-t border-t-yellow-forms p-2 m-2'>
            <p className='text-yellow-forms '>Made by Luis Velazquez</p>
        </nav>
	</section>
  )
}
