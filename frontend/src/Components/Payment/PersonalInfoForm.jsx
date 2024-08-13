import React from 'react';

const PersonalInfoForm = ({ name, setName, email, setEmail, phone, setPhone, address, setAddress, onFormChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'address') setAddress(value);
    // Panggil fungsi onFormChange untuk memeriksa apakah semua input sudah terisi
    onFormChange();
  };

  return (
    <div className="personal-info-form">
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label className="address-label"> {/* Menggunakan kelas address-label */}
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
