import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { filmAction } from '../store/film/film.slice'

const actions = {
  ...filmAction
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}