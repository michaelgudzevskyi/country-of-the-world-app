import { Dispatch } from 'redux'
import api from '../../services'

export const Types = {
  SET_ERRORS: 'ui/SET_ERRORS',
  CLEAR_ERRORS: 'ui/CLEAR_ERRORS',
  LOADING_UI: 'ui/LOADING_UI',
  SET_COUNTRY_LIST: 'countries/SET_COUNTRY_LIST',
}

const initialState = {
  countryList: false,
  error: false,
  loading: false,
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
    case Types.LOADING_UI:
      return {
        ...state,
        loading: true,
      }
    case Types.SET_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case Types.CLEAR_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
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
        dispatch({ type: Types.CLEAR_ERRORS, payload: false })
      })
      .catch((err) => {
        dispatch({
          type: Types.SET_ERRORS,
          payload: err,
        })
      })
  },
  getCountryFilter: (value: string) => (dispatch: Dispatch) => {
    dispatch({ type: Types.LOADING_UI })
    api
      .get(`/v2/name/${value}`)
      .then((resp) => {
        dispatch({
          type: Types.SET_COUNTRY_LIST,
          payload: resp.data,
        })
        dispatch({ type: Types.CLEAR_ERRORS, payload: false })
      })
      .catch((err) => {
        if (err?.message === 'Request failed with status code 404') {
          dispatch({
            type: Types.SET_ERRORS,
            payload: 'Country not found.',
          })
          dispatch({
            type: Types.SET_COUNTRY_LIST,
            payload: null,
          })
        }
      })
  },
}
