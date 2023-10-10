package pt.unl.fct.di.demojpa

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DemoJpaApplication

fun main(args: Array<String>) {
    runApplication<DemoJpaApplication>(*args)
}
