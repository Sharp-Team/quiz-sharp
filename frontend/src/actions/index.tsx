import * as types from '../constants/ActionTypes'

export const addUser = ({username}: any) => ({
  type: types.ADD_USER,
  username: username
})

export const deleteUser = () => ({
  type: types.DELETE_USER
})