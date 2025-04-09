import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Welcome, Admin!</h2>
      <div className="admin-content">
        <h3>Manage Users</h3>
        <button>View Users</button>
        <button>Add User</button>
        <button>Edit User</button>
        <button>Delete User</button>
      </div>
      <div className="admin-content">
        <h3>Manage Medications</h3>
        <button>View Medications</button>
        <button>Add Medication</button>
        <button>Edit Medication</button>
        <button>Delete Medication</button>
      </div>
      <div className="admin-content">
        <h3>Settings</h3>
        <button>Change Admin Settings</button>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
