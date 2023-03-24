// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachsuggestion, selectsuggetion} = props
  const {suggestion} = eachsuggestion

  const onSelectsuggetionsuText = () => {
    selectsuggetion(suggestion)
  }

  return (
    <li className="list-container">
      <p className="Suggestiontext">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onSelectsuggetionsuText}
      />
    </li>
  )
}

export default SuggestionItem
