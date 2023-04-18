import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  background: ${(props) => props.theme['gray-400']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0.35rem 0.5rem;
  width: 4.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const IconWrapper = styled.button`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme['purple-500']};
  transition: 0.4s;

  &:hover {
    color: ${(props) => props.theme['purple-700']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`
