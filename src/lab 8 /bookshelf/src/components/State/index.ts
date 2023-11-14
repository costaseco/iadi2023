import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { useSelector, useDispatch as globalDispatch } from 'react-redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer as bookReducer, State as BookState, addBookAction } from './Books';
import { reducer as userReducer, State as UserState, setUsernameAction } from './User';

export interface State {
    books: BookState;
    user: UserState;
}

const logger = createLogger()

const reducer = combineReducers( { books: bookReducer, user: userReducer } )

export const store = createStore(reducer, applyMiddleware(thunk));

type AppDispatch = typeof store.dispatch
export const useDispatch: (() => AppDispatch) = globalDispatch

store.dispatch(addBookAction({
    url: "https://images-na.ssl-images-amazon.com/images/I/51Zyv9Z8ZJL._SX331_BO1,204,203,200_.jpg",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    summary: "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold."
}))

store.dispatch(addBookAction({
    url: "https://images-na.ssl-images-amazon.com/images/I/51Zyv9Z8ZJL._SX331_BO1,204,203,200_.jpg",
    title: "Symarillion",
    author: "J.R.R. Tolkien",
    summary: "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold."
}))

store.dispatch(setUsernameAction("John"))

export const useSelectorUser = () => useSelector((state: State) => state.user.username)

export const useSelectorBooks = <T>(f:(state:BookState) => T) => useSelector((state:State) => f(state.books))