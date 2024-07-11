import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #ffff9e;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Espaço entre os botões */

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &.edit {
    background-color: #f0c11a;
    color: white;

    &:hover {
      background-color: #44bd32;
    }
  }

  &.remove {
    background-color: #c23616;
    color: white;

    &:hover {
      background-color: #eb4d4b;
    }
  }
`;
