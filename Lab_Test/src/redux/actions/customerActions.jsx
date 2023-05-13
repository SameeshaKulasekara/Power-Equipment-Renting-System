import { customerActionType } from "../actionType/customerActionType";


export const inserCustomer  = (newCustomerData) =>{
    return{
        type: customerActionType.ADD_CUSTOMER,
        payload:{
            newCustomerData,
        }   
    };

};

export const updatecustomer =(customerID, updatedcustomerData)=>{
console.log("customerID,updatedcustomerData",customerID,updatedcustomerData)
    return{
        type:customerActionType.UPDATE_CUSTOMER,
        payload:{
            customerID,
            updatedcustomerData
        }
    }
}

export const deletecustomer=(customerID)=>{
    console.log("deletecustomer",customerID)
    return{
        
        type:customerActionType.DELETE_CUSTOMER,
        payload:{
            customerID
        }
    }
}
export const getcustomers=()=>{
    return{
        type:customerActionType.GET_CUSTOMERS,   
    }
}