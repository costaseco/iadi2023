import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger'
import bookReducer, { loadBooks } from './books';
import userReducer, { setUser } from './user';

export const store = configureStore({
    reducer: {
        books: bookReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

store.dispatch(setUser("John Doe"))
store.dispatch(loadBooks())

