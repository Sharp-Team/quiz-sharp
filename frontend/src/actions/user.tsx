export const login = ({ username, password, avatar_url, email, dob }: any) => ({
  type: 'ADD_USER',
  username,
  password,
  avatar_url,
  email,
  dob
})

export const logout = () => ({
  type: 'DELETE_USER'
})