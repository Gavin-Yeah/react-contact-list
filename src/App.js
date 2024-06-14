import React, { useEffect, useState } from 'react';
import './style.css';
import Form from './components/Form.js';

const url = 'https://jsonplaceholder.typicode.com/users';

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setUsers(json);
      });
  }, []);

  return (
    <div className="container">
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>name</td>
            <td>email</td>
            <td>website</td>
          </tr> */}
        </tbody>
      </table>
      <Form setUsers={setUsers} />
    </div>
  );
}
