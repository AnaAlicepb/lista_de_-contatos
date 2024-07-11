// src/styles/ContactListStyles.js
import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

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
`
