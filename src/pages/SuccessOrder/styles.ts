import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;
  padding: 6rem 10rem;

  > section {
    display: flex;
    align-items: center;
    gap: 6.375rem;
  }
`

export const ConfirmMessageWrapper = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const OrderInfo = styled.div`
  width: 33rem;
  margin-top: 2.5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  background: white;

  border-radius: 6px 36px;

  &::after {
    content: '';
    position: absolute;
    inset: -1px; /*  */
    z-index: -1;
    border-radius: 6px 36px;
    background: linear-gradient(to right, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
