import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    filteredList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getRelatedData()
  }

  changeFilterLanguage = languageId => {
    this.setState({activeId: languageId, isLoading: true}, this.getRelatedData)
    console.log(languageId)
  }

  getRelatedData = async () => {
    const {activeId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeId}`,
    )
    const data = await response.json()
    const popularRepos = data.popular_repos

    const updatedData = popularRepos.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      forksCount: eachItem.forks_count,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))

    this.setState({filteredList: updatedData, isLoading: false})
  }

  renderLoading = () => (
    <div>
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFetchedList = filteredList => (
    <ul className="cards-list">
      {filteredList.map(eachItem => (
        <RepositoryItem key={eachItem.id} itemDetails={eachItem} />
      ))}
    </ul>
  )

  render() {
    const {activeId, isLoading, filteredList} = this.state
    return (
      <div className="app-container">
        <h1>Popular</h1>
        <ul className="filtered-options">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              key={eachItem.id}
              isActive={eachItem.id === activeId}
              languageFiltersData={eachItem}
              changeFilterLanguage={this.changeFilterLanguage}
            />
          ))}
        </ul>

        {isLoading
          ? this.renderLoading()
          : this.renderFetchedList(filteredList)}
      </div>
    )
  }
}

export default GithubPopularRepos
