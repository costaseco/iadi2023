package pt.unl.fct.di.demojpa.presentation

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import pt.unl.fct.di.demojpa.application.BookApplication

@RestController
class BooksController(val app: BookApplication) : BooksAPI {

    override fun getAllBooks(): List<BookDTO> =
        app.getAllBooks().map {
            BookDTO(it.id, it.name, CategoryInBookDTO(it.kind.id, it.kind.name))
        }

    override fun addBook(@RequestBody book: BookDTO) {
        TODO("Not yet implemented")
    }
}