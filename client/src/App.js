import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/user/list`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <table className="table">
      <th>ID</th>
      <th>Name</th>
      {user.length > 0 &&
        user.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.username}</td>
            </tr>
          );
        })}
    </table>
  );
}

export default App;
