import './adminpage.css';
import React, { useState, useEffect } from 'react';
import './adminpage.css';

const AdminPanel = () => {
  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch('/api/books')
    .then(response => response.json())
    .then(data => setBooks(data));

    
    fetch('/api/orders')
    .then(response => response.json())
    .then(data => setOrders(data));

    
    fetch('/api/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, []);

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.name}
          </li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;