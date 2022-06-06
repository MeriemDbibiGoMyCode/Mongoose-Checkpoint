import React, { useEffect } from "react";
import { fetchContacts } from "../api/contact";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../store/contactSlice";
import CardContact from "../component/CardContact";
const ListContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact);
  const getContact = async () => {
    const data = await fetchContacts();
    dispatch(setContacts(data.Contacts));
  };
  useEffect(() => {
    getContact();
  }, []);
  return (
    <div>
      {contacts.map((el) => (
        <CardContact contact={el} getContact={getContact} />
      ))}
    </div>
  );
};

export default ListContact;
