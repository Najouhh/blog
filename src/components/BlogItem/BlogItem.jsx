import React from 'react'
// detta brukar kallas för en presentation komponent ingen logik och inge
const BlogItem = ({item}) => {
    
  return (
    <>
    <h2>{item.title}</h2>
    <p>{item.body}</p>
    </>
  )
}

export default BlogItem