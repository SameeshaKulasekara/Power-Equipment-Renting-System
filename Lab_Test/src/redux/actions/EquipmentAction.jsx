import { equipmentActionType } from "../actionType/equipmentActionType";

export const insertEquipment  = (newEquipmentData) =>{
    return{
        type: equipmentActionType.INSERT_EQUIPMENT,
        payload:{
            newEquipmentData,
        }   
    };

};

export const updateEquipment =(equipmentID, updatedEquipmentData)=>{
console.log("equipmentID,updatedEquipmentData",equipmentID,updatedEquipmentData)
    return{
        type:equipmentActionType.UPDATE_EQUIPMENT,
        payload:{
            equipmentID,
            updatedEquipmentData
        }
    }
}

export const deleteEquipment=(equipmentID)=>{
    console.log("deleteEquipment",equipmentID)
    return{
        
        type:equipmentActionType.DELET_EQUIPMENT,
        payload:{
            equipmentID
        }
    }
}
export const getequipments=()=>{
    return{
        type:equipmentActionType.GET_EQUIPMENTS,   
    }
}

export const Rent=(equipmentID,RentCount)=>{
    console.log("Rent",equipmentID,"RentCount",RentCount)
    return{
        type:equipmentActionType.Rent_GET_EQUIPMENT,   
        payload:{
            equipmentID,
            RentCount,
        }
    }
}