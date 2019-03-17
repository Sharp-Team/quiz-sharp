const initialState = null

const user = (user = initialState, action: any) => {
  switch(action.type) {
    case 'ADD_USER': {
      return action.username
    }
    case 'DELETE_USER': {
      return null
    }
    default: 
      return user
  }
}

export default user
