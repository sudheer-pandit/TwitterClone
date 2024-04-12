import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

function Feed() {
  return (
    <div className='w-[60%]  border border-grey-200 mt-2 ' >
      <div  className='mt-2 '>
        <CreatePost/>
        <Tweet/>
        
      </div>
    </div>
  )
}

export default Feed