import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
    
  const {id} = useParams();
  let [values, setValues] = useState({
    id:id,
    name: "",
    phone: "",
  });

  let handleValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  let move = useNavigate();

  

  useEffect(()=>{
    axios
    .get("https://658c3077859b3491d3f5adbf.mockapi.io/contact-app/"+id)
    .then((resp)=>{
        setValues({
            ...values,
            id: resp.data.id,
            name:resp.data.name,
            phone:resp.data.phone

        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
      
    });

  },[]);

  let handleSubmit = (event) => {
    event.preventDefault();
    //  console.log(values);
    if (values.phone.length !== 10) {
      alert("Phone Number should have 10 digit");
    } else {
      event.preventDefault();
      axios
        .put("https://658c3077859b3491d3f5adbf.mockapi.io/contact-app/"+id, values)
        .then(() => {
          move("/chat");
        })
        .catch(error => {
      console.error("Error fetching data:", error);
    });
    }
  };


  return (
    <>
      <div className="outer">
        <form onSubmit={handleSubmit}>
          <h2>Edit Contact Details</h2>
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
