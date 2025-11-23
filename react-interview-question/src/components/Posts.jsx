import React, { useEffect, useState } from 'react'
import HigherOrder from './HigherOrderComponent'


function Posts({data}) {

  return (
    <div>
        <h2>Hello From Posts</h2>
        {/* <h1>Posts</h1> */}
      {data.slice(0,10).map((post) => {
        return <h2>{post.title}</h2>
      })}
    </div>
  )
}

const PostsComp = HigherOrder("Posts", Posts, "posts")

export default PostsComp
