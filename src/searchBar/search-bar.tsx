import '../../assets/styles/search-bar.css'
import { SearchButton } from './search-button'

import SearchInput from './search-input'

export const SearchBar = () => (
  <div className="container">
    <form action="" method="get" className="search-form">
      <div className="wrapper_input">
        <img
          src="./img/icons/search.svg"
          alt="search"
          style={{ width: '20px', height: '20px' }}
        />
        <SearchInput placeholder="you are searching..." />
      </div>
      <SearchButton textContent="search" />
    </form>
  </div>
)
