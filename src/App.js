import "./App.css"
import { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }
  async componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(monsters =>
        this.setState(prevState => {
          return { monsters }
        })
      )
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => {
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
