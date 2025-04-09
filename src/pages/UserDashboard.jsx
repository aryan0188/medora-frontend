import React from 'react';

const UserDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <div className="dashboard-content">
        <h3>Your Information</h3>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <button>Edit Profile</button>
      </div>
      <div className="dashboard-content">
        <h3>Your Medications</h3>
        <p>No medications listed yet. Please add your medications.</p>
        <button>Add Medication</button>
      </div>
      <div className="dashboard-content">
        <h3>Settings</h3>
        <button>Change Password</button>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default UserDashboard;
