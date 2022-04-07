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
        this.setState(prevState => {
          return { monsters: monsters, monstersFiltered: monsters }
        })
      )
  }
  handleOnChange = e => {
    this.setState(() => {
      return { searchValue: e.target.value.toLocaleLowerCase() }
    })
  }
  render() {
    const filterMonsters = this.state.monsters.filter(obj => obj.name.includes(this.state.searchValue))

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search Monsters" onChange={this.handleOnChange} />
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
