import { useDispatch } from "react-redux";
import { setSearchParams } from "../../redux/searchParamsSlice";
import { useNavigate } from "react-router-dom";
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
import Notiflix from "notiflix";
import { Loading } from "notiflix/build/notiflix-loading-aio";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("query") as string;

    if (!query.trim()) {
      Notiflix.Notify.warning("Please enter a search term.");
      return;
    }

    navigate("/", { replace: true });
    const category = formData.get("category") as string;
    const orderBy = formData.get("orderBy") as string;

    Loading.hourglass("Loading...");
    await dispatch(
      setSearchParams({ query, category, orderBy, page: 1, hasSearch: true })
    );
    Loading.remove();
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
