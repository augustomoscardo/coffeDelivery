import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLaylout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { SuccessOrder } from './pages/SuccessOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}
