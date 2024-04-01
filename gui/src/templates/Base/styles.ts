import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  max-width: 1336px;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding: 20px 0;

  h1 {
    font-style: italic;
    color: #000;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  a {
    color: #000;
  }
`;