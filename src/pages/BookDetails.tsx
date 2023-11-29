import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchBookById } from "../service/bookService";
import {
  BackButton,
  BookInfo,
  Categories,
  Photo,
  Title,
  Author,
  DescriptionCard,
  BookInfoBox,
} from "./BookDetails.styled";
import { stripHtml } from "../utils/cleanDescription";
import Header from "../components/Header/Header";

interface BookCredentials {
  volumeInfo: {
    title: string;
    authors: [];
    categories: [];
    imageLinks?: {
      thumbnail: string;
    };
    description: string;
  };
}

const TEMPLATE_PHOTO =
  "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

function BookDetails() {
  const location = useLocation();
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState<BookCredentials | null>(null);

  useEffect(() => {
    fetchBookById(bookId)
      .then((data) => setBookDetails(data))
      .catch(console.error);
  }, [bookId]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  const {
    volumeInfo: { title, imageLinks, authors, categories, description },
  } = bookDetails;

  const backLinkHref = location?.state?.from ?? "/";

  const cleanDescription = description && stripHtml(description);

  return (
    <>
      <Header />
      <BackButton to={backLinkHref}>Go Back</BackButton>
      <BookInfo>
        <div>
          <Photo src={imageLinks?.thumbnail || TEMPLATE_PHOTO} alt={title} />
        </div>
        <BookInfoBox>
          {categories && <Categories>{categories.join(", ")}</Categories>}
          <Title>{title}</Title>
          {authors && <Author>{authors.join(", ")}</Author>}
          {description && (
            <DescriptionCard>
              <p>{cleanDescription}</p>
            </DescriptionCard>
          )}
        </BookInfoBox>
      </BookInfo>
    </>
  );
}

export default BookDetails;

// {/* <Box
// // display="flex"
// // justifyContent="center"
// // alignItems="center"
// // height="50vh"
// >
//   <Card sx={{ maxWidth: 500 }}>
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="p">
//         {cleanDescription}
//       </Typography>
//       {/* <Typography variant="body2" color="text.secondary">
//         Start searching for books and uncover all the secrets of the
//         world.
//       </Typography> */}
//     </CardContent>
//   </Card>
// </Box> */}
