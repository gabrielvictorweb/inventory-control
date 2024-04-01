import styled from 'styled-components';

export const Container = styled.div`
  background-color: #111;

  border: 1px solid #eeeeee26;
  border-radius: 7px;

  min-width: 300px;

  -webkit-box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 0.75);

  color: #ccc;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 0.7rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0 1rem 1rem 1rem;
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  font-weight: bold;

  width: 30px;
  height: 30px;
  border-radius: 30px;

  border: 2px solid #ccc;

  padding: 1rem;
`;

export const Title = styled.div``;
