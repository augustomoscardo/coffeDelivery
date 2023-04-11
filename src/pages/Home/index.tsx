import { Banner } from './components/Banner'
import { OurCoffees } from './components/OurCoffess'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <OurCoffees />
    </HomeContainer>
  )
}
