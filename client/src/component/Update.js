import axios from "axios";
import React, { useEffect, useState } from "react";
// import {useDispatch} from 'react-redux'
import { useNavigate, useParams } from "react-router";
import { updateCont, GetUniqueContact } from "../api/contact";
const Update = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  //ici juste bich tjib hekel data w tbdeilha khw
  const getContactbyId = async (contactId) => {
    const data = await GetUniqueContact(contactId);
    console.log("datagetunique", data);
    setEmail(data.getuser.email);
    setAge(data.getuser.age);
    setName(data.getuser.name);
  };

  //partie jiben les donnée
  useEffect(() => {
    if (id) {
      getContactbyId(id);
    }
  }, [id]);

  const handleSubmit = async (contactId, newValue) => {
    await updateCont(contactId, newValue);

    // console.log('addingContact',handleSubmit),
    navigate("/contacts");
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={() => handleSubmit(id, { name, age, email })}>
          update user{" "}
        </button>
      </div>
    </div>
  );
};

export default Update;
