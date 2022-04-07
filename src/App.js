import "./App.css"
import { Component } from "react"

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
        <input className="search-box" type="search" placeholder="Search Monsters" onChange={this.handleChange} />
        {filterMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
