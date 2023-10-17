package pt.unl.fct.di.demojpa.application

import org.springframework.stereotype.Service
import pt.unl.fct.di.demojpa.data.BookDAO
import pt.unl.fct.di.demojpa.data.BookRepository

@Service
class BookApplication(val books: BookRepository) {

    fun getAllBooks():List<BookDAO> {
        return books.findAll().toList()
    }
}