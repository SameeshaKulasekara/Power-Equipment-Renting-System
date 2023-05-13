
import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import HomPage from './pages/HomPage';
import CustomerDetais from './Components/CustomerList/Customer';
import EquipmentDetail from './Components/EquipmentList/Equipments';
import InsertEquipment from './pages/InsertBook';
function App() {
 

  return (
    <>
<BrowserRouter>
<Routes>

<Route path="/" element={<HomPage/>} />
<Route path="/customerDetails/:userID" element={<CustomerDetais/>} />
<Route path="/equipmentDetails/:bookID" element={<EquipmentDetails/>} />
<Route path="/addequipment" element={<InsertEquipment/>} />
</Routes> 
</BrowserRouter>

    </>
  )
}

export default App
