// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  selectsuggetion = suggetionText => {
    this.setState({searchInput: suggetionText})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const modifiedsuggestionsList = suggestionsList.filter(each => {
      const suggestion = each.suggestion.toLowerCase()
      const searchInputLower = searchInput.toLowerCase()
      return suggestion.includes(searchInputLower)
    })
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="google-img"
        />
        <div className="search-engine-bg-card">
          <div className="search-engine-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="Suggestions-list-container">
            {modifiedsuggestionsList.map(each => (
              <SuggestionItem
                eachsuggestion={each}
                key={each.id}
                selectsuggetion={this.selectsuggetion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
