import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-bottom: 1px solid black;
  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-bottom: 10px;
`;

export const Img = styled.img`
  width: 150px;
  margin-top: 20px;
`;

export const Text = styled.p`
  margin: 0px;
  font-weight: bold;
`;
