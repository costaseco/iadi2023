import { Book } from '../Books'
import { Action } from 'redux'

export interface State {
    books: Book[];
    filter: string;
    selected: number | undefined;
}

const initialState: State = { books: [], filter: '', selected: undefined }

const ADD_BOOK = "ADD_BOOK"
interface AddBookAction extends Action { type: typeof ADD_BOOK, book: Book }
export const addBookAction = (book: Book) => ({ type: ADD_BOOK, book })

const SET_FILTER = "SET_FILTER"
interface SetFilterAction extends Action { type: typeof SET_FILTER, filter: string }
export const setFilterAction = (filter: string) => ({ type: SET_FILTER, filter })

const SET_SELECTED = "SET_SELECTED"
interface SetSelectedAction extends Action { type: typeof SET_SELECTED, selected: number | undefined }
export const setSelectedAction = (selected: number | undefined) => ({ type: SET_SELECTED, selected })

const SET_BOOKS = "SET_BOOKS"
interface SetBooksAction extends Action { type: typeof SET_BOOKS, books: Book[] }
export const setBooksAction = (books: Book[]) => ({ type: SET_BOOKS, books })

const SET_LOADING_BOOKS = "SET_LOADING_BOOKS"
interface SetLoadingBooksAction extends Action { type: typeof SET_LOADING_BOOKS, loading: boolean }
export const setLoadingBooksAction = (loading: boolean) => ({ type: SET_LOADING_BOOKS, loading })

export const fetchBooksAction: any = () =>
    (dispatch: any) => {
        dispatch(setLoadingBooksAction(true))
        fetch('books.json')
            .then(response => response.json())
            .then(data => dispatch(setBooksAction(data)))
    }

export const reducer = (state = initialState, action: Action) => {
    const { books, filter } = state;
    switch (action.type) {
        case ADD_BOOK:
            return { ...state, books: [...books, (action as AddBookAction).book] }

        case SET_FILTER:
            return { ...state, filter: (action as SetFilterAction).filter }

        case SET_SELECTED:
            console.log("SET_SELECTED", action)
            return { ...state, selected: (action as SetSelectedAction).selected }

        case SET_BOOKS:
            return { ...state, books: (action as SetBooksAction).books }

        case SET_LOADING_BOOKS:
            return { ...state, loading: (action as SetLoadingBooksAction).loading }

        default:
            break;
    }
    return state
}