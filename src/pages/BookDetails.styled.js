import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackButton = styled(NavLink)`
  margin: 20px;
  display: inline-block;

  text-decoration: none;
  color: white;
  background-color: gray;
  padding: 3px 10px;
  border-radius: 4px;

  &:hover {
    background-color: green;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  padding: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Photo = styled.img`
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Categories = styled.p`
  color: grey;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 15px;
`;

export const Author = styled.p`
  color: grey;
  text-decoration: underline;
  margin-bottom: 15px;
`;

export const DescriptionCard = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 720px;
  width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
  hyphens: auto;

  @media (max-width: 320px) {
    padding: 10px;
  }
`;

export const BookInfoBox = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;
