import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function Widgets() {
  return (
    <div className='px-2 mt-2'>
        <div className='flex items-center p-3 rounded-full space-x-2 bg-gray-100'>
            <SearchIcon className='h-5 w-5 text-gray-400'/>
            <input className=' flex-1 bg-transparent' placeholder='Search Twitter' type='text'/>
        </div>
    </div>
  )
}

export default Widgets