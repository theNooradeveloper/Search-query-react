import './index.css'
import users from "./data";
import { useState } from "react";
export default function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <h1 style={{ marginTop: "2rem" }}>Data of Employees</h1>
      <table border={1} style={{ margin: "auto", marginTop: "2rem" }}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(
              (user) =>
                user.name.toLowerCase().includes(query) ||
                user.role.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.department.toLowerCase().includes(query)
            )
            .map((item) => {
              return (
                <tr key={item.sno}>
                  <td>{item.sno}</td>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.email}</td>
                  <td>{item.department}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
