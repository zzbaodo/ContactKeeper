import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initState = [];
  const [state, dispatch] = useReducer(alertReducer, initState);
  //Set aleart
  const setAlert = (msg, type) => {
    const id = Math.random();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      5000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        setAlert,
        alert: state
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
