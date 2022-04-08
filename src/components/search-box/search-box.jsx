import { Component } from "react"
import "./search-box.styles.css"
export class SearchBox extends Component {
  render() {
    const { handleChange, className } = this.props
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder="Search Monsters"
          onChange={handleChange}
        />
      </div>
    )
  }
}
