import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 0.7rem;
  }
`
export const LocationWrapper = styled.div`
  background: ${(props) => props.theme['purple-300']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 4px;

  span,
  svg {
    color: ${(props) => props.theme['purple-700']};
  }
`

export const CartButton = styled.button`
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;

  position: relative;

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme.white};
    border-radius: 1000px;
    width: 1.25rem;
    height: 1.25rem;
  }
`
