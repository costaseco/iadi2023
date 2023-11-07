/**
Copyright 2022 João Costa Seco

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

package pt.unl.fct.iadi.tokenbased.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.provisioning.InMemoryUserDetailsManager
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter
import pt.unl.fct.iadi.tokenbased.service.UserService


// https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter
// https://www.bezkoder.com/websecurityconfigureradapter-deprecated-spring-boot/

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled=true)
class SecurityConfig {

    @Bean
    fun filterChain(http: HttpSecurity,
                    users:UserService,
                    authenticationManager: AuthenticationManager): SecurityFilterChain? {
        http.csrf().disable()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeRequests()
            .anyRequest().authenticated()
            .and()
            .httpBasic()
            .and()
            .addFilterBefore(UserPasswordAuthenticationFilterToJWT("/login", authenticationManager),
                BasicAuthenticationFilter::class.java)
            .addFilterBefore(UserPasswordSignUpFilterToJWT ("/signup", users),
                BasicAuthenticationFilter::class.java)
            .addFilterBefore(JWTAuthenticationFilter(),
                BasicAuthenticationFilter::class.java)
        return http.build()
    }

    @Bean
    fun authenticationManager(authConfiguration: AuthenticationConfiguration): AuthenticationManager? {
        return authConfiguration.authenticationManager
    }

    @Bean
    fun encoder(): PasswordEncoder = BCryptPasswordEncoder()

    @Bean
    fun userDetailsService(bcrypt:PasswordEncoder): InMemoryUserDetailsManager? {
        val user: UserDetails =
            User.builder()
            .username("user")
            .password(bcrypt.encode("password"))
            .roles("USER")
            .build()
        val admin = User.builder()
            .username("admin")
            .password(bcrypt.encode("password"))
            .roles("ADMIN")
            .build()

        return InMemoryUserDetailsManager(listOf(user,admin))

        // For a proper userdetailsservice with a database, see: https://www.baeldung.com/spring-security-authentication-with-a-database
    }

}



