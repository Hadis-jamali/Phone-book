import React, { useState } from "react";
import "../App.css";

function PhoneBookForm() {
  const userObj = [];

  const defaultData = {
    id: null,
    userFirstname: "Hadis",
    userLastname: "Jamali",
    userPhone: "7889698",
  };

  const [users, setUsers] = useState(userObj);
  const [userState, setUserState] = useState(defaultData);

  const handleUserChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const handlerFormSubmit = (e) => {
    console.log("Form submitted:", userState);

    e.preventDefault();
    if (!userState.userFirstname || !userState.userLastname || !userState.userPhone) return;
    addUser(userState);
    setUserState(defaultData);
  };

  const addUser = (user) => {
    const newUser = { ...user, id: users.length + 1 };
    setUsers([...users, newUser]);
  };

  const sortContact = [...users].sort((a, b) => a.userLastname.localeCompare(b.userLastname));

  const display =
    sortContact.length > 0 ? (
      sortContact.map((user, index) => (
        <tr key={index}>
          <td className="tableCell">{user.userFirstname}</td>
          <td className="tableCell">{user.userLastname}</td>
          <td className="tableCell">{user.userPhone}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );

  return (
    <>
      <form className="form-container" onSubmit={handlerFormSubmit}>
        <label>First name</label>
        <br />
        <input
          className="inputs-forms"
          type="text"
          onChange={handleUserChange}
          name="userFirstname"
          value={userState.userFirstname}
        />

        <br />

        <label>Last name</label>
        <br />
        <input
          className="inputs-forms"
          type="text"
          onChange={handleUserChange}
          name="userLastname"
          value={userState.userLastname}
        />

        <br />

        <label>Phone</label>
        <br />
        <input
          className="inputs-forms"
          type="text"
          onChange={handleUserChange}
          name="userPhone"
          value={userState.userPhone}
        />

        <br />
        <input type="submit" className="submitBtn" />
      </form>

      <table>
        <thead>
          <tr>
            <th className="tableCell">First name</th>
            <th className="tableCell">Last name</th>
            <th className="tableCell">Phone</th>
          </tr>
        </thead>

        <tbody>{display}</tbody>
      </table>
    </>
  );
}

export default PhoneBookForm;
