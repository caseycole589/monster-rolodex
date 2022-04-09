import "./card-list.styles.css"
import { Card } from "../card/card"

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(({ name, id, email }) => {
        return <Card key={id} name={name} email={email} id={id} />
      })}
    </div>
  )
}
