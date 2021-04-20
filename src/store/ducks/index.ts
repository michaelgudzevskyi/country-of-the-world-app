import { CombinedState, combineReducers } from 'redux'

import countries from './countries'

const reducers = combineReducers({
  countries,
})

// reset the state of a redux store
const rootReducer = (
  state: CombinedState<{ countries: never }> | undefined,
  action: { type: string; payload: string }
) => {
  return reducers(state, action)
}

export default rootReducer
