import React from 'react';

const CartSummary = ({ cartItem, getTotalCartAmount, handlePayment, loading, error }) => {
  return (
    <div className="cart-summary">
      <div className="cart-details">
        <p>Total Items in Cart: {Object.values(cartItem).reduce((acc, curr) => acc + curr, 0)}</p>
        <p>Total Amount: {getTotalCartAmount()}</p>
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay!'}
      </button>
    </div>
  );
};

export default CartSummary;
