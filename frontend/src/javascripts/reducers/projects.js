import { actionTypes } from '../constants'

export default (state = null, action) => {
  switch(action.type) {
    case actionTypes.SET_CURRENT_USER_ALL_PROJECTS:
      return action.currentUserAllProjects

    default:
      return state
  }
}
