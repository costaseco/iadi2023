package pt.unl.fct.di.demojpa.data

import jakarta.persistence.*


@Entity
data class BookDAO(@Id @GeneratedValue val id:Long, val name:String, @ManyToOne val kind:CategoryDAO) {
    override fun hashCode() = BookRecord(id,name).hashCode()
}

@Entity
data class CategoryDAO(@Id @GeneratedValue val id:Long, val name:String, @OneToMany(mappedBy = "kind") var books:Set<BookDAO>) {

    override fun hashCode() = CategoryRecord(id,name).hashCode()
}

data class CategoryRecord(val id: Long, val name: String)
data class BookRecord(val id:Long, val nanme:String)
