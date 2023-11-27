import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Book } from '../types'

export interface State {
    books: Book[],
    filter: string,
    loading: boolean,
    uploading: boolean,
}

// Define the initial state using that type
const initialState: State = {
    books: [], 
    filter: '',
    loading: false,
    uploading: false
}

export const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action:PayloadAction<Book>) => ({
            ...state, books: [...state.books, action.payload], uploading: false
        }),
        setFilter: (state, action:PayloadAction<string>) => {
            state.filter = action.payload
        },
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setBooks: (state, action:PayloadAction<Book[]>) => {
            state.books = action.payload
            state.loading = false
        },
        setUploadingBook: (state, action:PayloadAction<boolean>) => {
            state.uploading = action.payload
        }
    }
})

export const { addBook, setFilter, setLoading, setBooks, setUploadingBook } = slice.actions

export const loadBooks = () => (dispatch: any) => {
    dispatch(setLoading(true))
    fetch('books.json')
    .then( response => response.json())
    .then( books => dispatch(setBooks(books)))
}

export const createBook = (book: Book) => (dispatch: any) => {
    dispatch(setUploadingBook(true))
    fetch('books', { method: "POST", body: JSON.stringify(book)}) // TO BE CONNECTED TO THE API
    .then( response => response.json())
    .then( book => dispatch(addBook(book)))
}

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default slice.reducer