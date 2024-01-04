import { Link } from "react-router-dom";
import "./Chat.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Chat() {
  let [data, setData] = useState([]);

  let getData = () => {
    axios
      .get("https://658c3077859b3491d3f5adbf.mockapi.io/contact-app")
      .then((resp) => {
        setData(resp.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let handleDelete = (id) => {
    axios
      .delete(`https://658c3077859b3491d3f5adbf.mockapi.io/contact-app/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="outer">
      <div className="contact-manager">
        <h2>Contact Manager</h2>
        <span>
          <i className="fa-solid fa-address-book"></i>
        </span>
      </div>
      <hr />

      <div className="contact-heading">
        <h3>Contact List</h3>
        <Link to="/add">
          <button>Add Contact</button>
        </Link>
      </div>

      {data.map((eachData) => {
        return (
          <>
            <div className="contacts">
              <div className="name-list">
                <div className="name">
                  <h4>{eachData.name}</h4>
                  <h4 id="phone">{eachData.phone}</h4>
                </div>
                <div className="icons">
                  <Link to={`/edit/${eachData.id}`}>
                    <span>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </span>
                  </Link>

                  <span
                    onClick={() => {
                      handleDelete(eachData.id);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Chat;
