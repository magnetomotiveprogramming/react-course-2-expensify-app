//Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
      case 'ADD_EXPENSE':
      return [
          ...state,
          action.expense
      ];
      case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE':
      return state.map((obj)=>{
          if(obj.id === action.id){
              return{
                  ...obj,
                  ...action.updates
              }
          }else{
              return obj
          }
      })
  default:
    return state
  }
}

// export default expensesReducer;