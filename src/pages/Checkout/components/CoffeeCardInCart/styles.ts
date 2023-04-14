import styled from 'styled-components'

export const CoffeCard = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;

    div {
      width: 100%;
      display: flex;
      gap: 0.5rem;
    }
  }

  p {
    margin-left: 2.5rem;
  }
`
