import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const context = useContext(ContactContext);
  const text = useRef();
  const {filterContact, clearFilter, filter} = context
  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  useEffect(() => {
    if (filter === null) {
      text.current.value = "";
    }
  });
  return (
    <form>
      <input ref={text} type="text" placeholder="Filter" onChange={onChange} />
    </form>
  );
};

export default ContactFilter;


{/* <Fragment>
      {filter !== null
        ? filter.map((contact) => 
            <ContactItem key={contact.id} contact={contact} />
          )
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment> */}