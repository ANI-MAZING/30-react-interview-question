import { useEffect, useState } from "react";

function useData() {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    const getUsers = () => {
        return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((json) => setUsers(json))
        .catch((err) => {console.log(err)})
    };
    const getPosts =() => {
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((json) => setPosts(json))
        .catch((err) => {console.log(err)})
    };

    useEffect(() => {
        getUsers();
        getPosts();
    }, [])

    return {users, posts}
}

export default useData;