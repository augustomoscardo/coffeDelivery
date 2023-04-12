import styled from 'styled-components'

export const OurCoffeesContainer = styled.section`
  margin-top: 7rem;
  width: 100%;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`
