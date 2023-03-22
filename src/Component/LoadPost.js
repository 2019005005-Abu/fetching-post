import React from 'react'
import "../Component/Posts.css";
import Post from './Post';
const LoadPost = () => {
    const [posts,setPost]=React.useState([]);
    React.useEffect(()=>{
     LoadingData();
    },[])
    const LoadingData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((Response)=>Response.json())
        .then((data)=>setPost(data))
    }

  return (
 
    <div className='Posts'>
      
    {
      posts.map((post)=><Post title={post.title}></Post>)
    }
  </div>

  )
}

export default LoadPost
