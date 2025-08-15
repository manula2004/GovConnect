import React, { useState } from 'react';
import './userProfile.css';
import './style.css'; 

const UserProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    phoneNumber: '',
    // Add other fields here
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfilePictureClick = () => {
    alert('Profile picture upload functionality would be implemented here');
  };

  return (
    <div className="container">
      <div className="header">
        <button className="back-btn">←</button>
      </div>

      <div className="profile-header">
        <div className="profile-picture-section">
          <div className="add-picture-text">Add profile picture</div>
          <div className="profile-picture" onClick={handleProfilePictureClick}>
            <div className="profile-icon"></div>
          </div>
          <div className="edit-profile-text">
            Edit user profile ✏️
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="form-section">
          <div className="form-group input-with-icon">
            <input 
              type="text" 
              className="form-input" 
              placeholder="Enter your Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <div className="input-icon">👤</div>
          </div>

          <div className="form-group input-with-icon">
            <input 
              type="date" 
              className="form-input" 
              placeholder="Enter your birth date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
            <div className="input-icon">📅</div>
          </div>

          <div className="form-group input-with-icon">
            <input 
              type="tel" 
              className="form-input" 
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <div className="input-icon">📞</div>
          </div>

          <div className="form-group">
            <input type="text" className="form-input" placeholder="Enter Address line 1" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Enter Address line 2" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="City" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Enter your Gender" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Nationality" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Blood Group" />
          </div>
        </div>

        <div className="form-section">
          <div className="section-title">Passport details</div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Passport number" />
          </div>
          <div className="form-group">
            <input type="date" className="form-input" placeholder="Date of Issue" />
          </div>
          <div className="form-group">
            <input type="date" className="form-input" placeholder="Date of Expiry" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Place of Issue" />
          </div>
        </div>

        <div className="form-section">
          <div className="section-title">License details</div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="License Number" />
          </div>
          <div className="form-group">
            <input type="date" className="form-input" placeholder="Date of Issue" />
          </div>
          <div className="form-group">
            <input type="date" className="form-input" placeholder="Date of Expiry" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Type/Class of Vehicle" defaultValue="eg: B , C1" />
            <div className="license-category-hint">eg: B , C1</div>
          </div>
        </div>
        
        {/* The 'Done' button now uses the globally defined '.btn-primary' class */}
        <button className="btn-primary">Done</button>
      </div>
    </div>
  );
};

export default UserProfile; 
