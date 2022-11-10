import './index.css'

const RepositoryItem = props => {
  const {itemDetails} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = itemDetails

  return (
    <div className="item-container">
      <img src={avatarUrl} alt={name} className="logo" />
      <h1 className="heading">{name}</h1>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="logo-image"
        />
        <p>{starsCount}Stars</p>
      </div>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="logo-image"
        />
        <p>{forksCount} Forks</p>
      </div>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="logo-image"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </div>
  )
}

export default RepositoryItem
