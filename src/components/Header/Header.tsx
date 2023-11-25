function Header() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <header>
      <h1>Search for books</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search for books"
        />
        <p>Categories</p>
        <select aria-label="Select category">
          <option value="all">all</option>
          <option value="all">art</option>
          <option value="all">biography</option>
          <option value="all">computers</option>
          <option value="all">history</option>
          <option value="all">medical</option>
          <option value="all">poetry</option>
        </select>
        <p>Sorting by</p>
        <select aria-label="Select sorting method">
          <option value="relevance">relevance</option>
          <option value="relevance">newest</option>
        </select>
        <button type="submit">Q</button>
      </form>
    </header>
  );
}

export default Header;
