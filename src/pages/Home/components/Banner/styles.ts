import styled, { css } from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  width: 100%;

  .bannerTitle {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 36.75rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 3rem;
      color: ${(props) => props.theme['gray-900']};
    }

    > p {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.6;
      color: ${(props) => props.theme['gray-800']};
    }

    .qualities {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.25rem;

      div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 18rem;

        p {
          flex: 1;
          font-size: 1rem;
          line-height: 1.2;
          color: ${(props) => props.theme['gray-700']};
          white-space: nowrap;
        }
      }
    }
  }
`

export type IconVariant =
  | 'darkYellow'
  | 'darkGray'
  | 'mediumYellow'
  | 'mediumPurple'

interface IconContainerProps {
  variant: IconVariant
}

const iconVariants = {
  darkYellow: defaultTheme['yellow-700'],
  darkGray: defaultTheme['gray-700'],
  mediumYellow: defaultTheme['yellow-500'],
  mediumPurple: defaultTheme['purple-500'],
}

export const IconContainer = styled.span<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 9999px;
  color: ${(props) => props.theme.white};

  ${(props) =>
    css`
      background-color: ${iconVariants[props.variant]};
    `};
`
