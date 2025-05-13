import '../App.css'

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
