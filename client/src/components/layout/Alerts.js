import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import ErrorIcon from "@material-ui/icons/Error";

const Alerts = () => {
  const context = useContext(AlertContext);
  return (
    context.alert.length > 0 &&
    context.alert.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <ErrorIcon fontSize="inherit" />{' '}
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
