
const initialState=10;
const updateNumber=(state=initialState,action)=>{

    if(action.type==='increment'){
        return state + 500;
    }
    else if(action.type === 'decrement'){
        return state - 500;
    }
    else{
        return state;
    }
   

}
export default updateNumber;