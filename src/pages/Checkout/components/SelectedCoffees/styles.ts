import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  width: 28rem;

  > div {
    width: 100%;
    background: ${(props) => props.theme['gray-200']};
    padding: 2.5rem;
    margin-top: 1rem;
    border-radius: 6px 44px;
  }
`

export const SummaryCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PriceWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      /* font-size: 0.875rem; */
    }

    &:last-child {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};
      font-weight: 700;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  flex: 1;
  margin-top: 2.25rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-500']};
  padding: 0.75rem 7.35rem;

  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
