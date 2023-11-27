import { useSelector } from "react-redux";
import { useFetchBooksQuery } from "../../redux/bookApi";
import type { RootState } from "../../redux/store";

function BookList() {
  const searchParams = useSelector((state: RootState) => state.searchParams);

  const { data, error, isLoading } = useFetchBooksQuery(searchParams, {
    skip: searchParams.query === "",
  });

  console.log(data, error, isLoading);

  return <div>BookList</div>;
}

export default BookList;
