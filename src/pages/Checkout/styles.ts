import styled from 'styled-components'

export const CheckoutContainer = styled.main`
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
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 1rem;
  background: ${(props) => props.theme['gray-200']};

  > div {
    width: 100%;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const BaseInput = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['gray-300']};

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`

export const CEPInput = styled(BaseInput)`
  width: 12.5rem;
`
export const StreetInput = styled(BaseInput)`
  flex: 1;
`
export const LocationNumberInput = styled(BaseInput)`
  width: 12.5rem;
`
export const ComplementInput = styled(BaseInput)`
  flex: 1;
`
export const NeighborhoodInput = styled(BaseInput)`
  width: 12.5rem;
`
export const CityInput = styled(BaseInput)`
  flex: 1;
`
export const UFInput = styled(BaseInput)`
  width: 3.75rem;
`

export const Payment = styled.div`
  width: 100%;
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};

  > div {
    width: 100%;
    display: flex;
    /* align-items: center; */
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-500']};
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

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  input {
    visibility: hidden;
    appearance: none;
  }
`

export const PaymentMethodInput = styled.div``

export const SelectedCoffeesWrapper = styled.div`
  width: 28rem;

  div {
    background: ${(props) => props.theme['gray-200']};
    padding: 2.5rem;
  }
`
