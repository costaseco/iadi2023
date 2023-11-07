package com.example.demooauth

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

// Follow this to implement oauth: https://spring.io/guides/tutorials/spring-boot-oauth2/


@SpringBootApplication
@RestController
class DemoOAuthApplication {
    @GetMapping("/user")
    fun user(@AuthenticationPrincipal principal: OAuth2User): Map<String, Any?> {
        return Collections.singletonMap("name", principal.getAttribute("name"))
    }
}

fun main(args: Array<String>) {
    runApplication<DemoOAuthApplication>(*args)
}

