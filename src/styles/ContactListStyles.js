import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px; /* Altura máxima do contêiner */
  overflow-y: auto; /* Habilita a rolagem vertical apenas quando necessário */
  padding: 10px; /* Adiciona padding interno */
  border: 1px solid #ddd; /* Define a borda */
  border-radius: 5px; /* Adiciona bordas arredondadas */
`;

export const ContactItemWrapper = styled.div`
  flex: 1 1 100%;

  @media (min-width: 576px) {
    flex: 1 1 48%;
    margin: 1%;
  }

  @media (min-width: 768px) {
    flex: 1 1 30%;
    margin: 1%;
  }
`;
