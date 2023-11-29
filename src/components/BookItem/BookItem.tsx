import { Item, Photo, Box, Title, Category, Authors } from "./BookItem.styled";
import { NavLink, useLocation } from "react-router-dom";

interface BookItemProps {
  title: string;
  image: string;
  authors: string[];
  categories: string[];
  id: string;
}

function BookItem({ title, image, authors, categories, id }: BookItemProps) {
  const location = useLocation();

  return (
    <Item>
      <NavLink to={`/books/${id}`} state={{ from: location }}>
        <Photo src={image} alt={title} />
        <Box>
          {categories && <Category>{categories[0]}</Category>}
          <div>
            <Title>{title}</Title>
            {authors && <Authors>{authors.join(", ")}</Authors>}
          </div>
        </Box>
      </NavLink>
    </Item>
  );
}

export default BookItem;
