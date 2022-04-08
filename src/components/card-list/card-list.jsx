import { Component } from "react"
import "./card-list.styles.css"
export class CardList extends Component {
  render() {
    const { monsters } = this.props
    return (
      <div className="card-list">
        {monsters.map(({ name, id, email }) => {
          return (
            <div className="card-container" key={id}>
              <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
