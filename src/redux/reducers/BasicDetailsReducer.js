import { spend_limit } from "../Type"


let emptyState = {
    sp_limit:5000
  };
export default (state = emptyState ,action) =>{
    
    switch(action.type){

        case spend_limit:
        return {
            ...emptyState,
            sp_limit:action.payload
        }
        break;

        default:
        return state

    }

};