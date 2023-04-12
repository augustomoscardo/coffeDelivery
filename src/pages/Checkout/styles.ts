import styled from 'styled-components'

export const CheckouContainer = styled.main`
  width: 100%;
  padding: 6rem 10rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }
`
export const CheckoutFormContainer = styled.div`
  width: 40rem;
`

export const FormWrapper = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};

  > div {
    display: flex;
    /* align-items: center; */
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-700']};
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.125rem;

      span {
        display: block;
        line-height: 1.3;
        color: ${(props) => props.theme['gray-800']};
      }

      p {
        line-height: 1.3;
        font-size: 0.875rem;
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }
`

export const PaymentMethods = styled.div``

export const SelectedCoffeesWrapper = styled.div`
  width: 28rem;

  div {
    background: ${(props) => props.theme['gray-200']};
    padding: 2.5rem;
  }
`
