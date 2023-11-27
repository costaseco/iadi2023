import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '../types'

export type State = User

// Define the initial state using that type
const initialState: State = {
    username: undefined
}

export const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    }
})

export const { setUser } = slice.actions

export default slice.reducer