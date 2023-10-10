package pt.unl.fct.di.demojpa.boot

import jakarta.transaction.Transactional
import org.springframework.boot.CommandLineRunner
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component
import pt.unl.fct.di.demojpa.data.BookDAO
import pt.unl.fct.di.demojpa.data.BookRepository
import pt.unl.fct.di.demojpa.data.CategoryDAO
import pt.unl.fct.di.demojpa.data.CategoryRepository
import java.awt.print.Book

@Component
@Order(1)
class Init(val books:BookRepository, val categories: CategoryRepository) : CommandLineRunner {
    @Transactional
    override fun run(vararg args: String?) {
        val fantasy = CategoryDAO(0, "Fantasy", emptySet())
        val sciencefiction = CategoryDAO(0, "ScienceFiction", emptySet())

        val lor1 = BookDAO(0,"The Fellowship of the Ring", fantasy)
        val lor2 = BookDAO(0,"The Two Towers", fantasy)
        val lor3 = BookDAO(0,"The Return of the King", fantasy)
        books.saveAll(listOf( lor1, lor2, lor3))

        val wot = mutableListOf<BookDAO>()
        wot.add(BookDAO(0, "The Eye of the World", fantasy))
        wot.add(BookDAO(0, "The Great Hunt", fantasy))
        wot.add(BookDAO(0, "The Dragon Reborn", fantasy))
        wot.add(BookDAO(0, "The Shadow Rising", fantasy))
        wot.add(BookDAO(0, "The Fires of Heaven", fantasy))
        wot.add(BookDAO(0, "Lord of Chaos", fantasy))
        wot.add(BookDAO(0, "A Crown of Swords", fantasy))
        wot.add(BookDAO(0, "The Path of Daggers", fantasy))
        wot.add(BookDAO(0, "Winter's Heart", fantasy))
        wot.add(BookDAO(0, "Crossroads of Twilight", fantasy))
        wot.add(BookDAO(0, "Knife of Dreams", fantasy))
        wot.add(BookDAO(0, "The Gathering Storm", fantasy))
        wot.add(BookDAO(0, "Towers of Midnight", fantasy))
        wot.add(BookDAO(0, "A Memory of Light", fantasy))
        books.saveAll(wot)

        val asimov = mutableListOf<BookDAO>()
        asimov.add(BookDAO(0, "Foundation", sciencefiction))
        asimov.add(BookDAO(0, "I, Robot", sciencefiction))
        asimov.add(BookDAO(0, "Foundation and Empire", sciencefiction))
        asimov.add(BookDAO(0, "The Caves of Steel", sciencefiction))
        asimov.add(BookDAO(0, "The End of Eternity", sciencefiction))
        asimov.add(BookDAO(0, "The Naked Sun", sciencefiction))
        asimov.add(BookDAO(0, "Foundation's Edge", sciencefiction))
        asimov.add(BookDAO(0, "Robots and Empire", sciencefiction))
        books.saveAll(asimov)

        fantasy.books = setOf(lor1,lor2,lor3)
        categories.saveAll(listOf(fantasy,sciencefiction))
    }
}

@Component
class Init2