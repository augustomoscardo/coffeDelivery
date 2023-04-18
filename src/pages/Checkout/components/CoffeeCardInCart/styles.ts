import styled from 'styled-components'

export const CoffeCard = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  p {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['gray-800']};
    line-height: 1.3;
  }
`
export const ButtonActionsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-400']};

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
