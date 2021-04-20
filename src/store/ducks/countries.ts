import { Dispatch } from 'redux'
import api from '../../services'

export const Types = {
  SET_SUCCESS: 'ui/SET_SUCCESS',
  SET_ERRORS: 'ui/SET_ERRORS',
  CLEAR_ERRORS: 'ui/CLEAR_ERRORS',
  LOADING_UI: 'ui/LOADING_UI',
  SET_COUNTRY_LIST: 'countries/SET_COUNTRY_LIST',
}

const initialState = {
  countryList: false,
}

export default function reducer(
  state = initialState,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case Types.SET_COUNTRY_LIST:
      return {
        ...state,
        countryList: action.payload,
      }

    default:
      return state
  }
}

export const Creators = {
  getCountryList: () => (dispatch: Dispatch) => {
    dispatch({ type: Types.LOADING_UI })
    api
      .get('/v2/all')
      .then((resp) => {
        dispatch({
          type: Types.SET_COUNTRY_LIST,
          payload: resp.data,
        })
        dispatch({ type: Types.CLEAR_ERRORS })
      })
      .catch((err) => {
        dispatch({
          type: Types.SET_ERRORS,
          payload: err,
        })
      })
  },
}
