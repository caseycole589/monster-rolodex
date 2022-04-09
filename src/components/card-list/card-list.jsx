import { Component } from "react"
import "./card-list.styles.css"
import { Card } from "../card/card"
export class CardList extends Component {
  render() {
    const { monsters } = this.props
    return (
      <div className="card-list">
        {monsters.map(({ name, id, email }) => {
          return <Card key={id} name={name} email={email} id={id} />
        })}
      </div>
    )
  }
}
