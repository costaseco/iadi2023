/**
Copyright 2023 JCS

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

package pt.unl.fct.di.demo5.presentation

import org.springframework.web.bind.annotation.*
import pt.unl.fct.di.demo5.application.HelloApp

@RestController
@RequestMapping("api")
class HelloController(val app:HelloApp) {

    @RequestMapping("hello", method = [RequestMethod.GET])
    fun hello() = app.sayHello("")

    @PostMapping("hello")
    fun sayHello(@RequestParam name:String) = app.sayHello(name)

    @PostMapping("people")
    fun addPerson(@RequestParam name:String) = app.addPerson(name)
}