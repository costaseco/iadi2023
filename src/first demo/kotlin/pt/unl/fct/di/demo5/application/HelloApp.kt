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

package pt.unl.fct.di.demo5.application

import org.springframework.stereotype.Service
import pt.unl.fct.di.demo5.services.PeopleService

@Service
class HelloApp(val people:PeopleService) {

    fun sayHello(name:String) =
        if (name == "")
            "Hello, World!"
        else if(name == "joao")
            "Hello, Master!"
        else if(people.existsPerson(name))
            "Welcome back, $name!"
        else "Hello, $name!"

    fun addPerson(name: String) {
        people.addPerson(name)
    }

}