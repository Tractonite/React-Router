import { Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import Products from './components/Products'
import CustomerCare from './components/CustomerCare'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/customer-care' element={<CustomerCare />} />
    </Routes>
  );
}

export default App;
