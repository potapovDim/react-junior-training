const ENTER_DATA = 'ENTER_DATA' 

const initialState = {
  name: ''
}


export const enterName = name => {
  return{
    type:ENTER_DATA,
    name
  }
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case ENTER_DATA:
      return {...state, name: action.name}
    default :
      return state
  }
}
