package pt.unl.fct.di.demojpa

import jakarta.transaction.Transactional
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import pt.unl.fct.di.demojpa.data.BookRepository
import pt.unl.fct.di.demojpa.data.CategoryRepository

@SpringBootTest(classes = [DemoJpaApplication::class])
class DemoJpaApplicationTests {

    @Autowired
    lateinit var categories:CategoryRepository

    @Autowired
    lateinit var books:BookRepository

    @Test
    @Transactional
    fun `fantasy books`() {
        categories.findAll().forEach {
            println(it.name)
            println("======")
            it.books.forEach {
                println(it.name)
            }
        }
    }

    @Test
    @Transactional
    fun `books first`() {
        books.findAll().forEach {
            println(it.name + " " + it.kind.name)
        }
    }

    @Test
    fun `fantasy books fetch`() {
        categories.findAllWithBooks().forEach {
            println(it.name)
            println("======")
            it.books.forEach {
                println(it.name)
            }
        }
    }


}
