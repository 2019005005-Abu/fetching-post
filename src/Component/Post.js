import React from 'react'
import "./Post.css"
const Post = (props) => {
  return (
    <div className='Post'>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Post
