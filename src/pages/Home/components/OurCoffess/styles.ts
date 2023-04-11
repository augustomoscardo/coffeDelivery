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

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
`

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-200']};

  img {
    width: 7.5rem;
    height: 7.5rem;
    object-fit: cover;
  }

  span {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 1rem;
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
  }

  div {
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;
    border-radius: 100px;
    padding: 0.05rem 0.5rem;
    margin-top: 1rem;
  }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-700']};

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 1.3;
      margin-left: 0.125rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 7.5rem;

  > button {
    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme['gray-200']};

    border: none;
    border-radius: 6px;
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`
