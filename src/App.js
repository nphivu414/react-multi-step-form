import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <div  style={{ backgroundImage: " url(/imag.png)" }}>
     
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </div>
  );
}

export default App;
