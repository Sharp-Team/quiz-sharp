const initialState = null

const user = (user = initialState, action: any) => {
  switch(action.type) {
    case 'ADD_USER': {
      return {
        username: action.username,
        password: action.password,
        avatar_url: action.avatar_url,
        email: action.email,
        dob: action.dob
      }
    }
    case 'DELETE_USER': {
      return null
    }
    default: 
      return user
  }
}

export default user
