import styled from "styled-components";
import booksBg from "../../images/books-bg.jpg";
import MuiSelect from "@mui/material/Select";

export const HeaderBox = styled.header`
  background-image: url(${booksBg});
  height: auto;
  background-size: cover;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  padding-top: 20px;
  margin-bottom: 10px;
`;

export const InputPrimaryBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const InputSecondaryBox = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid black;
  border-radius: 4px;
  outline: none;

  &:focus {
    border: 2px solid blue;
  }

  &::placeholder {
    color: #888;
    font-family: "Roboto";
    font-style: italic;
  }

  @media screen and (min-width: 425px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 4px;
  bottom: 3px;
  cursor: pointer;
`;

export const PrimaryFlexBoxForSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
`;

export const SecondaryFlexBoxForSelect = styled.div`
  @media screen and (min-width: 425px) {
    display: flex;
    align-items: center;
  }
`;

export const Text = styled.p`
  color: #fff;

  @media screen and (max-width: 424px) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 425px) {
    margin-right: 7px;
  }
`;

export const StyledSelect = styled(MuiSelect)`
  .MuiSelect-select {
    background-color: white;
    color: black;
    padding: 5px;
    width: 70px;

    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;
