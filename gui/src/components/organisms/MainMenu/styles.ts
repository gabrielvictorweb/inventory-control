import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: 100vh;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 1.875rem;
  padding-right: 1.875rem;
  padding-top: 1.875rem;
`;

export const Logo = styled.h1`
  font-weight: bold;

  font-size: 1.2em;
  color: #fff;

  margin-bottom: 2.313rem;
`;

export const Hr = styled.hr`
  height: 1px;

  margin: 20px 0;

  background-color: rgba(255, 255, 255, 0.1);

  border: 0;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;

  gap: 5px;

  font-size: 0.8rem;
  font-weight: normal;

  margin-bottom: 1rem;

  color: #ddd;

  svg {
    cursor: pointer;
  }
`;

type TypeList = {
  disabled?: boolean;
};

export const List = styled.ul<TypeList>`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 1.8rem;

  a {
    color: ${(props) => (props.disabled ? '#666' : '#ddd')};
  }

  li {
    a {
      display: flex;
      align-items: center;

      gap: 5px;
    }
  }
`;
