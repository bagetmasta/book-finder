import { Item, Photo, Box, Title, Category, Authors } from "./BookItem.styled";

interface BookItemProps {
  title: string;
  image: string;
  authors: string[];
  categories: string[];
}

function BookItem({ title, image, authors, categories }: BookItemProps) {
  return (
    <Item>
      <Photo src={image} alt={title} />
      <Box>
        {categories && <Category>{categories[0]}</Category>}
        <div>
          <Title>{title}</Title>
          {authors && <Authors>{authors.join(", ")}</Authors>}
        </div>
      </Box>
    </Item>
  );
}

export default BookItem;
