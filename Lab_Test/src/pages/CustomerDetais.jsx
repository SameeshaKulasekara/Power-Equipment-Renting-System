import  { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletecustomer, updatecustomer } from '../redux/actions/customerActions';

const CustomerDetais = () => {
    const {customerID} =useParams();
    // Find the customer with the matching ID

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const customerList = useSelector((state) => state.customerList.customers);
  
  const customer = customerList.find((customer) => customer.ID === Number(customerID));
  const [userData, setuserData] = useState({});
  
  if (!customer) {
    return <div>Customer not found</div>;
  }
  const handleUpdate = () => {
    dispatch(updatecustomer(customerID, customerData));
    console.log("customerData",customerData )
     navigate('/');
    dispatch(borrowBook(customerData.equipmentID,customerData.BorrowedBooks ))
  };

  const handleDelete = () => {
    // Logic for deleting the user
    dispatch(deleteuser(userID));
    navigate('/');
  };
  const handleChange = (e) => {
    setuserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <h1>user Details for userID: {userID}</h1>

      <form>
        <div>
        <label htmlFor="userName">user Name:  </label>
        <input
          type="text"
          id="Name"
          name="Name"
          defaultValue={user.Name}
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="Email">Email: </label>
        <input
          type="text"
          id="Email"
          name="Email"
          defaultValue={user.Email}
          onChange={handleChange}
        />
        </div>
<div>
        <label htmlFor="PhoneNumber">Phone Number: </label>
        <input
          type="text"
          id="PNumber"
          name="PNumber"
          defaultValue={user.PNumber}
          onChange={handleChange}
        />
        </div>

        <label htmlFor="publicationDate">BookID:</label>
        <input
          type="text"
          id="BookID"
          name="BookID"
          defaultValue={user.BookID}
          onChange={handleChange}
        />
<div>
        <label htmlFor="userTitle">BorrowedBooks:</label>
        <input
          type="text"
          id="BorrowedBooks"
          name="BorrowedBooks"
          defaultValue={user.BorrowedBooks}
          onChange={handleChange}
        />
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
  
  )
}

export default USerDetais
