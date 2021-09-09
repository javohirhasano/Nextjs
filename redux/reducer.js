import { GET_USER, SIDEBAR, GET_PHOTO, GET_TODOS, USER } from "./types"

const initialState = {
    user: [],
    photos: [],
    isSidebarshow: false,
    todos: [],
    user1: {},
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.payload }
        case SIDEBAR:
            return { ...state, isSidebarshow: !state.isSidebarshow }
        case GET_PHOTO:
            return { ...state, photos: action.payload }
        case GET_TODOS:
            return { ...state, todos: action.payload }
        case USER:
            return { ...state, user1: action.payload }
        default: return state
    }
}
export default reducer