import { CardsField } from './cards/cards';
import { cards } from './data';
import { SearchBar } from './searchBar/search-bar';

export function App() {
  return (
    <div>
      <SearchBar />
      <CardsField cards={cards} />
    </div>
  );
}
