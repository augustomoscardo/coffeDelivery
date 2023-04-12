import { CoffeeList, OurCoffeesContainer } from './styles'

import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'

export function OurCoffees() {
  return (
    <OurCoffeesContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
