import { useState } from "react"
import './SearchBar.css'

const SearchBar = () => {
  const [term, setTerm] = useState('')
  
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('Necesuto decirle al componente sobre los datos')
    onsubmit(term)
  }

  const handleChange =(event) =>{
    setTerm(event.target.value)
  }

  console.log('term',term)
  return (
    <div className="search-bar">
    <form onsubmit={handleChange}>
      <label>termino de la busqueda</label>
      <input onCharge={handleChange} value={term} />
    </form>
    </div>
  )
}

export default SearchBar
