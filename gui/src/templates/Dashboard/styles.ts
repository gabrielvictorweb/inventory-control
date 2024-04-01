import styled, { createGlobalStyle } from 'styled-components';

export const Body = createGlobalStyle`
  body {
    background-color: #1E1E1E;
    color: #FFFFFF;
  }
`;

export const Container = styled.div`
  display: flex;

  @media (min-width: 700px) {
    padding-left: 300px;
    min-height: 100vh;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-color: #1e1e1e;

  @media (min-width: 700px) {
    max-width: 300px;
  }
`;

export const Content = styled.div`
  flex: 1;
  min-height: 100vh;

  padding: 1rem;

  background-color: rgba(0, 0, 0, 0.2);
`;
