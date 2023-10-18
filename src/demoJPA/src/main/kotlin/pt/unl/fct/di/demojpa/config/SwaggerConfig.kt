package pt.unl.fct.di.demojpa.config

import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.info.Contact
import io.swagger.v3.oas.models.info.Info
import io.swagger.v3.oas.models.info.License
import io.swagger.v3.oas.models.servers.Server
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.util.List


// Based on: https://www.bezkoder.com/spring-boot-swagger-3/
@Configuration
class SwaggerConfig {

    @Value("\${openapi.dev-url}")
    private val devUrl: String? = null

    @Value("\${openapi.prod-url}")
    private val prodUrl: String? = null

    @Bean
    fun myOpenAPI(): OpenAPI {
        val devServer = Server()
        devServer.setUrl(devUrl)
        devServer.setDescription("Server URL in Development environment")
        val prodServer = Server()
        prodServer.setUrl(prodUrl)
        prodServer.setDescription("Server URL in Production environment")
        val contact = Contact()
        contact.setEmail("myemail@gmail.com")
        contact.setName("My Name")
        contact.setUrl("https://www.fct.unl.pt")
        val mitLicense: License = License().name("MIT License").url("https://choosealicense.com/licenses/mit/")
        val info: Info = Info()
            .title("Tutorial Management API")
            .version("1.0")
            .contact(contact)
            .description("This API exposes endpoints to manage tutorials.")
            .termsOfService("https://www.bezkoder.com/terms")
            .license(mitLicense)
        return OpenAPI().info(info).servers(List.of(devServer, prodServer))
    }

}