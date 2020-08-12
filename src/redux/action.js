import {CHANGE_THEME, DECREMENT, DISABLE_BUTTON, ENABLED_BUTTON, INCREMENT} from "./types";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disabledBtn())
    setTimeout(() => {
      dispatch(increment())
      dispatch(enabledBtn())
    }, 1500)

  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}

export function disabledBtn() {
  return {
    type: DISABLE_BUTTON
  }
}

export function enabledBtn() {
  return {
    type: ENABLED_BUTTON
  }

}