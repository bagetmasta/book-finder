import styled from "styled-components";

export const Section = styled.section`
  padding: 0 16px;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const BooksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004085;
    transform: translateY(1px);
  }
`;
