import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  margin: 0 1%;

  padding: 20px 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: normal;

  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #666;
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
`;

export const Box = styled.div`
  background-color: #00000010;
  padding: 20px;

  border-radius: 20px;
`;

export const TitleBox = styled.h1`
  font-size: 1rem;
  font-weight: normal;

  margin-bottom: 10px;
`;
