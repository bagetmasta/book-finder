import { useDispatch } from "react-redux";
import { setSearchParams } from "../../redux/searchParamsSlice";

function Header() {
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(event.currentTarget);
    const query = formData.get("query") as string;
    const category = formData.get("category") as string;
    const orderBy = formData.get("orderBy") as string;
    console.log(query, category, orderBy);
    dispatch(setSearchParams({ query, category, orderBy }));
  };

  return (
    <header>
      <h1>Search for books</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          placeholder="Search..."
          aria-label="Search for books"
        />
        <p>Categories</p>
        <select name="category" aria-label="Select category">
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
        <p>Sorting by</p>
        <select name="orderBy" aria-label="Select sorting method">
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
        <button type="submit">Q</button>
      </form>
    </header>
  );
}

export default Header;
