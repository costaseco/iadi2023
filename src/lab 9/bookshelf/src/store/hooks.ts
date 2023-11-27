import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { State, AppDispatch } from '.'
import type { State as UserState } from './user'
import type { State as BooksState } from './books'

// Typed versions of useDispatch and useSelector hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<State> = useSelector


export const useUserSelector: TypedUseSelectorHook<UserState> = 
    <T>(f:(state:UserState) => T) => useAppSelector((state:State) => f(state.user))
export const useBooksSelector: TypedUseSelectorHook<BooksState> =
    <T>(f:(state:BooksState) => T) => useAppSelector((state:State) => f(state.books))