import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, changeFilterLanguage, isActive} = props

  const className = isActive ? 'active' : 'null'

  const {id, language} = languageFiltersData

  const onClickButton = () => {
    changeFilterLanguage(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onClickButton} className={className}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
