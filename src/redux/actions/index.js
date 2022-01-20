import { spend_limit} from '../Type'
export const spendLimit = (data) =>{

    return{
        type: spend_limit,
        payload : data
    };
};