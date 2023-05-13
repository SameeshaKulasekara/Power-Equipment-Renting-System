import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { CustomerList } from '../../constants'
import { useNavigate } from 'react-router-dom'
import {getcustomers } from '../../redux/actions/customerActions'
const Customers = () => {
  const CustomerList = useSelector((state) => state.customerList.customers)
  console.log("customer  arry",CustomerList);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcustomers())//using thunk middleware

  }, [1]);
    const handeView =(id)=>{
        console.log("customerID",id)
        navigate(`customerDetails/${id}`);
        
    }
    
  return (
    <div>
      <div style={{ justifyContent: 'center', textAlign: 'center',  }}>
        <h1>Customer List</h1>
        <div> <button >Insert Customer</button></div>
        <table style={{ margin: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone_Number</th>
              <th>Rented_equipment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {CustomerList.map(item => (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.Name}</td>
                <td>{item.Address}</td>
                <td>{item.Phone_Number}</td>
                <td>{item.Rented_equipment}</td>
                <td><button style={{background:"green"}} onClick={() => handeView(item.ID)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers
