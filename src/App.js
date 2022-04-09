import "./App.css"
import { CardList } from "./components/card-list/card-list"
import { SearchBox } from "./components/search-box/search-box"
import { useState, useEffect } from "react"

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState("")
  const [filterMonsters, setFilterMonsters] = useState(monsters)

  //second argument is a dependency array
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => setMonsters(resp))
  }, [])

  useEffect(() => {
    setFilterMonsters(monsters.filter(monster => monster.name.toLowerCase().includes(searchField)))
  }, [monsters, searchField])

  const handleChange = e => {
    setSearchField(e.target.value.toLowerCase())
  }

  return (
    <div className="App">
      <h1 className="App-title">Monsters Rolodex</h1>
      <SearchBox className="monster-search-box" handleChange={handleChange} />
      <CardList monsters={filterMonsters} />
    </div>
  )
}
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       monsters: [],
//       searchValue: ""
//     }
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(resp => resp.json())
//       .then(monsters =>
//         this.setState(() => {
//           return { monsters }
//         })
//       )
//   }
//   render() {
//   }
// }

export default App
