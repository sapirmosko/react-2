import React from "react";
import "./FormPopUp.css";

function FormPopUp({ show, close }) {
  return (
    <div className={`form-pop-up ${show ? "show" : ""}`}>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
        <button type="button" onClick={close}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default FormPopUp;
