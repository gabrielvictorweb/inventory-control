import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  margin: 0 1%;

  padding: 40px 0;

  text-align: center;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: normal;

  margin-bottom: 10px;
`;
