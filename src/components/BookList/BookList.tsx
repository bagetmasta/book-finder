import { useSelector } from "react-redux";
import { useFetchBooksQuery } from "../../redux/bookApi";
import { Title, BooksList } from "./BookList.styled";
import BookItem from "../BookItem/BookItem";
import type { RootState } from "../../redux/store";
// import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

function BookList() {
  const searchParams = useSelector((state: RootState) => state.searchParams);

  const { data, error, isLoading } = useFetchBooksQuery(searchParams, {
    skip: searchParams.query === "",
  });

  console.log(data, error, isLoading);

  interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors: [];
      categories: [];
      imageLinks: {
        smallThumbnail: string;
      };
    };
  }

  return (
    <section>
      <Title>Found {data?.totalItems} results</Title>
      <BooksList>
        {data?.items.map((book: Book) => {
          const {
            id,
            volumeInfo: { title, imageLinks, authors, categories },
          } = book;
          return (
            <BookItem
              key={id}
              title={title}
              image={imageLinks.smallThumbnail}
              authors={authors}
              categories={categories}
            />
          );
        })}
      </BooksList>
      <button type="button">Load more</button>
    </section>
  );
}

export default BookList;
