import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEquipment, updateEquipment } from '../redux/actions/EquipmentAction';

const EquipmentsDetails = () => {
  const { equipmentID } = useParams();
  const dispatch = useDispatch();
  const equipmentsList = useSelector((state) => state.equipmentsList.equipments);
  const navigate = useNavigate();
  const [equipmentData, setEquipmentData] = useState({});

  const Equipment = equipmentsList.find((equipment) => book.ID === Number(equipmentID));

  if (!Equipment) {
    return <div>Equipment not found</div>;
  }

  const handleUpdate = () => {
    dispatch(updateEquipment(equipmentID, equipmentData));
    console.log("equipmentData",equipmentData)
    navigate('/');
  };

  const handleDelete = () => {
    dispatch(deleteEquipment(equipmentID));
    navigate('/');
  };

  const handleChange = (e) => {
    setEquipmentData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h1>Equipment Details for EquipmentID: {equipmentID}</h1>

      <form>
        <div>
        <label htmlFor="equipmentName">Name:</label>
        <input
          type="text"
          id="equipmentName"
          name="equipmentName"
          defaultValue={Equipment.EquipmentName}
          onChange={handleChange}
        /></div>
          <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={Equipment.Description}
          onChange={handleChange}
        /></div>

        <div>
        <label htmlFor=" rental_price"> Rental price:</label>
        <input
          type="text"
          id=" rental_price"
          name=" rental_price"
          defaultValue={Equipment. Rental_price}
          onChange={handleChange}
        />
        </div>
<div>
        <label htmlFor="availability">Availability:</label>
        <input
          type="text"
          id="availability"
          name="availability"
          defaultValue={Equipment.Availability}
          onChange={handleChange}
        />
        </div>
<div>

        </div>
      </form>

      <button
        style={{ background: '#C07F00', margin: '1rem' }}
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        style={{ background: '#E74646' }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default BooksDetails;
