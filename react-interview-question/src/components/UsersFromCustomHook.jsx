import React from 'react'
import useData from "../hooks/useJSONPlaceholder";

function UsersFromCustomHook() {

    let { users, posts} = useData();

  return (
    <>
    <div>
      <h1>Users</h1>
      {users.map((user) => { 
        return <h2>{user.name}</h2>;
      })}
    </div>
    <div>
      <h1>Posts</h1>
      {posts.map((post) => { 
        return <h2>{post.title}</h2>;
      })}
    </div>
    </>
  )
}

export default UsersFromCustomHook
