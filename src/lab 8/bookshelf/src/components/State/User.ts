import { Action } from 'redux'

export interface State {
    username: string;
}

const SET_USERNAME = "SET_USERNAME"
interface SetUsernameAction extends Action { type: typeof SET_USERNAME, username: string }
export const setUsernameAction = (username: string) => ({ type: SET_USERNAME, username })

const initialState: State = { username: '' }

export const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: (action as any).username }
        default:
            break;
    }
    return state;
}