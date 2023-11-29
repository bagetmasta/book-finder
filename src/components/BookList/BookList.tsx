import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchParams } from "../../redux/searchParamsSlice";
import { useFetchBooksQuery } from "../../redux/bookApi";
import { Title, BooksList, Section, Button } from "./BookList.styled";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import BookItem from "../BookItem/BookItem";
import type { RootState } from "../../redux/store";

const TEMPLATE_PHOTO =
  "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: [];
    categories: [];
    imageLinks?: {
      thumbnail: string;
    };
  };
}

function BookList() {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [bookIds, setBookIds] = useState(new Set<string>());
  const searchParams = useSelector((state: RootState) => state.searchParams);

  const { data, error } = useFetchBooksQuery(searchParams, {
    skip: searchParams.query === "",
  });

  useEffect(() => {
    if (data?.items) {
      if (searchParams.page === 1) {
        setBooks(data.items);
        setBookIds(new Set(data.items.map((book: Book) => book.id)));
      } else {
        const newBooks = data.items.filter(
          (book: Book) => !bookIds.has(book.id)
        );
        setBooks((prevBooks) => [...prevBooks, ...newBooks]);
        newBooks.forEach((book: Book) => bookIds.add(book.id));
      }
    }
  }, [data, searchParams.page]);

  useEffect(() => {
    if (isFetching) {
      Loading.hourglass("Load more...");
    } else {
      Loading.remove();
    }
  }, [isFetching]);

  const handleLoadMore = async () => {
    setIsFetching(true);
    await dispatch(
      setSearchParams({ ...searchParams, page: searchParams.page + 1 })
    );
    setIsFetching(false);
  };

  return (
    <>
      <Section>
        {books.length > 0 ? (
          <>
            <Title>Found {data?.totalItems} results</Title>
            <BooksList>
              {books.map((book: Book) => {
                const {
                  id,
                  volumeInfo: { title, imageLinks, authors, categories },
                } = book;
                return (
                  <BookItem
                    key={id}
                    id={id}
                    title={title}
                    image={imageLinks?.thumbnail || TEMPLATE_PHOTO}
                    authors={authors}
                    categories={categories}
                  />
                );
              })}
            </BooksList>
            <Button type="button" onClick={handleLoadMore}>
              Load more
            </Button>
          </>
        ) : (
          !searchParams.hasSearch && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="50vh"
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Begin your quest for Knowledge!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Start searching for books and uncover all the secrets of the
                    world.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )
        )}
      </Section>
    </>
  );
}

export default BookList;
