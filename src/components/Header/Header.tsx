import { useDispatch } from "react-redux";
import { setSearchParams } from "../../redux/searchParamsSlice";
import {
  HeaderBox,
  Title,
  InputPrimaryBox,
  InputSecondaryBox,
  PrimaryFlexBoxForSelect,
  SecondaryFlexBoxForSelect,
  Text,
  Input,
  SubmitButton,
  StyledSelect,
} from "./Header.styled";
import { MenuItem } from "@mui/material";
import { ReactComponent as SearchIconSVG } from "../../images/magnifying-glass.svg";

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
    <HeaderBox>
      <Title>Search for books</Title>
      <form onSubmit={handleSubmit}>
        <InputPrimaryBox>
          <InputSecondaryBox>
            <Input
              name="query"
              type="text"
              placeholder="Find knowledge..."
              aria-label="Search for books"
            />
            <SubmitButton type="submit">
              <SearchIconSVG width="20px" height="20px" />
            </SubmitButton>
          </InputSecondaryBox>
        </InputPrimaryBox>
        <PrimaryFlexBoxForSelect>
          <SecondaryFlexBoxForSelect>
            <Text>Categories</Text>
            <StyledSelect
              name="category"
              aria-label="Select category"
              defaultValue="all"
            >
              <MenuItem value="all">all</MenuItem>
              <MenuItem value="art">art</MenuItem>
              <MenuItem value="biography">biography</MenuItem>
              <MenuItem value="computers">computers</MenuItem>
              <MenuItem value="history">history</MenuItem>
              <MenuItem value="medical">medical</MenuItem>
              <MenuItem value="poetry">poetry</MenuItem>
            </StyledSelect>
          </SecondaryFlexBoxForSelect>
          <SecondaryFlexBoxForSelect>
            <Text>Sorting by</Text>
            <StyledSelect
              name="orderBy"
              aria-label="Select sorting method"
              defaultValue="relevance"
            >
              <MenuItem value="relevance">relevance</MenuItem>
              <MenuItem value="newest">newest</MenuItem>
            </StyledSelect>
          </SecondaryFlexBoxForSelect>
        </PrimaryFlexBoxForSelect>
      </form>
    </HeaderBox>
  );
}

export default Header;
