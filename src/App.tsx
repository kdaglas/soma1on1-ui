import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './Routes/routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
