import { getUser, getPhotos, getTodos, getUserbyId } from "../api/api"
import { GET_USER, SIDEBAR, GET_PHOTO, GET_TODOS, USER } from "./types"

const setUser = async (dispatch) => {
    const res = await getUser()
    if (res.success) {
        const action = { type: GET_USER, payload: res.data }
        dispatch(action)
    }
    else {
        dispatch({ type: USER, payload: [] })
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
const setUser1 = async (id) => {
    const res = await getUserbyId(id);
    if (res.success) {
        dispatch({ type: USER, payload: res.data })
    }

    else {
        dispatch({ type: USER, payload: {} })
    }
}

const sidebarShow = (dispatch) => {
    dispatch({ type: SIDEBAR })

}
export { setUser, sidebarShow, setPhotos, setTodos, setUser1 }