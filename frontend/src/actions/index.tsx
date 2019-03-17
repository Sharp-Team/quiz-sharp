import * as types from '../constants/ActionTypes'

export const addUser = ({ username, password, avatar_url, email, dob }: any) => ({
  type: types.ADD_USER,
  username,
  password,
  avatar_url,
  email,
  dob
})

export const deleteUser = () => ({
  type: types.DELETE_USER
})