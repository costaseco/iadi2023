package pt.unl.fct.iadi.tokenbased

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@SpringBootApplication
class TokenbasedApplication

fun main(args: Array<String>) {
    runApplication<TokenbasedApplication>(*args)
}

@RestController
@RequestMapping("/api")
class SampleController {

    @GetMapping("/hello")
    fun hello(principal:Principal) = "Hello, ${principal.name}"
}
