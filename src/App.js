import "./App.css"
import { Component } from "react"
import { CardList } from "./components/card-list/card-list"
import { SearchBox } from "./components/search-box/search-box"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchValue: ""
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(monsters =>
        this.setState(() => {
          return { monsters }
        })
      )
  }
  handleChange = e => {
    this.setState(() => {
      return { searchValue: e.target.value.toLowerCase() }
    })
  }
  render() {
    const { monsters, searchValue } = this.state
    const filterMonsters = monsters.filter(obj => obj.name.toLowerCase().includes(searchValue))

    return (
      <div className="App">
        {/* <input className="search-box" type="search" placeholder="Search Monsters" onChange={this.handleChange} /> */}
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App
