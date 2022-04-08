import { Component } from "react"
export class SearchBox extends Component {
  render() {
    const { handleChange } = this.props
    return (
      <div className="search-box">
        <input type="search" placeholder="Search Monsters" onChange={handleChange} />
      </div>
    )
  }
}
