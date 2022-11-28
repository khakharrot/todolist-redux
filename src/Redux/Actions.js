import { ADD_TASK,SEARCH,EDIT } from "./actionTypes";

export const addhandler = (newTask) => {
return {
    type:ADD_TASK,
    payload:newTask
 }
}
export const search = (term) => {
    return {
        type:SEARCH,
        payload:term
     }
     
}
export const edittaskk = (taskedit) => {
    return {
        type:EDIT,
        payload: taskedit
    }
}
    export const check = (oldTask) => {
        return {
            type:SEARCH,
            payload:oldTask
         }
        }