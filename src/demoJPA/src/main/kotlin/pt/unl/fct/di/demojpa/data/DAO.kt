package pt.unl.fct.di.demojpa.data

import jakarta.persistence.*


@Entity
data class BookDAO(@Id @GeneratedValue val id:Long, val name:String, @ManyToOne val kind:CategoryDAO)

@Entity
data class CategoryDAO(@Id @GeneratedValue val id:Long, val name:String, @OneToMany(mappedBy = "kind") var books:List<BookDAO>)
