import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getequipments } from '../../redux/actions/equipmentAction';
const Equipments = () => {

  const equipmentsList = useSelector((state) => state.equipmentsList.equipments)
  console.log("equipments arry",equipmentsList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getequipments())//using thunk middleware

  }, [1]);

  
  const navigate = useNavigate();

  const handeinsert =()=>{
    navigate('/addequipment');
  }
    const handeView=(ID)=>{
      
      navigate(`equipmentDetails/${ID}`);
      }
  return (
    <div>
       <div style={{ justifyContent: 'center', textAlign: 'center',}}>
        <h1>Equipments List</h1>
        <div> <button onClick={()=>handeinsert()}>Insert New Equipment</button></div>
        <table style={{ margin: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Rental_price</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipmentsList.map(item => (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.EquipmentsName}</td>
                <td>{item.Description}</td>
                <td>{item.Rental_price}</td>
                <td>{item.Availability}</td>
                <td><button style={{background:"green"}} onClick={() => handeView(item.ID)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Equipments
