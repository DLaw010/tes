import React, { useState, useContext } from 'react';
import './Payment.css';
import { ShopContext } from '../../Context/ShopContext';
import PersonalInfoForm from './PersonalInfoForm';
import CartSummary from './CartSummary.jsx';

const PaymentComponent = () => {
  const { cartItem, getTotalCartAmount } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    const totalAmount = getTotalCartAmount();

    try {
      const response = await fetch('http://localhost:4000/createTransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          totalAmount,
          name,
          email,
          phone,
          address
        }),
      });
      const data = await response.json();
      setLoading(false);

      if (data.success) {
        if (window.snap) {
          window.snap.pay(data.transactionToken);
        } else {
          setError('Snap library not loaded');
          console.error('Snap library not loaded');
        }
      } else {
        setError(`Failed to create transaction: ${data.error}`);
        console.error('Failed to create transaction:', data.error);
      }
    } catch (error) {
      setLoading(false);
      setError('Error creating transaction');
      console.error('Error creating transaction:', error);
    }
  };

  // Mengubah nilai state isFormFilled saat semua input terisi
  const handleFormChange = () => {
    if (name && email && phone && address) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  return (
    <div className={`payment-container ${isFormFilled ? 'form-filled' : ''}`}>
      <div className="payment-form">
        <PersonalInfoForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          onFormChange={handleFormChange} // Memanggil fungsi handleFormChange saat ada perubahan di form
        />
      </div>
      <div className="cart-summary-container">
        <CartSummary
          cartItem={cartItem}
          getTotalCartAmount={getTotalCartAmount}
          handlePayment={handlePayment}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default PaymentComponent;
