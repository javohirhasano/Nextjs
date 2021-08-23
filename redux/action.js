import { getUser, getPhotos, getTodos } from "../api/api"
import { GET_USER, SIDEBAR, GET_PHOTO, GET_TODOS } from "./types"

const setUser = async (dispatch) => {
    const res = await getUser()
    if (res.success) {
        const action = { type: GET_USER, payload: res.data }
        dispatch(action)
    }
}
const setPhotos = async (dispatch) => {
    const res = await getPhotos()
    if (res.success) {
        const action = { type: GET_PHOTO, payload: res.data }
        dispatch(action)
    }
}
const setTodos = async (dispatch) => {
    const res = await getTodos()
    if (res.success) {
        const action = { type: GET_TODOS, payload: res.data }
        dispatch(action)
    }
}

const sidebarShow = (dispatch) => {
    dispatch({ type: SIDEBAR })

}
export { setUser, sidebarShow, setPhotos, setTodos }