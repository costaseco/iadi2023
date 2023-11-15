import React, { SetStateAction, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelectorBooks } from '../State'
import { State, setFilterAction, setSelectedAction } from '../State/Books'

export interface Book {
    url: string;
    title: string;
    author: string;
    summary: string;
}

const cardStyle = (selected?:boolean) =>
    ({ width:"200px", 
      backgroundColor: "lightblue", 
      padding: "10px", 
      margin: "10px",
      border : selected ? "2px solid red" : "1px solid black" 
    })
const BookCardView = ({ book, selected, onClick }: { book: Book, selected?: boolean, onClick: ()=> void }) => 
    <li style={cardStyle(selected)} onClick={onClick}>
        <img width={"100px"} src={book.url} />
        <p>{book.title}</p>
        <p>by {book.author}</p>
    </li>


// This is a function (custom hook) that isolates the behaviour of an input field (can be made generic)
const useInput = (initialValue:string, placeholder:string)
    :([JSX.Element, string, React.Dispatch<SetStateAction<string>>]) => {

    const [search, setSearch] = useState<string>(initialValue)

    const input = <input type="text"
        placeholder={placeholder}
        value={search}
        onChange={e => setSearch(e.target.value)} />

    return [input, search, setSearch]
}

const BooksList2 = () => { // For the sake of explaining things

    const [selected, setSelected] = useState<number | undefined>(undefined)
    // const [searchTitle, setSearchTitle] = useState<string>("")
    const [inputTitle, searchTitle, setSearchTitle] = useInput("", "Search Title")
    
    // const [searchAuthor, setSearchAuthor] = useState<string>("")
    const [inputAuthor, searchAuthor, setSearchAuthor] = useInput("", "Search Author")

    // const [searchServer, setSearchServer] = useState<string>("")
    const [books, setBooks] = useState<Book[]>([])

    // const loadBooks = () => { // To search in the server side
    //     fetch(`/books.json${searchServer==""?"":`?q=${searchServer}`}`)
    //     .then( response => response.json())
    //     .then( data => setBooks(data))

    // }
    // useEffect(loadBooks, [searchServer])
    const loadBooks = () => {
        fetch("/books.json") 
        .then( response => response.json())
        .then( data => setBooks(data))

    }
    useEffect(loadBooks, [])

    const filteredBooks = books.filter(b => b.title.includes(searchTitle) && b.author.includes(searchAuthor))
    
    return <div>
            {/* <input type="text" 
                   placeholder="Search Server" 
                   value={searchServer} 
                   onChange={e => setSearchServer(e.target.value)}/> */}

            { inputAuthor }
            { inputTitle }
            {/* <input type="text" 
                   placeholder="Search Title" 
                   value={searchTitle} 
                   onChange={e => setSearchTitle(e.target.value)}/> */}
            <BooksListView books={filteredBooks} selected={selected} setSelected={setSelected}/>
            </div>
}

const BooksListView = ({ books, selected, setSelected }:
    {
        books: Book[],
        selected: number | undefined,
        setSelected: React.Dispatch<SetStateAction<number | undefined>>
    }) => {

    return <div>
        <ul>
            {books.map((b, i) =>
                <BookCardView
                    key={i}
                    book={b}
                    selected={i == selected}
                    onClick={() => setSelected(i)} />)}
        </ul>
    </div>
}

const BooksList = () => {

    const [books, setBooks] = useState<Book[]>([])
    const [selected, setSelected] = useState<number | undefined>(undefined)
    
    const [inputTitle, searchTitle, setSearchTitle] = useInput("", "Search Title")
    const [inputAuthor, searchAuthor, setSearchAuthor] = useInput("", "Search Author")

    // You should use a proxy to avoid CORS issues
    // You should use OpenAPI generated code to access the server!!
    const loadBooks = () => {
        fetch("/books.json") 
            .then(response => response.json())
            .then(data => setBooks(data))

    }
    useEffect(loadBooks, [])

    const filteredBooks = books.filter(b => b.title.includes(searchTitle) && b.author.includes(searchAuthor))

    return <div>
        {inputAuthor}
        {inputTitle}
        <BooksListView books={filteredBooks} selected={selected} setSelected={setSelected} />
    </div>
}


export const BookCounter = () => {
    const counter = useSelectorBooks((state: State) => state.books.length)

    return <p>Number of books: {counter}</p>
}

const RdxBooksListView = () => {

    const books = useSelectorBooks((state: State) => state.books)
    const filter = useSelectorBooks((state: State) => state.filter)
    const selected = useSelectorBooks((state: State) => state.selected)
    const dispatch = useDispatch()

    const filteredBooks = books.filter(b => b.title.includes(filter) || b.author.includes(filter))

    return <div>
        <ul>
            {filteredBooks.map((b, i) =>
                <BookCardView
                    key={i}
                    book={b}
                    selected={i == selected}
                    onClick={() => dispatch(setSelectedAction(i))} />)}
        </ul>
    </div>
}


const RdxBooksList = () => {

    const [inputTitle, searchTitle, setSearchTitle] = useInput("", "Search Title")

    const dispatch = useDispatch()

    useEffect(() => { dispatch(setFilterAction(searchTitle)) }, [searchTitle])

    return <div>
        {inputTitle}
        <RdxBooksListView/>
    </div>
}

export default RdxBooksList