import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 20px;
  padding: 20px;
  flex-basis: calc((100% - 30px) / 1);

  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 425px) {
    flex-basis: calc((100% - 100px) / 2);
  }

  @media screen and (min-width: 1024px) {
    flex-basis: calc((100% - 160px) / 3);
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 220px) / 4);
  }
`;

export const Photo = styled.img`
  margin: auto;
`;

export const Box = styled.div`
  padding-top: 20px;
  max-width: 250px;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Category = styled.p`
  text-decoration: underline;
  color: grey;
  margin-bottom: 10px;
`;

export const Authors = styled.p`
  color: grey;
`;
