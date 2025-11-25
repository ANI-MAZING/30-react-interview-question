export const getAllUsers =(param) => {
    return fetch(`https://jsonplaceholder.typicode.com/${param}`)
    .then((res) => res.json())
    .catch((err) => {console.log(err)})
};