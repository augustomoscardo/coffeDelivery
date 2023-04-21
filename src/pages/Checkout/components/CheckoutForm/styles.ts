import styled from 'styled-components'

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
`

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;

    &:first-child {
      width: 12.5rem;
    }

    &:nth-child(2) {
      flex: 1;
    }

    &:last-child {
      width: 3.75rem;
    }
  }
`

type InputVariant = 'sm' | 'md' | 'lg'

interface BaseInputProps {
  width: InputVariant
}

const inputVariants = {
  sm: '3.75rem',
  md: '12.5rem',
  lg: '100%',
}

export const BaseInput = styled.input<BaseInputProps>`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['gray-300']};
  width: ${(props) => inputVariants[props.width]};

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-700']};
  }
`

export const ComplementInputWrapper = styled.span`
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 0 4px 4px 0;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-left: none;
  background-color: ${(props) => props.theme['gray-300']};

  p {
    font-style: italic;
    font-size: 0.75rem;
    padding: 0.75rem;

    color: ${(props) => props.theme['gray-600']};
  }
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
  margin-top: 2rem;
  margin-bottom: 0.25rem;

  input {
    visibility: hidden;
    appearance: none;
  }
`

export const PaymentMethodInput = styled.div`
  input:checked + label {
    border: 1px solid ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-300']};
  }

  label {
    width: 11.25rem;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-400']};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['gray-500']};
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 0.875rem;
    }
  }
`

export const InputControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme['yellow-700']};
  font-size: 0.75rem;
`
