type Placeholder = { placeholder: string };

function SearchInput({ placeholder }: Placeholder) {
  return <input placeholder={placeholder} type="search" />;
}

export default SearchInput;
