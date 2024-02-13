import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
        <nav className='p-5 mb-5'>
                <h1 className='text-3xl font-semibold text-center'>Weather App</h1>
            </nav>
        <Link to={'/register'} className='w-full h-full flex justify-center items-center'>
            <p className='w-min border-[1px] border-gray-50 bg-gray-400 rounded py-2 px-4'>
                Register&nbsp;/&nbsp;Login
            </p>
        </Link>
    </>
  )
}

export default HomePage