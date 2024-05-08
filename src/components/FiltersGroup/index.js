import './index.css'

import {FaSearch} from 'react-icons/fa'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    onChangeRatingId,
    onChangeCategoryOptionId,
    onChangeTitleSearchInput,
    onChangeResetFilter,
  } = props
  const onChangeInput = event => {
    onChangeTitleSearchInput(event.target.value)
  }

  const onClickEachItem = event => {
    onChangeCategoryOptionId(event.target.value)
  }

  const onClickRating = event => {
    onChangeRatingId(event)
  }

  const onClickResetFilter = () => {
    onChangeResetFilter()
  }

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onChange={onChangeInput}
        />
        <FaSearch />
      </div>
      <h1>Category</h1>
      <div>
        {categoryOptions.map(eachItem => (
          <button
            type="button"
            onClick={onClickEachItem}
            value={eachItem.categoryId}
            key={eachItem.categoryId}
          >
            <p>{eachItem.name}</p>
          </button>
        ))}
      </div>
      <ul>
        {ratingsList.map(eachItem => (
          <li>
            <button
              type="button"
              onClick={() => onClickRating(eachItem.ratingId)}
              key={eachItem.ratingId}
              value={eachItem.ratingId}
            >
              <img src={eachItem.imageUrl} alt="rating{ratingId}" />
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button type="button" onClick={onClickResetFilter}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
