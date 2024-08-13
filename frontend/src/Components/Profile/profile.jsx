import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-picture" src="https://via.placeholder.com/150" alt="Profile" />
        <h1 className="profile-name">John Doe</h1>
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Phone:</strong> +1234567890</p>
        <p><strong>Location:</strong> New York, USA</p>
        <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula libero nec urna gravida, ut dictum libero varius.</p>
      </div>
    </div>
  );
}

export default Profile;
