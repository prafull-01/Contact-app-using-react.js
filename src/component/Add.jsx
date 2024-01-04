import { useState } from "react";
import { Link } from "react-router-dom";
import "./Add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  let [values, setValues] = useState({
    name: "",
    phone: "",
  });

  let handleValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const header = { "Access-Control-Allow-Origin": "*" };

  let move = useNavigate();

  let handleSubmit = (event) => {
    event.preventDefault();
    //  console.log(values);
    if (values.phone.length !== 10) {
      alert("Phone Number should have 10 digit");
    } else {
      event.preventDefault();
      setValues({
        name: "",
        phone: "",
      });
      axios
        .post("https://658c3077859b3491d3f5adbf.mockapi.io/contact-app", {
          name: values.name,
          phone: values.phone,
          header,
        })
        .then(() => {
          move("/chat");
        });
    }
  };

  return (
    <>
      <div className="outer">
        <form onSubmit={handleSubmit}>
          <h2>Contact Details</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            value={values.name}
            onChange={handleValue}
            required
          />
          <label htmlFor="phone">Phone Number </label>
          <input
            type="number"
            placeholder="Enter Phone Number"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleValue}
            required
          />

          <button>Save </button>
        </form>
        <Link to="/chat">
          <button>Return</button>
        </Link>
      </div>
    </>
  );
}

export default Add;
