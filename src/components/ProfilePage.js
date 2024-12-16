import "./ProfilePage.css";
import React, { useState, useEffect } from "react";
import { useUser } from './UserContext'; // Import the custom hook

function ProfilePage() {
  const { user, setUser } = useUser(); // Access user data from context and the setter function
  const [formData, setFormData] = useState(user); // Initialize form data with the current user data

  // Load user profile data from localStorage when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setFormData(storedUser); // Update the form data with the stored user data
    }
  }, []);

  // Handle input change to update form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload for profile picture
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Save updated user profile
  const handleSave = () => {
    // Save the user data to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Update the user data in the context
    setUser(formData); // This will trigger a re-render in components like Header

    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <div className="container">
        <h1 className="profile-title">Your Profile</h1>

        {/* Profile Picture Section */}
        <div className="profile-image-container">
          <img
            src={formData.profilePic || "/default-profile.jpg"} // Default image if no profile picture
            alt="Profile"
            className="profile-image"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="profile-pic-upload"
          />
        </div>

        {/* Profile Form Section */}
        <div className="profile-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              className="form-textarea"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Tell us about yourself"
              className="form-textarea"
            />
          </div>
          <div className="form-actions">
            <button onClick={handleSave} className="save-button">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
