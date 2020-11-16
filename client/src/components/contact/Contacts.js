import React, { Fragment, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import CachedIcon from "@material-ui/icons/Cached";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filter, getContact, loading } = contactContext;
  useEffect(() => {
    getContact();
  }, []);
  if (contacts.length === 0 && loading === false) {
    return <h4>Please add a new contact</h4>;
  }
  return (
    <Fragment>
      {contacts.length > 0 && loading === false ? (
        <TransitionGroup>
          {filter.length !== 0
            ? filter.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  classNames="item"
                  timeout={500}
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  classNames="item"
                  timeout={500}
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <CachedIcon />
      )}
    </Fragment>
  );
};

export default Contacts;
