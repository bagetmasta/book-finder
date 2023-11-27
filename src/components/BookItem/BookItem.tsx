import { Item } from "./BookItem.styled";

interface BookItemProps {
  title: string;
  image: string;
  authors: string[];
  categories: string[];
}

function BookItem({ title, image, authors, categories }: BookItemProps) {
  return (
    <Item>
      <div>{title}</div>
      <div>{image}</div>
      <div>{authors}</div>
      <div>{categories}</div>
    </Item>
  );
}

export default BookItem;
