import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 0.8rem;

  border-radius: 4px;
  border: 0;

  background-color: #000;
  border: 2px solid #000;
  color: #fff;

  font-weight: bold;

  cursor: pointer;

  -webkit-box-shadow: 0px 0px 23px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 23px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 23px -12px rgba(0, 0, 0, 0.75);

  &[disabled] {
    cursor: not-allowed;

    background-color: #111;
    border: 2px solid #111;
    color: #666;
  }
`;
