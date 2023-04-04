import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  .location {
    background: ${(props) => props.theme['purple-300']};
    padding: 0.5rem 0.625rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 4px;

    span,
    svg {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  .cartButton {
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    padding: 0.6rem;
    border: 0;
    border-radius: 6px;
  }
`
