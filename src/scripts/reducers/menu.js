import { OPEN_MENU, CLOSE_MENU } from '../constants/menu'

const init = {
  state: 'init',
}

export default (state = init, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return { ...state, state: 'open' }
    case CLOSE_MENU:
      return { ...state, state: 'close' }
    default:
      return state
  }
}
