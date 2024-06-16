// import React from 'react'
import { FaAmazon } from "react-icons/fa6";
const App = () => {
  const medBlog = {
    label: 'April Brings Americas First Total Eclipse Since 2017: What You Need to Know',
    author: {
      name: 'Rebecca Jean T',
      blogLength: '7 min read',
      createdAt: 'Mar 8, 2024'
    },
    detail: 'In just one month the skies of North America, including Mexico, the United States, and Canada, will be graced with a total solar eclipse. This is the first total eclipse ',
    liked: '3K',
    comment: '44'
  };


  return (

    <div>
      <div>
        <FaAmazon color="blue" size={50} />
        <h1>{medBlog.label}</h1>
        <p>{medBlog.author.name}</p>
        <p></p>

        <h6>{medBlog.liked} {medBlog.comment}</h6>
        {/* <p>{' ${mrdBlog.liked} hhhhh ${medBlog.comment}'} </p> */}

      </div>
      <h1>welcome</h1>
    </div>
  )
}

export default App