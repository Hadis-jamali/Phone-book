import React from "react";
import "../App.css";

function PhoneBookForm() {
  return (
    <>
      <form className="form-container">
        <label>First name</label>
        <br />
        <input className="inputs-forms" type="text" />

        <br />

        <label>Last name</label>
        <br />
        <input className="inputs-forms" type="text" />

        <br />

        <label>Phone</label>
        <br />
        <input className="inputs-forms" type="text" />

        <br />
        <input type="submit" className="submitBtn" />
      </form>
    </>
  );
}

export default PhoneBookForm;
