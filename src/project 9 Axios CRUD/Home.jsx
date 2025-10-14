import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users" ) // ✅ use json-server endpoint
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="home">
      <nav>
        <h1>CRUD APP</h1>
        <button>Create</button>
        <table border={1} width={"80%"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <Link to ={`/update/${item.id}`}><button>Edit</button></Link>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="3">Contact us: qwerty@1234567</td>
            </tr>
          </tfoot>
        </table>
      </nav>
    </div>
  );
};

export default Home;
