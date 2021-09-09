import axios from "axios"

const getUser = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=40")
        return { success: true, data: res.data }
    } catch (error) {
        console.error("Hatolik");

    }
}
const getUserbyId = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return { success: true, data: res.data }
    } catch (error) {
        console.error("Hatolik");

    }
}
const getPhotos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=40")
        return { success: true, data: res.data }
    } catch (error) {
        console.error("Hatolik");

    }
}
const getTodos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=24")
        return { success: true, data: res.data }
    } catch (error) {
        console.error("Hatolik");

    }
}

export { getUser, getPhotos, getTodos, getUserbyId }