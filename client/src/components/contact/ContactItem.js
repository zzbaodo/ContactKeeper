import React,{useContext} from "react";
import PropTypes from "prop-types";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { name, phone, email, _id, type } = contact;
  const context = useContext(ContactContext);
  const {deleteContact, setCurrent,clearCurrent} = context
  const onDelete= ()=>{
    deleteContact(_id)
    clearCurrent()
  }
  const onEdit = ()=>{
      setCurrent(contact)
  }
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
        </span>
      </h3>
      <ul className="list">
        {email && <li><MailOutlineIcon fontSize='inherit' />{' '}{email}</li>}
        {phone && <li><PhoneIcon fontSize='inherit'/>{' '}{phone}</li>}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onEdit}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
